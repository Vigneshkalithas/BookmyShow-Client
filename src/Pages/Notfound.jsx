import React from "react";
import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();
  return (
    <>
      <div className="notFoundHead my-4">
        <img
          src="https://mustafasevinc.com.tr/wp-content/uploads/2019/08/404-dribbble.gif"
          alt="404"
          className="notfoundImg"
        />

        <button className="back-btn-notfound" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </>
  );
}

export default Notfound;
