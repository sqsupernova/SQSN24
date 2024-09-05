import React from "react";
import "./App.css";
import blurbData from "./blurbs.json";

const blurbs: { blurb: string; date: string; ranking: string; text: string }[] =
  blurbData;
const blurbCount = blurbs.length;

function getRandomIndex(fallbackNumber: number): number {
  if (blurbCount > 0) {
    return Math.floor(Math.random() * blurbCount);
  } else {
    return fallbackNumber;
  }
}

const App: React.FC = () => {
  const [randomIndex, setRandomIndex] = React.useState(-1);

  function handleSetRandomIndex(): void {
    setRandomIndex((prev) => getRandomIndex(prev));
  }

  if (blurbCount && randomIndex === -1) {
    handleSetRandomIndex();
  }

  return (
    <main>
      <header className="starry">
        <div id="nav-logo">
          <div id="nav-logo__upper">Swan Queen</div>
          <div id="nav-logo__lower">
            Supernova <span>9</span>
          </div>
          <div id="nav-logo__sub">Thank Your Lucky Stars</div>
        </div>
      </header>
      {blurbCount && randomIndex > -1 ? (
        <>
          <article className="card">
            <header>Coming {blurbs[randomIndex].date}</header>
            <div className="contents">
              <section>
                <header>
                  <div>a fic for readers who love...</div>
                </header>
                <div className="blurb">{blurbs[randomIndex].blurb}</div>
              </section>
            </div>
            <footer>
              Stay tuned for this and many more{" "}
              <a href="https://sqsupernova.tumblr.com/">#SwanQueen</a> fics.
              Reveals start Sept 9th!
            </footer>
          </article>
          <div>
            <button onClick={handleSetRandomIndex}>Get another blurb</button>
          </div>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </main>
  );
};

export default App;
