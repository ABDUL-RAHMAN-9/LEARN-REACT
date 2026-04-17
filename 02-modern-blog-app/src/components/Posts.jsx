import React from "react";
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";

const Posts = () =>
{
    return (
        <Container className="main-container">
            <Row>
                {/* Main Feed */}
                <Col lg={8}>
                    <h5 className="text-uppercase text-muted fw-bold mb-4 small tracking-widest">Latest Stories</h5>
                    <Post1 />
                    <Post2 />
                    <Post3 />
                    <Post4 />
                </Col>

                {/* Sidebar */}
                <Col lg={4} className="d-none d-lg-block">
                    <div className="sidebar-card shadow-sm border border-light">
                        <h6 className="fw-bold mb-3">Trending Topics</h6>
                        <ListGroup variant="flush">
                            <ListGroup.Item action className="border-0 px-0 py-2 text-muted small"># Modern_React</ListGroup.Item>
                            <ListGroup.Item action className="border-0 px-0 py-2 text-muted small"># Architecture_Patterns</ListGroup.Item>
                            <ListGroup.Item action className="border-0 px-0 py-2 text-muted small"># Performance_Audit</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Posts;