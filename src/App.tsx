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
      <header className="starry">
        <div id="nav-logo">
          <div id="nav-logo__upper">Swan Queen</div>
          <div id="nav-logo__lower">
            Supernova <span>8</span>
          </div>
          <div id="nav-logo__sub">Catch A Falling Star</div>
        </div>
      </header>
      {blurbCount && randomIndex > -1 ? (
        <div>
          <article className="card">
            <header>Coming {blurbs[randomIndex].date}</header>
            <div className="contents">
              <section>
                <header>
                  <span>a fic for readers who love...</span>
                </header>
                <div className="blurb">{blurbs[randomIndex].blurb}</div>
              </section>
            </div>
            <footer>
              Stay tuned for this and many more{" "}
              <a href="https://sqsupernova.tumblr.com/">#SwanQueen</a> fics.
              Reveals start Sept 11th!
            </footer>
          </article>
          <button onClick={getRandomIndex}>Get another blurb</button>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </main>
  );
};

export default App;
