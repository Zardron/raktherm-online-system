import React, { useState } from "react";
import Pipes from "./Pipes";
import Fittings from "./Fittings";

const index = ({ type }) => {
  const [openPipes, setOpenPipes] = useState(true);
  const [openFittings, setOpenFittings] = useState(false);

  const pipeProps = {
    openPipes,
    setOpenPipes,
    openFittings,
    setOpenFittings,
    type,
  };

  return (
    <>
      <Pipes {...pipeProps} />
      <hr className="my-5" />
      <Fittings {...pipeProps} />
    </>
  );
};

export default index;
