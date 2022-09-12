import "./App.css";
import Header from "./component/Header";
import { MainContent } from "./component/MainContent";
import { ProviderGameContext } from "./context/gameContext";
import { ProviderCharacterContext } from "./context/charactersContext";

function App() {
  
  return (
    <div>
      <ProviderGameContext>
        <ProviderCharacterContext>
        <Header />
        <MainContent />
        </ProviderCharacterContext>
      </ProviderGameContext>
    </div>
  );
}

export default App;
