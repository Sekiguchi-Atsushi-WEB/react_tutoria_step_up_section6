import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "/src/components/templates/DefaultLayout";
import { HeaderOnlyLayout } from "/src/components/templates/HeaderOnlyLayout";
import { Top } from "/src/components/pages/Top";
import { Users } from "/src/components/pages/Users";

/**
 * Routerコンポーネント
 */
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          }
        />
        <Route
          path="/users"
          element={
            <HeaderOnlyLayout>
              <Users />
            </HeaderOnlyLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
