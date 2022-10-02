import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Create = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="create">
      <h1>Hi there</h1>
    </div>
  );
};

export default Create;
