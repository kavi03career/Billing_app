import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from '../../history';
import "./Menu.css";

export default class Menu extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p>A simple app showing react button click navigation</p>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/Products')}>Click button to view products</Button>
          </form>
        </div>
      </div>
    );
  }
}
