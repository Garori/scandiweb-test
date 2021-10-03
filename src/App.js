import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CategoriesPage from "./pages/categoriesPage";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return(
    <Router>
      <Switch>
        <Route path='/categories' component={CategoriesPage}/>
        <Route path='*'>
          <Redirect to='/categories'/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
