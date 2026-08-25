import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";
import HabitProvider from './context/HabitProvider';
import Header from './components/Header';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import { useState, type ReactNode } from 'react';
import './index.css';

export default function App(): ReactNode {
  const [weekOffset, setWeekOffset] = useState(0);
  const week = addWeeks(new Date(), weekOffset);

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(week, { weekStartsOn: 1 }),
    end: endOfWeek(week, { weekStartsOn: 1 })
  });


  return (
    <div className='max-w-2xl mx-auto p-4 flex flex-col gap-4'>
      <HabitProvider>
        <Header
          visibleDates={visibleDates}
          onNext={() => { setWeekOffset(o => o + 1) }}
          onPrev={() => { setWeekOffset(o => o - 1) }}
        />
        <HabitForm />
        <HabitList visibleDates={visibleDates} />
      </HabitProvider>
    </div>
  )
}