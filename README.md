# Task Manager App

Task manager app that demonstrates dynamic list rendering, key usage, and conditional rendering. Built with React and TypeScript.


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Reflections

1. How did you ensure unique keys for you list items?

    I used key={task.id} in TaskList. I didnt use the index as key because if you delete a task the index changes so the task changes position and that could confuse things.


2. What considerations did you make when implementing the filtering functionality?

    That the status and priority filters work together a task must match both. If nothing matches then display a message. Also the App component does the filtering the TaskFilter just sends then info to be filtered to the App component this makes the TaskFilter reusable.

3. How did you handle state updates for task status changes?

    I used map() to build a new array. The task that matches is replaced in the copy and the new status using ...spread operator. Deleting works the same way using filter();

4. What challenges did you face when implementing conditional rendering?

    I used && operator for the Great job message and a ternary operator for the line through completed titles. I used class names with ${task.status} or ${task.priority} so I can use CSS for the styling instead of if statements.