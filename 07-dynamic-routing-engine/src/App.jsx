import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import PostDetail from './pages/PostDetail';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

const App = () =>
{
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<Layout />}>
          {/* Default child route for "/" */}
          <Route index element={<Home />} />

          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<PostDetail />} />
          <Route path="contact" element={<Contact />} />

          {/* Catch-all for 404 */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;