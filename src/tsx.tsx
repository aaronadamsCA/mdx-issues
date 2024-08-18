import { items } from "./items.js";

export default function () {
  return (
    <>
      <h2>TypeScript</h2>
      <ul>
        {Object.entries(items).map(([name, Component], index) => (
          <Component key={index}>{name}</Component>
        ))}
      </ul>
    </>
  );
}
