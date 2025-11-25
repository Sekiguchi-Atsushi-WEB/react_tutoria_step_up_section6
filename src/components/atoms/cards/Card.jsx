import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <Scard>{children}</Scard>;
};

const Scard = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-radius: 16px;
`;
