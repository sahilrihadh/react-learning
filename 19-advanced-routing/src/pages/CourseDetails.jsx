import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const param = useParams();

  return (
    <div className="flex justify-center mt-5">
      <h1 className="text-5xl">Corse Details / {param.id}</h1>
    </div>
  );
};

export default CourseDetails;
