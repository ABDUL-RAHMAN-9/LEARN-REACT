import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

const BlogNav = () =>
{
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-3 shadow-sm">
            <Container>
                <Navbar.Brand href="#" className="fw-black tracking-tighter fs-3">
                    GEEKS<span style={{ color: '#6366f1' }}>BLOG.</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-lg-4 gap-3">
                        <Nav.Link href="#js" className="text-uppercase small fw-bold">JavaScript</Nav.Link>
                        <Nav.Link href="#ds" className="text-uppercase small fw-bold">Data Structures</Nav.Link>
                        <Nav.Link href="#algo" className="text-uppercase small fw-bold">Algorithms</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search articles..."
                            className="me-2 rounded-pill border-0 bg-secondary text-white px-4"
                            aria-label="Search"
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BlogNav;