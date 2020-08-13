import React from "react";

const Code = ({ info }) => {
  // const { info } = props;
  const codeList = info.map((code) => {
    return (
      <div className="code" key={code.number}>
        <div>name : {code.name}</div>
        <div>age : {code.age}</div>
        <div>location: {code.location}</div>
      </div>
    );
  });
  return <div className="code-list">{codeList}</div>;
};

export default Code;
