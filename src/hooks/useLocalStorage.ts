import { useEffect, useState } from "react";
import { parseISO } from "date-fns";

export default function useLocalStorage<T>(key: string, initialValue: T){
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      if (item === null) return initialValue;

      function dateReviver(_key: string, value: unknown){
        if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)){
          return parseISO(value);
        }

        return value;
      }

      return JSON.parse(item, dateReviver);
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [storedValue, key])

  return [storedValue, setStoredValue] as const;
}