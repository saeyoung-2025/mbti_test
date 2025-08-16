import { Question } from "@/data/questions";

type Answer = "A" | "B";
type Answers = Record<number, Answer>;

export interface PersonalityScores {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

export interface MBTIResult {
  type: string;
  scores: PersonalityScores;
}

export function calculateMBTI(answers: Answers, questions: Question[]): MBTIResult {
  const scores: PersonalityScores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
  };

  // Count scores for each dimension
  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = questions.find(q => q.id === parseInt(questionId));
    if (!question) return;

    const selectedOption = question.options[answer === "A" ? 0 : 1];
    scores[selectedOption.value]++;
  });

  // Calculate percentages
  const totalQuestions = questions.length;
  const dimensionCounts = {
    EI: scores.E + scores.I,
    SN: scores.S + scores.N,
    TF: scores.T + scores.F,
    JP: scores.J + scores.P
  };

  // Convert to percentages
  const percentageScores: PersonalityScores = {
    E: dimensionCounts.EI > 0 ? (scores.E / dimensionCounts.EI) * 100 : 50,
    I: dimensionCounts.EI > 0 ? (scores.I / dimensionCounts.EI) * 100 : 50,
    S: dimensionCounts.SN > 0 ? (scores.S / dimensionCounts.SN) * 100 : 50,
    N: dimensionCounts.SN > 0 ? (scores.N / dimensionCounts.SN) * 100 : 50,
    T: dimensionCounts.TF > 0 ? (scores.T / dimensionCounts.TF) * 100 : 50,
    F: dimensionCounts.TF > 0 ? (scores.F / dimensionCounts.TF) * 100 : 50,
    J: dimensionCounts.JP > 0 ? (scores.J / dimensionCounts.JP) * 100 : 50,
    P: dimensionCounts.JP > 0 ? (scores.P / dimensionCounts.JP) * 100 : 50
  };

  // Determine personality type
  const type = 
    (percentageScores.E > percentageScores.I ? "E" : "I") +
    (percentageScores.S > percentageScores.N ? "S" : "N") +
    (percentageScores.T > percentageScores.F ? "T" : "F") +
    (percentageScores.J > percentageScores.P ? "J" : "P");

  return {
    type,
    scores: percentageScores
  };
}
