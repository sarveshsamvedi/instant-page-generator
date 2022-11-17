import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Home = () => {
  return (
    <>
      <div>Home route</div>
      <Link to="create-creative"><Button>Create</Button></Link>
    </>
  );
};

export default Home;
