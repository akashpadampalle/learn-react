import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });

  useEffect(() => {
    document.title = "use effect";
  });

  return (
    <>
      <input ref={ref} type="text" className="form-control" />
    </>
  );
}

export default App;
