import { useContext } from "react";
import { UserContext } from "/src/providers/UserContext";
import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  const context = useContext(UserContext);
  console.log(context);

  return (
    <SContainer>
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
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
