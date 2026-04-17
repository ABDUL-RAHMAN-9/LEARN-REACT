import React from "react";
import { Card, Button } from 'react-bootstrap';

const Post1 = () =>
{
    return (
        <Card className="blog-card">
            <Card.Img
                variant="top"
                src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg"
                style={{ height: '350px', objectFit: 'cover' }}
            />
            <Card.Body className="p-4">
                <div className="mb-2">
                    <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill small">Tutorial</span>
                </div>
                <Card.Title className="fs-2 fw-extrabold mb-3">JavaScript Foundations</Card.Title>
                <Card.Text className="text-muted leading-relaxed">
                    JavaScript is the world's most popular lightweight, interpreted compiled programming language.
                    It is the engine of the modern web, powering everything from simple interactions to
                    complex server-side environments.
                </Card.Text>
                <Button variant="dark" className="mt-3 px-4 py-2 rounded-pill fw-bold">
                    Read Article
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Post1;