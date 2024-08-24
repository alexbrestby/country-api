import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Controls } from "./components/Controls/Controls";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  );
}

export default App;
