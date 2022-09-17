import "./App.css";
import Header from "./component/Header";
import { MainContent } from "./component/MainContent";
import { ProviderGameContext } from "./context/gameContext";
import { ProviderCharacterContext } from "./context/charactersContext";
import CharactersMenu from "./component/CharactersMenu";

function App() {
  
  return (
    <div>
      <ProviderGameContext>
        <ProviderCharacterContext>
          <Header />
          <MainContent />
          <CharactersMenu/>
        </ProviderCharacterContext>
      </ProviderGameContext>
    </div>
  );
}

export default App;
