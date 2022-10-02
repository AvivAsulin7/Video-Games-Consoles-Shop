import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Divider from "@mui/material/Divider";

function Footer() {
  let year = new Date();
  year = year.getFullYear();
  return (
    <div className="footer">
      <p>Aviv Asulin @ {year}</p>
      <div style={{ marginTop: "18px" }}>
        <Divider variant="inset"></Divider>
      </div>
      <h2>Contact Us</h2>
      <div className="icons">
        <a href="https://www.facebook.com/aviv.asulin.9">
          <FacebookIcon
            sx={{ mr: 4, fontSize: "40px", color: "#ccc" }}
            className="icon"
          />
        </a>
        <a href="https://github.com/AvivAsulin7">
          <GitHubIcon
            sx={{ mr: 4, fontSize: "40px", color: "#ccc" }}
            className="icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/avivassulin/">
          <LinkedInIcon
            sx={{ fontSize: "40px", color: "#ccc" }}
            className="icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
