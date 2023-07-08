import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";

import Button from "react-bootstrap/Button";

import ButtonGroup from "react-bootstrap/ButtonGroup";

import DropdownButton from "react-bootstrap/DropdownButton";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Routes } from 'react-router-dom';
  

const Header = () => {
  return (
    <div>


<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>

          {/*MyBank*/}
          <Navbar.Brand href="/">
            My Bank
           </Navbar.Brand>


          {/*personal banking*/}
          <NavDropdown title="Personal Banking" id="collasible-nav-dropdown">
             <NavDropdown.Item href="/savings">Saving </NavDropdown.Item>
                
                <NavDropdown.Item href="/savingplus"> Momentum Saving Plus </NavDropdown.Item>

                   <NavDropdown.Item href="/taxfreesavings">Tax Free Savings</NavDropdown.Item>
            
                       <NavDropdown.Item href="/help_inpersonalbanking"> Help </NavDropdown.Item>
          </NavDropdown>

          {/*Business banking*/}
          <NavDropdown title="Business Banking" id="collasible-nav-dropdown">
            <NavDropdown.Item href="savings">Saving Account</NavDropdown.Item>
            <NavDropdown.Item href="savingplus">
              Momentum Saving Plus
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
            Help
            </NavDropdown.Item>
          </NavDropdown>

          {/*mortgage*/}
          <NavDropdown title="Mortgage Center" id="collasible-nav-dropdown">
            <NavDropdown.Item href="savings">Saving Account</NavDropdown.Item>
            <NavDropdown.Item href="savingplus">
              Momentum Saving Plus
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
            Help
            </NavDropdown.Item>
          </NavDropdown>

          {/*Community*/}

          <NavDropdown title="Community" id="collasible-nav-dropdown">
            <NavDropdown.Item href="savings">Saving Account</NavDropdown.Item>
            <NavDropdown.Item href="savingplus">
              Momentum Saving Plus
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

          {/*Resources*/}
          <NavDropdown title="Resources" id="collasible-nav-dropdown">
            <NavDropdown.Item href="savings">Saving Account</NavDropdown.Item>
            <NavDropdown.Item href="savingplus">
              Momentum Saving Plus
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
            Help
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
      {/*Navbar 2*/}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">News</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Careers</Nav.Link>
            <Nav.Link href="#features">Support</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>

          {/*Dropdowns*/}
        <div className="dropdowns">  
        
          <Dropdown as={ButtonGroup}>
            
            <Button variant="success">Open an Account</Button>

            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Personal Account</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Business Account</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    
          <Dropdown as={ButtonGroup}>
            <Button variant="success">Login</Button>

            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Personal Account</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Business Account</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          </div>
        </Container>
      </Navbar>

      
     



    </div>
  )
}

export default Header