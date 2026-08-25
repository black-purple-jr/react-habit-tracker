import { type ReactNode } from "react";
import { isSameDay } from 'date-fns'
import { HabitContext, type Habit } from "./useHabits.ts";
import useLocalStorage from "../hooks/useLocalStorage";

type HabitProviderProps = { children: ReactNode }

export default function HabitProvider({ children }: HabitProviderProps) {
  const [habits, setHabits] = useLocalStorage<Habit[]>("habits", []);

  function addHabit(name: string) {
    setHabits(current => [...current, { id: crypto.randomUUID(), name, completions: [] }]);
  }

  function deleteHabit(id: string) {
    setHabits(current => current.filter(habit => habit.id !== id))
  }

  function toggleHabit(id: string, date: Date) {
    setHabits(current => (
      current.map(h => {
        if (h.id !== id) return h

        const alreadyDone = h.completions.some(c => isSameDay(c, date));
        const completions = alreadyDone
          ? h.completions.filter(c => !isSameDay(c, date))
          : [...h.completions, date]

        return { ...h, completions }
      })
    ))
  }

  return (
    <HabitContext value={{ habits, addHabit, deleteHabit, toggleHabit }}>
      {children}
    </HabitContext>
  )
}