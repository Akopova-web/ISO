import { Route } from "react-router-dom";
import "./App.css";
import { Content } from "./components/Content/Content";
import Navbar from "./components/Navigation/Navbar";
import Tasks from "./components/Tasks/Tasks";

const App = () => {
  return (
    <>
      <h1>Главное меню</h1>

      <div className="main_menu">
        <Navbar />
        <Route path="/main_menu_content" render={() => <Content />} />

        <Route path="/tasks" render={() => <Tasks />} />
        {/* <Route path="" render={( ) => <Notification />} />
        <Route path="" render={() => <AddSolve />} />
        <Route path="" render={() => <Calendar />} /> */}
      </div>
    </>
  );
};

export default App;
