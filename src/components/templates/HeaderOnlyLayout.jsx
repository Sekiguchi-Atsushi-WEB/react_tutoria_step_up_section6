import { Header } from "/src/components/atoms/layout/Header";

export const HeaderOnlyLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
