import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";
import "./style.css";

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}

export default App;
