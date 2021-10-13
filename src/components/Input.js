import React from "react";

export default function Input({
  id = "",
  name = "",
  label = "",
  value = "",
  onChange = () => {},
}) {
  return (
    <>
      <label htmlFor={`#${id}`}>{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
    </>
  );
}
