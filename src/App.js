import React, {useEffect} from "react"
import {Switch, Route, useHistory, Router} from "react-router-dom";
import logo from './logo.svg';
import NavBar from "./general/NavBar";
import Home from "./home/Home";
import Footer from "./general/Footer";
import Members from "./members/Members";
import './App.scss';
import research_rc from "./research/research_rc";


function App() {
  let history = useHistory();

  //scroll to top when url is changed
  useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unListen();
    }
  }, []);



  return (
    <div className={"App"}>
     
      <NavBar/>
 
 
      <Switch>
      <Route path={"/"} exact component={Home}/>
      <Route path={"/members/members"} component={Members}/>
      <Route path={"/members/research_rc"} component={research_rc}/>
      
      </Switch>
    </div>
  );
}

export default App;
