import React from "react";

export default function Synonyms(props) {
  if (props.synonmys) {
    return (
      <ul className="Synonyms">
        {props.synonmys.map(function (synonm, index) {
          return <li key={index}>{synonm}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
