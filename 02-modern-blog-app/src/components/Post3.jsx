import React from "react";
import { Card, Button } from 'react-bootstrap';

const Post3 = () =>
{
    return (
        <Card className="blog-card">
            <Card.Img
                variant="top"
                src="https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png"
                style={{ height: '350px', objectFit: 'cover' }}
            />
            <Card.Body className="p-4">
                <div className="mb-2">
                    <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill small" style={{ backgroundColor: '#dcfce7', color: '#15803d' }}>Mathematics</span>
                </div>
                <Card.Title className="fs-2 fw-extrabold mb-3">Algorithm Design</Card.Title>
                <Card.Text className="text-muted leading-relaxed">
                    An Algorithm refers to a set of rules that define how work is executed.
                    Mastering step-by-step problem-solving operations is what separates
                    junior developers from senior engineers.
                </Card.Text>
                <Button variant="dark" className="mt-3 px-4 py-2 rounded-pill fw-bold">
                    Read Article
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Post3;