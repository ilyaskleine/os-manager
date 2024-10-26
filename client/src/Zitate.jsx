import Zitat from "./Zitat";
import "./Zitate.css";

export default function Zitate() {
  let zitate = [
    "The only way to do great work is to love what you do.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The only person you are destined to become is the person you decide to be.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The best way to find yourself is to lose yourself in the service of others.",
    "The only thing we have to fear is fear itself.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Believe you can and you're halfway there.",
    "The only thing we have to fear is fear itself.",
  ];

  return (
    <>
      <div className="page-header">
        <h1>
          <span className="icon-headline material-symbols-outlined ">
            comment
          </span>
          Zitate
        </h1>
        <p>
          Hier kannst du Zitate hinzufügen, die in der Abi-Zeitung erscheinen
          sollen oder dir Zitate der anderen anschauen.
        </p>
        <hr></hr>
      </div>
      <div className="zitate-container">
        {zitate.map((zitat, index) => (
          <Zitat zitat={zitat} />
        ))}
      </div>
    </>
  );
}
