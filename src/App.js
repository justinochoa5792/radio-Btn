import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    setMessage("You Clicked The Radio Button");
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h1>{message}</h1>
      <h1>{value}</h1>
      <h1>Radio Btn </h1>
      <form onSubmit={handleSubmit}>
        <input type="radio" value="Option 1" onChange={handleChange} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
