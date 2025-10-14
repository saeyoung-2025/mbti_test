import { supabase } from './supabase'

export interface TestResult {
  sessionId: string
  personalityType: string
  scores: {
    E: number
    I: number
    S: number
    N: number
    T: number
    F: number
    J: number
    P: number
  }
  answers: Record<number, string>
  completedAt: string
}

export async function saveTestResult(result: TestResult) {
  const { data, error } = await supabase
    .from('test_results')
    .insert([result])
    .select()

  if (error) {
    console.error('Error saving result:', error)
    throw error
  }

  return data
}