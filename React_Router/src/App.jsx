import {ReactDOM} from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


const App = () =>
{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
