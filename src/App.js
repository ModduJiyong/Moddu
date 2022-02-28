import React, {useEffect} from "react"
import {Switch, Route, useHistory, Router} from "react-router-dom";
import logo from './logo.svg';
import NavBar from "./general/NavBar";
import Home from "./home/Home";
import Footer from "./general/Footer";
import Members from "./members/Members";
import Student from "./members/Members_student";
import Professor from "./members/Member_Prof";
import './App.scss';
import research_rc from "./research/research_rc";
import research_uiux from "./research/research_uiux";
import research_mi from "./research/research_mi";
import Publication from "./publication/Publication";

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
      <Route path={"/members/Member_Prof"} component={Professor}/>
      <Route path={"/members/Members_student"} component={Student}/>
      <Route path={"/research/research_rc"} component={research_rc}/>
      <Route path={"/research/research_uiux"} component={research_uiux}/>
      <Route path={"/research/research_mi"} component={research_mi}/>
      <Route path={"/publication/Publication"} component={Publication}/>
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;
