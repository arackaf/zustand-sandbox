# Zustand Sandbox

A progressive exploration of state management patterns in React, demonstrating the evolution from vanilla React to optimized Zustand implementations.

## 🎯 Purpose

This sandbox showcases different state management approaches, from basic React patterns to advanced Zustand optimizations. Each implementation solves the same task management problem but with increasingly sophisticated techniques.

## 📚 State Management Progression

### 1. **Vanilla React** (`vanilla`)

- **Approach**: Traditional React Context + useReducer
- **Use case**: When you need a simple, built-in solution
- **Pros**: No external dependencies, familiar patterns
- **Cons**: Boilerplate code, potential performance issues with large state trees

### 2. **Zustand Basic** (`zustand`)

- **Approach**: Standard Zustand store with direct state updates
- **Use case**: Simple state management with minimal setup
- **Pros**: Lightweight, easy to understand, less boilerplate
- **Cons**: Components re-render on any state change

### 3. **Zustand Optimized** (`zustand-optimized`)

- **Approach**: Zustand with shallow comparison hooks
- **Use case**: Performance-critical applications
- **Pros**: Prevents unnecessary re-renders, better performance
- **Cons**: Requires understanding of shallow comparison

### 4. **Zustand Hooks** (`zustand-hooks`)

- **Approach**: Custom hooks wrapping Zustand selectors
- **Use case**: Production applications requiring maintainable, reusable state logic
- **Pros**: Best performance, clean API, reusable logic, type safety
- **Cons**: Slightly more setup initially

## 🏗️ Architecture

```text
src/
├── apps/
│   ├── common/          # Shared components and types
│   ├── vanilla/         # React Context implementation
│   ├── zustand/         # Basic Zustand store
│   ├── zustand-optimized/ # Optimized with shallow hooks
│   └── zustand-hooks/   # Custom hooks pattern
├── hooks/               # Reusable hooks (useLocalStorage, etc.)
└── utils/              # Utility functions
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Switch between implementations using the navigation buttons to see the different approaches in action.

## 📖 Learning Path

1. Start with **Vanilla** to understand the problem
2. Move to **Zustand Basic** to see the improvement
3. Explore **Zustand Optimized** for performance insights
4. Study **Zustand Hooks** for the best practices

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Zustand** for state management
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Prettier** + **ESLint** for code quality

## 📚 Resources

Based on: [Frontend Masters - Introducing Zustand](https://frontendmasters.com/blog/introducing-zustand/)
