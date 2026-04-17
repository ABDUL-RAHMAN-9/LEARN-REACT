import React from "react";
import { Card, Button } from 'react-bootstrap';

const Post2 = () =>
{
    return (
        <Card className="blog-card">
            <Card.Img
                variant="top"
                src="https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png"
                style={{ height: '350px', objectFit: 'cover' }}
            />
            <Card.Body className="p-4">
                <div className="mb-2">
                    <span className="badge bg-indigo-subtle text-indigo px-3 py-2 rounded-pill small" style={{ backgroundColor: '#e0e7ff', color: '#4338ca' }}>Computer Science</span>
                </div>
                <Card.Title className="fs-2 fw-extrabold mb-3">Data Structures</Card.Title>
                <Card.Text className="text-muted leading-relaxed">
                    Organizing data efficiently is the backbone of high-performance software.
                    From Arrays to Graphs, understanding how data lives in memory is
                    crucial for every aspiring software architect.
                </Card.Text>
                <Button variant="dark" className="mt-3 px-4 py-2 rounded-pill fw-bold">
                    Read Article
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Post2;