import React from "react";

type Props = {
  style: React.CSSProperties;
};

const BasicComponent = (props: Props) => {
  return <div style={props.style}>BaseComponent</div>;
};

export default BasicComponent;
