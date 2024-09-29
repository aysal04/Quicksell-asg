import "./App.css";
import Board from "./components/Board";
import { GroupByProvider } from "./context/GroupByContext";
import { SortingProvider } from "./context/SortingContext";

function App() {
  return (
    <div className="App">
      <SortingProvider>
        <GroupByProvider>
          <Board />
        </GroupByProvider>
      </SortingProvider>
    </div>
  );
}

export default App;
