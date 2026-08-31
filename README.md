# Habit tracker app

## Overview

A simple front-end app built with TypeScript, React.js and Tailwindcss that lets you manage and track your habits smoothly.

## Features

* Add, edit, and delete habits.
* Track daily / weekly progress and streaks.
* Visual habit calendar.
* Clean, responsive UI with icon-based habit categories.

## Technology Used

* React 19 + TypeScript
* Vite (build tool)
* Tailwind CSS v4

## Packages

* `date-fns` — date handling and streak/calendar calculations.
* `lucide-react` — icon set.
* `tailwind-merge` — utility for merging Tailwind class names.

## Project structure

```
react-habit-tracker/
├── node_modules/
├── public/
├── src/
|   ├── assets/
|   |   └── favicon.svg
|   ├── components/
|   |   ├── Button.tsx
|   |   ├── Header.tsx
|   |   ├── HabitForm.tsx
|   |   ├── HabitList.tsx
|   |   └── HabitItem.tsx
|   ├── context/
|   |   ├── HabitProvider.tsx
|   |   └── useHabits.ts
|   ├── hooks/
|   |   └── useLocalStorage.ts
|   ├── App.tsx
|   ├── main.tsx
|   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Quick Start

### Prerequisites

* Git
* Node
* NPM (comes with Node)

### Installation

#### 1. clone the repo locally

```bash
git clone https://github.com/black-purple-jr/react-habit-tracker
```

#### 2. install the necessary dependencies

```bash
npm install
```

#### 3. run a local dev server

```bash
npm run dev
```

## License

This project is under MIT License — see [LICENSE](LICENSE) for details.

## Author

* Abdellah DAKIR ALLAH - [black-purple-jr](https://github.com/black-purple-jr) on GitHub and other platforms.