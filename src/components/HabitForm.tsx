import { useState, type SubmitEvent, type ReactNode } from "react";
import Button from "./Button";
import useHabits from "../context/useHabits";


export default function HabitForm(): ReactNode {
  const [name, setName] = useState("")
  const { addHabit } = useHabits()

  function handleSubmit(e: SubmitEvent): void {
    e.preventDefault();
    if (name.trim() === "") return
    addHabit(name);
    setName("");

  }

  return (
    <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        className="flex-1 rounded-lg bg-zinc-800 px-3.5 py-1.5 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 "
        placeholder="New Habit..."
      />
      <Button
        variant="primary"
        disabled={name.trim() === ""}
      >
        Add Habit
      </Button>
    </form>
  )
}