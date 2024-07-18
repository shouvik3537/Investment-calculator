import Input from "./components/Input";

function App() {
  const headerArray = ["Year", "Investment", "Interest(Year)", "Total Interest", "Investment Capitial" ];


  return (
    <div>
      <Input />
      {headerArray}

    </div>
      );
}

export default App
