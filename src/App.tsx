import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import data from "./blurbs.json";

type Blurb = { blurb: string; date: string; ranking: string; text: string };

const App: React.FC = () => {
  const [blurbs, setBlurbs] = useState<Blurb[]>([]);
  const [randomIndex, setRandomIndex] = useState(-1);
  const blurbCount = blurbs.length;

  const getRandomIndex = useCallback(() => {
    setRandomIndex((prevIndex) => {
      if (blurbCount > 0) {
        return Math.floor(Math.random() * blurbCount);
      } else {
        return prevIndex;
      }
    });
  }, [blurbCount]);

  useEffect(() => {
    if (data) {
      setBlurbs(data);
    }
  }, []);

  useEffect(() => {
    if (blurbCount && randomIndex === -1) {
      getRandomIndex();
    }
  }, [blurbCount, randomIndex, getRandomIndex]);

  return (
    <main className="App">
      {blurbCount && randomIndex > -1 ? (
        <div>
          <article>{blurbs[randomIndex]?.text}</article>
          <button onClick={getRandomIndex}>{`Get another blurb!`}</button>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </main>
  );
};

export default App;
