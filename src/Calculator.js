import { useState } from "react";
import './Calculator.css'
// const Calculator = ({abc}) => {
const Calculator = () => {
  const [text, setText] = useState("");
  const [text1, setText2] = useState("");
  const [result, settResult] = useState("");

  const [count, setCount] = useState(4);

  const clickMe = () => {
    window.alert("Hello");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleChange1 = (d) => {
    setText2(d.target.value);
  };
  const increment = () => {
    setCount(count + 1);
  };

  const Add = () => {
    settResult(Number(text) + Number(text1));
  };
  const Minous = () => {
    settResult(Number(text) - Number(text1));
  };
  const doubleIt = () => {
    settResult(Number(text) * Number(text1));
  };
  const Divide = () => {
    settResult(Number(text) / Number(text1));
  };

  return (
    <div className="Waqui" style={{ color: "red" ,textAlign:"center",border: '1px solid black',backgroundColor:"yellow"}}>
        <h1 style={{color:"black"}}>Demo Calculator</h1>
      <h1 onClick={clickMe}>Result {result}</h1>
      <input type="number" value={text} onChange={handleChange} style={{width:"200px" , backgroundColor:"purple",color:"white"}}/>
      <br /><br />

      <input className="container1" type="number" value={text1} onChange={handleChange1}style={{width:"200px" , backgroundColor:"purple",color:"white"}} />
      <br />

      <button onClick={Add} style={{margin:3,backgroundColor:"red",color:"white",width:"100px"}}><strong>Addition(+)</strong> </button>
      {/* <br /> */}

      <button onClick={Minous} style={{margin:3,backgroundColor:"red",color:"white",width:"100px"}}>
        <strong> Subtration(-) </strong>{" "}
      </button>
      <br />
      <button onClick={doubleIt} style={{margin:3,backgroundColor:"red",color:"white",width:"100px"}}> <strong>Multiplication(*)</strong> </button>
      {/* <br /> */}
      <button onClick={Divide} style={{margin:3,backgroundColor:"red",color:"white",width:"100px"}}>
        <strong> Devide (/) </strong>{" "}
      </button>
      <br />
      <br />
      <br />

    </div>

  );
};

export default Calculator;
