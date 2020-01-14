import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";


import NavbarComponent from '../components/NavbarComponent';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <>
                <NavbarComponent login={true} />
                <main ref="main">
                    <section className="section section-shaped section-lg">
                        <div className="shape shape-style-1 bg-gradient-default">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <Container className="pt-lg-md">
                            <Row className="justify-content-center">
                                <Col lg="5">
                                    <Card className="bg-secondary shadow border-0">
                                        <CardBody className="px-lg-5 py-lg-5">
                                            <div className="text-center text-muted mb-4">
                                                <small>Sisteme giriş yapın</small>
                                            </div>
                                            <Form role="form">
                                                <FormGroup className="mb-3">
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="ni ni-email-83" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input placeholder="Email" type="email" />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="ni ni-lock-circle-open" />
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Şifre"
                                                            type="password"
                                                            autoComplete="off"
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <div className="custom-control custom-control-alternative custom-checkbox">
                                                    <input
                                                        className="custom-control-input"
                                                        id=" customCheckLogin"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor=" customCheckLogin"
                                                    >
                                                        <span>Beni Hatırla</span>
                                                    </label>
                                                </div>
                                                <div className="text-center">
                                                    <Link
                                                        to="/index">
                                                        <Button
                                                            className="my-4"
                                                            color="primary"
                                                            type="button"
                                                        >
                                                            Giriş Yap
                              </Button>
                                                    </Link>
                                                </div>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                    <Row className="mt-3">
                                        <Col xs="6">
                                            <a
                                                className="text-light"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <small>Şifremi unuttum</small>
                                            </a>
                                        </Col>
                                        <Col className="text-right" xs="6">
                                            <a
                                                className="text-light"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <small>Yeni hesap oluşturun</small>
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
            </>
        )
    }
}