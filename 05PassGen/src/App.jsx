import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [Password, setPassword] = useState("");
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const passwordRef = useRef(null)
  let [CopyText, setCopyText] = useState("Copy")

  const copyPasswordToClipBoard = useCallback(()=> {
    console.log(CopyText)
    setCopyText("Copied")
    console.log(CopyText)
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)
  },[Password])

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(charAllowed) str+="{}[]<>?!@#$%^&*()"
    if(numAllowed)   str+="1234567890"

    for (let i = 0; i <=length; i++) {



      let randomNum = Math.floor(Math.random() * str.length )
      pass  +=str.charAt(randomNum)
      

      
    }
    setPassword(pass)
    
  }, [charAllowed,numAllowed,length])


  
  useEffect(() => {
    passwordGenerator()
  },[length,charAllowed,numAllowed])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-2 py-2 my-8 text-orange-400 bg-gray-600">
      
      <h2 className="text-center">Password Generator</h2>
      <div className="flex  shadow-lg rounded-lg overflow-hidden mb-4 justify-center">
        <input
          type="text"
          className=" rounded outline-none py-1 px-1 m-3"
          placeholder="Password"
          value={Password}
          readOnly
          ref={passwordRef}
        ></input>
        <button onClick={copyPasswordToClipBoard} className="bg-orange-500 rounded-lg  px-2 py-0 text-white">
          {CopyText}
        </button>
      </div>

      <div className="flex gap-5 rounded-lg overflow-hidden mb-4 justify-center">
        <div>
          <input
            onChange={(e) => {
              setLength(e.target.value);
            }}
            value={length}
            type="range"
            min="6"
            max="15"
            className="cursor-pointer"
          ></input>
          <label>Lenght:{length}</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charAllowed"
            onClick={() => {
              setCharAllowed((prev) => !prev);
            }}
          ></input>
          <label>Characters</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numAllowed"
            onClick={() => {
              setNumAllowed((prev) => !prev);
            }}
          ></input>
          <label>Numbers</label>
        </div>
      </div>
    </div>
  );
}

export default App;
