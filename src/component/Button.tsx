import React from "react";

type Props = {
  text: string;
  b?: number;
  style: React.CSSProperties;
};
const Button = (props: Props) => {};

const handleChange = (value: string) => {
  console.log(value);
};

export default Button;
