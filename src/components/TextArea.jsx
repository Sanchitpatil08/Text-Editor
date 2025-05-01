import React from "react";
import { useState } from "react";
import './TextArea.css';



export default function TextArea(props) {
  const convertUppercase = () => {
    const textUpcase = text.toUpperCase();
    setText(textUpcase);
  };

  const covertLowercase = () => {
    const textLOwercase = text.toLocaleLowerCase()
    setText(textLOwercase)
  }
  const hadleOnchange = (event) => {
    setText(event.target.value);
  };

  const clearText = () => {
    setText("");
  };

  const copyText = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value)
  };

  const handelExtraspcae = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode === "light"?"black" : "white"}}>
        <div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label my-3">
              <h1>Enter Your Text here</h1>
            </label>
            <textarea
              className="form-control"
              value={text}
              onChange={hadleOnchange}
              style={{backgroundColor: props.mode === "light"?"white" : "#0d1117", color: props.mode === "light"?"black" : "white" }}
              id="exampleFormControlTextarea1"
              rows="6"
            ></textarea>
          </div>

          <button type="button"
            className="btn btn-primary"
            onClick={convertUppercase}
          >
            Set to UpperCase
          </button>

          <button type="button" className="btn btn-primary mx-3" onClick={covertLowercase}>Set to Lowercase</button>

          <button type="button" className="btn btn-primary mx-3" onClick={clearText}> Clear </button>

          <button type="button" className="btn btn-primary mx-3"onClick={copyText}> Copy Text </button>
          <button type="button" className="btn btn-primary mx-3"onClick={handelExtraspcae}> Remove space </button>

          

        </div>
      </div>

      <div className="container my-3" style={{color: props.mode === "light"?"black" : "white"}}>
        <h3>Summary of your text is </h3>

        <p>
          {" "}
          {text.length} Characters and {text.split(" ").length} Words
        </p>

        <div className="container">
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
