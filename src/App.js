import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Calendar from "./components/Content/Calendar/Calendar";
import { Content } from "./components/Content/Content";
import { store } from "./components/context/redux/store";
import { Navbar } from "./components/Navigation/Navbar";
import Tasks from "./components/Tasks/Tasks";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app_wrapper">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Content tasks={store.getState().tasksPage.tasks} />
              )}
            />
            <Route
              path="/tasks"
              render={() => <Tasks tasks={store.getState().tasksPage.tasks} />}
            />
            <Route path="/calendar" render={() => <Calendar />} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
};
export default App;
