import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-ftr">

      {/* Copyright */}
      <div className="copyright-area">
        <div className="Copyright-container">
          <div className="copyright-area-rows">
            <div className="col-8">
              <div className="copyright-text">
                <p>Copyright © 2022 FurEver Care. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
