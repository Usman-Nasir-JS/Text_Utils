import { useState } from "react";
import "./App.css";

function App() {
  let [text, setText] = useState("");

  function UpperCase(e) {
    e.preventDefault();
    setText(text.toUpperCase());
  }

  function LowerCase(e) {
    e.preventDefault();
    setText(text.toLowerCase());
  }

  function RemoveSpaces(e) {
    e.preventDefault();
    setText(text.replace(/\s+/g, "").trim());
  }

  function WordCount(word) {
    
    const value = word.split(" ");
    
    value.filter((res) => {
      return res !== " ";
    });
    
    return value.length;
  }

  function clearText(e) {
    e.preventDefault();
    setText("");
  }

  function CopyText(e) {
    e.preventDefault();
    
    navigator.clipboard
    .writeText(text)
    .then(() => alert("Text copied to clipboard!"))
    .catch((err) => console.error("Error copying text:", err));
  }

  return (
    <>
      <div className="container">
        
        <form className="form-box">
        
          <h2 className="heading">Enter Text to Analyze</h2>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type text here..."
            className="text-area"
          />

          <div className="button-group">

            <button onClick={UpperCase} className="btn primary">
              Uppercase
            </button>
            
            <button onClick={LowerCase} className="btn primary">
              Lowercase
            </button>
            
            <button onClick={RemoveSpaces} className="btn secondary">
              Remove Spaces
            </button>
            
            <button onClick={clearText} className="btn danger">
              Clear Text
            </button>
            
            <button onClick={CopyText} className="btn success">
              Copy Text
            </button>
          
          </div>
    
        </form>
  
      </div>

      <div className="summary">

        <h3>✈️ Your Text Summary ✈️</h3>
        
        <p>Text Length: <strong>{text.length}</strong></p>
        <p>Word Count: <strong>{text ? WordCount(text) : 0}</strong></p>
      
      </div>
    </>
  );

}

export default App;
