import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
export default function Home() {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <Link to="/Shop"> Shop</Link>
    </div>
  );
}
