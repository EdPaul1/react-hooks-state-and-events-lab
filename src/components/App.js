import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [theme, setTheme] = useState("App light");

  const appClass = theme === "App light" ? "App light" : "App dark";

  function darkModeToggle() {
    console.log("Button clicked");
    setTheme(theme === "App light" ? "App dark" : "App light");
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkModeToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
