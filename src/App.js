import React, { useContext, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import { MainContent } from "./component/MainContent";
import { ProviderTimerContext } from "./context/timerContext";
import { ProviderCharacterContext } from "./context/charactersContext";
import CharactersMenu from "./component/CharactersMenu";
import Portal from "./component/Portal";
import Modal from "./component/Modal";
import PlayerData from "./component/PlayerData";
import { ProviderGameOverContext } from "./context/gameOverContext";
function App() {
  return (
    <div>
      <ProviderTimerContext>
        <ProviderCharacterContext>
          <ProviderGameOverContext>
            <Header />
            <MainContent />
            <CharactersMenu />
            <Portal>
              <Modal>
                <PlayerData />
              </Modal>
            </Portal>
          </ProviderGameOverContext>
        </ProviderCharacterContext>
      </ProviderTimerContext>
    </div>
  );
}

export default App;
