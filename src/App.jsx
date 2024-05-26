import Hello from "./components/Hello";
function App() {

  return (
    <div className="App">
      <Hello name="!" message="Hello there" emoji="👋" />
      <Hello name="1" message="Day" />
      <Hello name=" " message="Subscribe and Follow Padhantey !!" emoji="🔔" />
    </div>
  );
}

export default App
