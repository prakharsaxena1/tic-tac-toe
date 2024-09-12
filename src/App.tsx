import Heading from "./Components/Heading";
import GameBoard from "./Components/GameBoard";
import Score from "./Components/Score";
import Controls from "./Components/Controls";

const App = () => {
  return (
    <main className="w-full h-[100vh] font-mono">
      <Heading />
      <GameBoard />
      <Controls />
      <Score />
    </main>
  );
};

export default App;
