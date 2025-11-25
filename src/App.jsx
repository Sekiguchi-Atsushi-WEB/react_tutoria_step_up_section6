import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./style.css";

const user = {
  name: "山田 太郎",
  image: "/src/images/image.png",
  email: "example@test.com",
  tel: "000-9999-8888",
  company: {
    name: "テスト株式会社",
    web: "https://www.google.com/",
  },
};

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}

export default App;
