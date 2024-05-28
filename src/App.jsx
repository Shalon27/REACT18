import Hello from "./components/Hello";
function App() {
  const person ={
    name:"",
    message : "Hey there, its Day ",
    seatNumbers : [0,2],
    emoji: " !!",
  };
  
  return (
    <div className="App">
      <Hello person={person} />
    </div>
  );
}

export default App













/*const person = {
  name : "",
  message : "Hey there its Day",
  emoji : "",
  seatNumbers : [0,2],
};*/