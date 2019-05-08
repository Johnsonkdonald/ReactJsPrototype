import React, { Component } from "react";
import { Route,NavLink, HashRouter} from "react-router-dom";
import Home from "../Componants/Home.jsx";
import Stuff from "../Componants/sideBar.jsx";
import Contact from "../Componants/Contact.jsx";
import Cards from "../Componants/Cards.jsx";
import Drawer from "../Componants/Drawer.jsx";
class Main extends Component {
  render() {
    return (
      <HashRouter>
          
          <Stuff/>
          <div>
            <Route path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/cards" component={Cards}/>
          </div>
      </HashRouter>
    );
  }
}

export default Main;