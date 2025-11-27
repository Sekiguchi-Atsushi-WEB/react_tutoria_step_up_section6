import { useContext } from "react";
import { UserContext } from "/src/providers/UserContext";
import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "/src/components/atoms/buttons/SecondaryButton";
import styled from "styled-components";

/**
 * Topページ
 */
export const Top = () => {
  const { setUerInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const onClickAdmin = () => {
    setUerInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickGeneral = () => {
    setUerInfo({ isAdmin: false });
    navigate("/users");
  };

  return (
    <SContainer>
      <h2>Topページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
