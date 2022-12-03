import React from "react";
import customer from "../assets/customer-support.svg";
import ticket from "../assets/ticket1.svg";
import mail from "../assets/mail.svg";
import "../Styles/footer.css";
function Footer() {
  return (
    <div className="container-support">
      <div className="row-support text-white text-center">
        <div className="">
          <img src={customer} className="img-fluid" />
          <p className="my-1 mt-2">24/7 CUSTOMER CARE</p>
        </div>
        <div className="">
          <img src={ticket} className="img-fluid" />
          <p className="my-1">RESEND BOOKING CONFIRMATION</p>
        </div>
        <div className="">
          <img src={mail} className="img-fluid" />
          <p className="my-1">SUBSCRIBE TO THE NEWSLETTER</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
