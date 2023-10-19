import React, {useState} from "react";
import './App.css';

function  Smiley (props) {
    return (
        <div>
            <span>{props.name}</span>
            <button onClick={props.onClick}>Голосувати</button>
            <p>Clicks: {props.count}</p>
        </div>
    );

}


function App() {

  const [ smilies, setSmilies] = useState([
      { name: '😁', count: 0 },
      { name: '😍', count: 0 },
      { name: '🤪', count: 0 },
      { name: '😉', count: 0 },
      { name: '🤗', count: 0 },
      { name: '😀', count: 0 }
  ]);

  const [ showWinner, setShowWinner] = useState(false);
  const [ winner, setWinner] = useState(null);

  const vote = (index) => {
      const updatedSmilies = [...smilies];
      updatedSmilies[index].count += 1;
      setSmilies(updatedSmilies);
  };

  const showResults = () => {
      const winnerSmiley = smilies.reduce((prev, current) => (current.count > prev.count ? current : prev));
      setWinner(winnerSmiley);
      setShowWinner(true);
  }

  return (
      <div>
          <h1>Голосування за смайлики</h1>
          <div id={"smile-container"}>
          {smilies.map((smiley, index) => (
              <Smiley key={index} name={smiley.name} count={smiley.count} onClick={() => vote(index)} />
          ))}
          </div>
          <button onClick = { showResults }>Показати результати</button>
          {showWinner && <p> Переможець: { winner.name} </p> }

      </div>
  )
}

export default App;
