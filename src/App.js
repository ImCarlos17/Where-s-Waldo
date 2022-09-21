import React from "react";
import "./App.css";
import Header from "./component/Header";
import { MainContent } from "./component/MainContent";
import { ProviderTimerContext } from "./context/timerContext";
import { ProviderCharacterContext } from "./context/charactersContext";
import CharactersMenu from "./component/CharactersMenu";

function App() {
  
  return (
    <div>
      <ProviderTimerContext>
        <ProviderCharacterContext>
          <Header />
          <MainContent />
          <CharactersMenu/>
        </ProviderCharacterContext>
      </ProviderTimerContext>
    </div>
  );
}

export default App;
