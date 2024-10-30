import { useEffect, useState } from "react";
import Zitat from "./Zitat";
import "./Zitate.css";
import axios from "axios";

export default function Zitate() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.0.36:4000/api/quotes")
      .then((response) => {
        if (response.data.success) {
          setQuotes(response.data.results);
        } else {
          console.error(response.data.error)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
        {quotes.map((quote, index) => (
          <Zitat key={quote.id} zitat={quote.content} />
        ))}
      </div>
    </>
  );
}
