import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import InstantPage from "./InstantPage";

const Home = () => {
  const [currIds, setCurrIds] = useState([])

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem('instant-page-ids'))
    setCurrIds(ids)
  }, [])

  return (
    <>
      <div>Home route</div>
      <div className="flex">
        {
          currIds.length > 0 && currIds.map((id, index) => {
            return <InstantPage instantPageId={id} key={id} />
          })
        }
        <Link to="create-creative" className="mt-12"><Button>Create</Button></Link>
      </div>
    </>
  );
};

export default Home;
