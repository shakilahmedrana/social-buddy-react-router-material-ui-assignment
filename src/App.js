import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';
import Comments from './components/Comments/Comments';
import Nomatch from './components/Nomatch/Nomatch';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
            <Home />
          </Route>
        <Route path="/Posts">
        <Posts/>
        </Route>
        <Route path="/PostDetail/:Id">
          <PostDetail/>
        </Route>
        <Route path="/comments">
          <Comments/>
        </Route>
        <Route path="*">
          <Nomatch/>
        </Route>
      </Switch>
    </Router>
     
  );
}

export default App;
