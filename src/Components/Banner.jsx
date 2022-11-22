import React, { useEffect, useState } from "react";
import BannerCon from "../css/Banner.styled";
import Typewriter from "typewriter-effect";
import { BsLinkedin, BsGithub } from "react-icons/bs";
 import Avatar1 from "../assets/image/profilePic.png";
 import Avatar2 from "../assets/image/profilePic-2.jpg";
 import Avatar3 from "../assets/image/photo.png";
 
import { SiGmail } from "react-icons/si";

const Banner = () => {
  return (
    <BannerCon>
      <div className="bannerContainer">
        <div className="typeWirter">
          <div className="introMyself">
            <p className="heading">Hi, I am Mahesh,</p>
            <div className="subHeading">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer !",
                    "Frontend Developer !",
                    "MERN Stack Developer",
                    "A tech enthusiastic !",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 200,
                }}
              />
            </div>
            <p className="tagLine">
              An enthusiastic Full Stack Web Developer with a strong set of
              technical as well as non-technical skills and a dedication towards
              creating useful and interactive web applications.
            </p>
            <div className="typeButtons">
              <button className="learn-more">
                <a
                  // href={
                  //   "https://drive.google.com/drive/u/1/folders/1DSlHmR99S05j-tCqmgLncARfS3D2T46X"
                  // }
                  href={
                    "https://drive.google.com/file/d/1KQJF68aZpT1N_VFyj0F-N2I5aKTyu5Wo/view?usp=share_link"
                  }
                  target={"_blank"}
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Resume</span>
                </a>
              </button>
              {/* <button>Resume</button> */}
            </div>
            <div className="socialIconContainer">
              <a
                href="https://www.linkedin.com/in/mahesh-samudarala-27270220a/"
                target={"_blank"}
              >
                <BsLinkedin className="socialIcons" />
              </a>
              <a href="https://github.com/Mahesh-6453" target={"_blank"}>
                <BsGithub className="socialIcons" />
              </a>
              <a href="maheshsamudrala203@gmail.com" target={"_blank"}>
                <SiGmail className="socialIcons" />
              </a>
            </div>
          </div>
        </div>

        <div className="imageContainer">
          <img
            src={Avatar3}
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </BannerCon>
  );
};

export default Banner;
