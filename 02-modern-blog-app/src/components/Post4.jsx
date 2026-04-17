import React from "react";
import { Card, Button } from 'react-bootstrap';

const Post4 = () =>
{
    return (
        <Card className="blog-card">
            <Card.Img
                variant="top"
                src="https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png"
                style={{ height: '350px', objectFit: 'cover' }}
            />
            <Card.Body className="p-4">
                <div className="mb-2">
                    <span className="badge bg-warning-subtle text-warning px-3 py-2 rounded-pill small" style={{ backgroundColor: '#fef9c3', color: '#854d0e' }}>Networking</span>
                </div>
                <Card.Title className="fs-2 fw-extrabold mb-3">Computer Networks</Card.Title>
                <Card.Text className="text-muted leading-relaxed">
                    The interconnection of hosts using multiple paths is the foundation of
                    the internet. Explore how routers, switches, and bridges facilitate
                    global communication.
                </Card.Text>
                <Button variant="dark" className="mt-3 px-4 py-2 rounded-pill fw-bold">
                    Read Article
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Post4;