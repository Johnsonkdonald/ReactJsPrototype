// import React, { Component } from "react";
// import { Route,NavLink, HashRouter} from "react-router-dom";

// class Stuff extends Component {
//   render() {
//     return (
//       <div>
//         <h2>STUff</h2>
//       </div>
//     );
//   }
// }

// export default Stuff;
import React, { Component } from "react";
import Drawer from "./Drawer.jsx";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "../App.css";
import menubar from "../img/menu.png";
import profile from "../img/profile.png";
import search from "../img/search.png";
import saveFileOption from "../img/saveFileOption.png";
import printer from "../img/printer.png";
import bellside from "../img/bellside.png";
import clock from "../img/clock.png";
import shield from "../img/shield.png";
import brokenLink from "../img/brokenLink.png";
import copy from "../img/copy.png";
import edit from "../img/edit.png";
import starTop from "../img/topImage/starTop.png";
import shareTop from "../img/topImage/shareTop.png";
import resizeTop from "../img/topImage/resizeTop.png";
import linkTop from "../img/topImage/linkTop.png";

//import image from 

export default class sideBar extends Component {
  state = {
    openLeft: false,
    openRight: false,
    drawerStyle: `
{
  "background": "#F9F9F9",
  "boxShadow": "rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px"
}`,
    relativeWidth: false,
    width: 300,
    noTouchOpen: false,
    noTouchClose: false,
  };


  render() {
    const {
      drawerStyle: stringDrawerStyle,
      openLeft,
      openRight,
      noTouchOpen,
      noTouchClose
    } = this.state;

    let drawerStyle = {}
    try {
      drawerStyle = JSON.parse(stringDrawerStyle)
    } catch (err) {
      console.error('Error parsing JSON: ', err)
    }

    const drawerProps = {
      overlayColor: "rgba(255,255,255,0.6)",
      drawerStyle
    };

    return (
      <div className="wrapper">
        {/* Header */}
        <div className="navbar-fixed headerMain">
          <ul>
            <li><h3 className="title">Intro</h3></li>
            <li><NavLink to="#" className="uiUx">UI/UX</NavLink></li>
            <li><NavLink to="#" className="link">Category name <span>»</span></NavLink></li>
            <li><NavLink to="#" className="link">Collection name <span>»</span></NavLink></li>
            <li><NavLink to="#" className="link">Board name <span>»</span></NavLink></li>
            <li><NavLink to="#" className="link">view <span>|</span></NavLink></li>
            <li><NavLink to="#" className="link">Card name <span>»</span></NavLink></li>
            <li><NavLink to="#" className="link">Edit <span>|</span></NavLink></li>
            <li><NavLink to="#" className="link">Card name</NavLink></li>
          </ul>
          <ul className="floatRight">
            <li className="icon"><img src={starTop} /></li>
            <li className="icon"><img src={shareTop} /></li>
            <li className="icon"><img src={resizeTop} /></li>
            <li className="icon"><img src={linkTop} /></li>
            <li><NavLink to="#" className="uiUx">Share 12</NavLink></li>
            <li className="icon"><img src={edit} /></li>
          </ul>
        </div>

        {/* SideBar */}
        <div className="sidebar">
          <ul>
            <li><img src={menubar} className="menubar" /></li>
            <li><img src={profile} className="progileImg" /></li>
            <li className="icon"><img src={search} /></li>
            <li className="icon"><img src={saveFileOption} /></li>
            <li className="icon"><img src={printer} /></li>
            <li className="icon"><img src={bellside} /></li>
            <li className="icon"><img src={clock} /></li>
            <li className="icon"><img src={shield} /></li>
            <li className="icon"><img src={brokenLink} /></li>
            <li className="icon"><NavLink to="/cards">Cards</NavLink></li>
            <li className="icon"><img src={copy} /></li>
          </ul>
        </div>

        {/* Footer */}
        <div className="footerMain">
          <ul>
            <li><h3 className="title">&copy; 2019 All Rights Reserved.</h3></li>
          </ul>
          <ul className="floatRight">
            <li><NavLink to="#" className="uiUx cancel">Cancel</NavLink></li>
            <li><NavLink to="#" className="uiUx save">Save</NavLink></li>
            <li><NavLink to="#" className="uiUx saveVeryfy">Save & Verify</NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
}