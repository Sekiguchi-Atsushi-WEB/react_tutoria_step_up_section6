import styled from "styled-components";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { Input } from "../atoms/inputs/Input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <PrimaryButton>検索</PrimaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
