# React useContext & useReducer — Guided Learning Activity

A Vite + React + TypeScript app demonstrating global state management with
the Context API (`useContext`) via a theme switcher, and complex local
state management with `useReducer` via a task manager.

## Tools

- Vite
- React 19
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173/`.

Other scripts:

```bash
npm run build     # type-check and produce a production build
npm run lint       # run oxlint
npm run preview    # preview the production build locally
```

## What Was Implemented

### Section 1: Theme Switcher (`useContext`)

- **`src/constants/theme.ts`** — exports the `LIGHT_THEME` and `DARK_THEME`
  string constants used throughout the app.
- **`src/context/ThemeContext.tsx`** — creates a typed `ThemeContext`, a
  `ThemeProvider` component that holds `theme` state (`useState`) and a
  `toggleTheme` function, and a `useTheme()` hook that reads the context
  and throws if used outside the provider.
- **`src/components/Navbar.tsx`** + **`Navbar.module.css`** — a navbar with
  a brand label and a button that calls `toggleTheme()` from `useTheme()`.
  The button label reflects the theme it will switch *to*.
- **`src/App.tsx`** — wraps the whole app in `ThemeProvider` and applies the
  active theme's background/text color at the app root via `useTheme()`
  inside an inner `AppContent` component (the provider has to sit above
  any component that calls `useTheme`, so `App` itself can't call the
  hook directly).

### Section 2: Task Manager (`useReducer`)

- **`src/reducers/taskReducer.ts`** — a typed reducer (`Task`, `State`,
  `Action` types) handling two actions:
  - `add` — appends a new task built from the dispatched text payload.
  - `remove` — filters out the task matching the dispatched id.

  Throws on an unrecognized action type.
- **`src/components/TaskManager.tsx`** + **`TaskManager.module.css`** — uses
  `useReducer(taskReducer, [])` for the task list and `useState` for the
  controlled text input. Adding a task dispatches `add` and clears the
  input; each list item has an "X" button that dispatches `remove` for
  that task's id. The "Add Task" button is disabled while the input is
  blank/whitespace-only. The component also reads `useTheme()` so its
  background, text, and "Add Task" button color follow the active theme.

### Color Palette

Applied consistently across the navbar, app background, and task manager:

| | Background | Text | Button |
|---|---|---|---|
| Light | `#FFFFFF` | `#000000` | `#1E90FF` |
| Dark | `#242629` | `#FFFFFF` | `#85D1B0` |

## Project Structure

```
src/
├── constants/
│   └── theme.ts            # LIGHT_THEME / DARK_THEME constants
├── context/
│   └── ThemeContext.tsx    # ThemeProvider + useTheme hook
├── reducers/
│   └── taskReducer.ts      # add/remove task reducer
├── components/
│   ├── Navbar.tsx
│   ├── Navbar.module.css
│   ├── TaskManager.tsx
│   └── TaskManager.module.css
├── App.tsx                 # wires ThemeProvider, Navbar, TaskManager
├── App.css
├── main.tsx
└── index.css
```

## Verified Behavior

- Toggling the navbar button switches the app between light and dark
  themes, updating background, text, and button colors across the navbar
  and task manager.
- Typing in the task input enables the "Add Task" button; submitting adds
  the task to the list and clears the input.
- Clicking a task's "X" button removes it from the list.
- `npm run build` type-checks and builds cleanly.
