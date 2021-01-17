import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PageLoader = () => (
  <div
    style={{
      width: "100%",
      height: "65rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Loader type="Circles" color="#101923" height={100} width={100} />
  </div>
);

export default React.memo(PageLoader);
