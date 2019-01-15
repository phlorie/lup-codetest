import React from 'react';

const InputField = ({
  input,
  label,
  name,
  meta,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        {...input}
        name={name}
        type="text"
      />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );
};

export default InputField;
