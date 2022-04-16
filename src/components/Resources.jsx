import React from "react";

const Resources = ({ resources }) => {
  return (
    <>
      {resources.map((resource) => (
        <p key={resource.id}>{resource.title}</p>
      ))}
    </>
  );
};

export default Resources;
