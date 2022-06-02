import './index.css';
import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import {useState} from 'react';

function Menu() {
  return (
    <BrowserRouter>
    <Link to="/Home"></Link>
    <Link to="/About"></Link>
    <Link to="/Menu"></Link>
    <Link to="/Events"></Link>
    <Link to="/Contact"></Link>
    </BrowserRouter>
  );
}

export default Menu;
