import "./App.css";
import { MainPage } from "../pages/main/ui/MainPage";
import { UsersProvider } from "../entities/user/model/UsersContext";

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <MainPage />
      </UsersProvider>
      
    </div>
  );
}

export default App;
