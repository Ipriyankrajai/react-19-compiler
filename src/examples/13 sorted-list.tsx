export default function SortedList({ names }: { names: string[] }) {
  const sortedNames = [...names].sort();

  return (
    <ul>
      {sortedNames.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}
