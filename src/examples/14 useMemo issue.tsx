import { useState, useMemo } from "react";

export default function SortedList({ names }: { names: string[] }) {
  const [newNames, setNewNames] = useState<string[]>(names);

  useMemo(() => {
    setNewNames(names);
  }, [names]);

  const sortedNames = [...newNames].sort();

  return (
    <ul>
      {sortedNames.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}
