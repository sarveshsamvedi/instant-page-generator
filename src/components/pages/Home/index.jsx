import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import InstantPage from "./InstantPage";

const Home = () => {
  const [currIds, setCurrIds] = useState([])

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem('instant-page-ids'))
    localStorage.removeItem('payload');
    localStorage.removeItem('instantPageId');
    setCurrIds(ids)
  }, [])

  return (
    <div className="mt-2">
      <Link to="create-creative" className="mt-12 ml-12"><Button>Create</Button></Link>
      <div className="flex overflow-x-scroll">
        {
          currIds?.length > 0 && currIds.map((id, index) => {
            return <InstantPage instantPageId={id} key={id} editVisible={true} />
          })
        }
      </div>
    </div>
  );
};

export default Home;
