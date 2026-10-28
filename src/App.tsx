
import { useState } from "react";

function StudentCard({ name }: { name: string }) {
  return <h2>Welcome, {name}!</h2>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <StudentCard name="Parul" />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
