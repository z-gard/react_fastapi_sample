import React, { useState } from "react";
import "./App.css";

import { ApiGet_Simple } from './ApiGet';

const App = (): JSX.Element => {
  const [clickedButton, setClickedButton] = useState('');

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;

    setClickedButton(button.name);

    // API呼び出し
    ApiGet_Simple("http://localhost:3030/items/123?q="+button.name)
  };

  return (
    <div className="container">
      <form>
        <button onClick={buttonHandler} className="button" name="button 1">
          Button 1
        </button>

        <button onClick={buttonHandler} className="button" name="button 2">
          Button 2
        </button>

        <button onClick={buttonHandler} className="button" name="button 3">
          Button 3
        </button>

        <button onClick={buttonHandler} className="button" name="button 4">
          Button 4
        </button>
      </form>
      <h1>
        {clickedButton !== ""
          ? `You have clicked "${clickedButton}"` 
          : "No button clicked yet"}
      </h1>
      
    </div>
  );
};

export default App;