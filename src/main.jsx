import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter as Router,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import BlogsPage from "./components/BlogsPage/BlogsPage.jsx";
import Single from './pages/Single'; 
import AddPost from "./components/BlogsPage/AddPost.jsx";

const router = new Router(
  createRoutesFromElements(
    <>
      <Route path="/" exact element={<Home />} />
      <Route path="/Intro" element={<Intro />} />
      <Route path="/Blogs" element={<BlogsPage/>} />
      {/* <Route path="/AddBlog" element={<AddPost/>} /> */}
      <Route path="/blogs/:id" element={<Single />} />
      <Route path="/*" element={<PageNotFound />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
