# Day 36 - Redux Toolkit Task

This React + Vite project demonstrates Redux Toolkit with two slices: counter and todos.

## Run

```bash
npm install
npm run dev
```

## Test
- Click Increment, Decrement, and Reset; verify the count changes.
- Add a task; verify it appears in the list.
- Check/uncheck a task; verify it toggles completed status.
- Verify changing the counter does not reset the todo list (and vice versa).

`src/store/store.js` combines `counter` and `todos` slices using `configureStore`.
