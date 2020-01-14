import React from 'react';

import { Link } from "react-router-dom";

// reactstrap components
import {
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";

export default class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLogged: false };
    }
    componentWillReceiveProps(props) {
        this.setState({
            isLogged: props.login ? true : false
        })
    }
    render() {
        return (
            <Navbar className="navbar-dark bg-primary mt-4" expand="lg">
                <Container>
                    <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                        WOROFIN
              </NavbarBrand>
                    <button className="navbar-toggler" id="navbar-primary">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse navbar toggler="#navbar-primary">
                        <div className="navbar-collapse-header">
                            <Row>
                                <Col className="collapse-brand" xs="6">
                                    <Link to="/">
                                        <img
                                            alt="..."
                                            src={require("../assets/img/brand/argon-react.png")}
                                        />
                                    </Link>
                                </Col>
                                <Col className="collapse-close" xs="6">
                                    <button className="navbar-toggler" id="navbar-primary">
                                        <span />
                                        <span />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav className="ml-lg-auto" navbar>
                            <NavItem>
                                <NavLink href="/ilanlar" onClick={e => e.preventDefault()}>
                                    İlanlar <span className="sr-only">(current)</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/etkinlikler" onClick={e => e.preventDefault()}>
                                    Etkinlikler
                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/sirketler" onClick={e => e.preventDefault()}>
                                    Şirketler
                    </NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav>Saliha</DropdownToggle>
                                <DropdownMenu
                                    aria-labelledby="navbar-primary_dropdown_1"
                                    right
                                >
                                    <DropdownItem
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Profile Git
                      </DropdownItem>
                                    <DropdownItem
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Takip Ettiğim Şirketler
                      </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Çıkış yap
                      </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </UncontrolledCollapse>
                </Container>
            </Navbar>
        )
    }
}