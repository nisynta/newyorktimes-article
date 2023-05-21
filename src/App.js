import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ArticleList from "./pages/ArticleLists";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Redirect to="/articles" />
        </Route>
        <Route exact path={"/articles"} component={ArticleList} />
      </Switch>
    </Router>
  );
}

export default App;
