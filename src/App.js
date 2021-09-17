import "./styles.css";
import { useState } from "react";
import Message from "./Message";
let sumOfDoB = 0;
function getSumofDoB(doB) {
  while (doB > 0) {
    sumOfDoB += doB % 10;
    console.log(doB);
    console.log(sumOfDoB);
    doB = Math.floor(doB / 10);
    console.log(sumOfDoB);
  }
}
export default function App() {
  const [date, setDate] = useState(0);
  const [favNum, setfavNum] = useState("");
  const [img, setImage] = useState("");
  const [words, setWords] = useState("");
  let doB = Number(String(date).replace(/-/g, ""));
  console.log("running");
  return (
    <div className="App">
      <h1>Enter Your Birthdate and lucky number to continue...</h1>
      <label for="date">Select your Birth date :</label>
      <br />
      <h1>Privacy note</h1>
      <h2>We are not storing your birthdate</h2>
      <form
        onSubmit={(e) => {
          console.log("sike");
          e.preventDefault();
          getSumofDoB(doB);
          if (favNum < 0) {
            setWords("Enter proper value");
            return;
          }
          if (sumOfDoB % favNum === 0) {
            setImage(
              "https://codesandbox.io/api/v1/sandboxes/rv9hp/fs/src/happy.svg"
            );
            setWords("Congrats you are a lucky person");
          } else {
            setImage(
              "https://codesandbox.io/api/v1/sandboxes/rv9hp/fs/src/unhappy.svg"
            );
            setWords("Oops!!Your birthday is not a lucky number!");
          }
        }}
      >
        <input
          id="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
          type="date"
          required
        />
        <br />
        <label for="num">Enter your Lucky Number:</label>
        <br />
        <input
          min="1"
          required
          id="num"
          value={favNum}
          onChange={(e) => {
            setfavNum(e.target.value);
          }}
        />
        <br />
        <button type="submit">Check</button>
      </form>
      <Message img={img} words={words} />
      <footer className="footer">
        <div className="footer-header">contact me</div>
        <ul className="social-links list-non-bullet ">
          <li className="list-item-inline">
            <a
              className="link"
              href="https://github.com/Kevin-Solomon"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/kevin-solomon-8b2b2b1a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://twitter.com/kevinsolomon777"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
