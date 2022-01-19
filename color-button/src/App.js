import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColorText = buttonColor === "blue" ? "red" : "blue";

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColorText)}
        disabled={disabled}
      >
        Change to {newButtonColorText}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        aria-checked={disabled}
        defaultChecked={disabled}
        onClick={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
