import useHabits from "../context/useHabits";
import HabitItem from "./HabitItem";
import { type ReactNode } from 'react';

type HabitListProps = { visibleDates: Date[] }

export default function HabitList({ visibleDates }: HabitListProps): ReactNode {
  const { habits } = useHabits();

  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-500 py-12">
        No habits yet. Add one above to get started
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {habits.map(habit => (
        <HabitItem
          habit={habit}
          key={habit.id}
          visibleDates={visibleDates}
        />
      ))}
    </div>
  )
}
