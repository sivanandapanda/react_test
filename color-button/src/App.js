import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "blue" ? "red" : "blue";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="enable-button-checkbox"
        aria-checked={disabled}
        defaultChecked={disabled}
        onClick={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
