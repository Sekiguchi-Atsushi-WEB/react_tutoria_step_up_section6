import { Header } from "/src/components/atoms/layout/Header";
import { Footer } from "/src/components/atoms/layout/Footer";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
