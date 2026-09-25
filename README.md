# react-usecontext-usereducer

React Guided Learning Activity: Theme Switcher (`useContext`) & Task Manager (`useReducer`), built with Vite + React + TypeScript.

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173/`.

## Project Structure

- `src/constants/theme.ts` — light/dark theme constants
- `src/context/ThemeContext.tsx` — `ThemeProvider` and `useTheme` hook for global theme state
- `src/components/Navbar.tsx` — toggles the app theme
- `src/reducers/taskReducer.ts` — typed reducer for adding/removing tasks
- `src/components/TaskManager.tsx` — task list built on `useReducer`, themed via `useTheme`
