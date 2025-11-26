import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "/src/components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "/src/components/atoms/buttons/SecondaryButton";
import { SearchInput } from "/src/components/molecules/SearchInput";
import { UserCard } from "/src/components/organisms/user/UserCard";
import { DefaultLayout } from "/src/components/templates/DefaultLayout";
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
    <BrowserRouter>
      <DefaultLayout className="App">
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
