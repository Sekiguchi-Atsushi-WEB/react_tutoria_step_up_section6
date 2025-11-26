import styled from "styled-components";
import { SearchInput } from "/src/components/molecules/SearchInput";
import { UserCard } from "/src/components/organisms/user/UserCard";
import users from "/src/users"; // ユーザーデータをインポート

/**
 * Usersページ
 */
export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput placeholder="検索条件を入力してください" />
      <SUserCards>
        {users.map((user) => {
          return <UserCard key={users.id} user={user} />;
        })}
      </SUserCards>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 20px;
  padding-top: 40px;
  width: 100%;
`;
