import { useContext } from "react";
import { UserContext } from "/src/providers/UserContext";
import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo?.isAdmin ?? false;
  // console.log(userInfo);

  return (
    <SContainer>
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <Sedit>編集</Sedit>}
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
`;
const SImage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  color: #40514e;
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
`;
const Sedit = styled.p`
  color: #777;
  font-size: 16px;
  text-decoration: underline;
  margin: 4px 0px 0px 0px;
  cursor: pointer;
`;
