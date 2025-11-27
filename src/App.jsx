import { UserProvider } from "/src/providers/UserProvider";
import { Router } from "/src/router/Router";
import "./style.css";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
