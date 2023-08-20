import React from "react";
import styled from "./MyUpload.module.css";

const MyUpload = ({ children, ...props }) => {
  return (
    <>
      <input {...props} className={styled.myInput} type="file" id="file" />
      <label className={styled.myInputLabel} htmlFor="file">
        {children}
      </label>
    </>
  );
};

export default MyUpload;
