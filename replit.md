# MBTI Personality Test Application

## Overview

This is a comprehensive full-stack MBTI (Myers-Briggs Type Indicator) personality test application built with React on the frontend and Express on the backend. The application guides users through a series of psychological questions to determine their personality type, then provides detailed results including strengths, weaknesses, and career recommendations. Features complete multi-language support (Korean, English, Japanese, Chinese) with internationalized content, advanced analytics, SEO optimization, and modern user experience patterns.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (August 2025)

- ✅ **Complete Multi-language Support**: Implemented comprehensive i18n system supporting Korean, English, Japanese, and Chinese
- ✅ **Advanced Features**: Added result analytics, social sharing, personality compatibility analysis, and growth planning tools  
- ✅ **SEO Optimization**: Implemented meta tags, JSON-LD structured data, and Korean keyword targeting
- ✅ **Enhanced UX**: Added "Go Home" and "Restart Test" buttons for better navigation
- ✅ **Performance Optimization**: Used React useMemo for efficient question rendering and language switching

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with a simple single-page application structure
- **State Management**: React hooks for local state, TanStack Query for server state management
- **UI Framework**: shadcn/ui component library built on Radix UI primitives with Tailwind CSS for styling
- **Component Structure**: Modular design with reusable UI components and custom hooks
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Storage Interface**: Abstract storage interface (`IStorage`) with in-memory implementation (`MemStorage`)
- **Request Handling**: Express middleware for JSON parsing, logging, and error handling
- **Development Setup**: Vite integration for hot module replacement in development

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- **Schema Management**: Centralized schema definitions in shared directory using Drizzle with Zod validation
- **Tables**: 
  - Users table for authentication with username/password
  - Test results table storing personality scores, answers, and completion timestamps
- **Migration System**: Drizzle Kit for database migrations and schema updates

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (`connect-pg-simple`)
- **User Model**: Basic username/password authentication system
- **Storage Layer**: Abstracted user management through the storage interface

### External Dependencies
- **Database**: Neon Database (PostgreSQL-compatible serverless database)
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **Icons**: Lucide React for consistent iconography
- **Development Tools**: ESBuild for production builds, TSX for development server
- **Validation**: Zod for runtime type validation and schema definition

### Key Design Patterns
- **Separation of Concerns**: Clear separation between frontend, backend, and shared code
- **Type Safety**: End-to-end TypeScript with shared types and Zod validation
- **Component Composition**: Reusable UI components with consistent styling patterns
- **Abstract Storage**: Storage interface allows for easy switching between different database implementations
- **Configuration Management**: Environment-based configuration with proper type checking