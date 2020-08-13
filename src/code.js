import React from "react";

const Code = ({ info }) => {
  // const codeList = info.map((code) => {
  //   if (code.age < 24) {
  //     return (
  //       <div className="code" key={code.number}>
  //         <div>name : {code.name}</div>
  //         <div>age : {code.age}</div>
  //         <div>location: {code.location}</div>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // });
  const codeList = info.map((code) => {
    return code.age < 24 ? (
      <div className="code" key={code.number}>
        <div>name : {code.name}</div>
        <div>age : {code.age}</div>
        <div>location: {code.location}</div>
      </div>
    ) : null;
  });
  return <div className="code-list">{codeList}</div>;
};

export default Code;
