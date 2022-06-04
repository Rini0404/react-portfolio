import React from "react";

import { IoLogoCss3 } from "react-icons/io5";
import { ReactComponent as JavaScript } from "../../imgs/javascript.svg";
import { ReactComponent as PostMan } from "../../imgs/postman.svg";
import { ReactComponent as ReactSvg } from "../../imgs/react.svg";
import { ReactComponent as VsCode } from "../../imgs/visualstudiocode.svg";
import { ReactComponent as Css } from "../../imgs/css3 (1).svg";
import { ReactComponent as NodeJs } from "../../imgs/nodedotjs.svg";
import { ReactComponent as Html5 } from "../../imgs/html5.svg";
import { ReactComponent as Express } from "../../imgs/express (1).svg";
import { ReactComponent as MySql } from "../../imgs/mysql.svg";
import { ReactComponent as MongoDb } from "../../imgs/mongodb.svg";
import { ReactComponent as Tailwinds } from "../../imgs/tailwindcss.svg";
import { ReactComponent as Npm } from "../../imgs/npm.svg";
// import {ReactComponent as Npm} from '../../imgs/npm.svg';
// import {ReactComponent as Npm} from '../../imgs/npm.svg';
import test from "../../imgs/test.jpg";
import test1 from "../../imgs/test1.jpg";
import test3 from "../../imgs/test3.jpg";

const skills = () => {
  return (
    <div class="parent justify-items-center ">
      <div class="div1"></div>

      <div class="div2 font-mono text-white font-bold	text-5xl p-6">
        <h1>Professional Skills 👔</h1>{" "}
      </div>

      <div class="div3">
        {" "}
        <ReactSvg style={{ width: "100", fill: "#fff" }} className="icons" />
      </div>

      <div class="div4">
        {" "}
        <NodeJs style={{ width: "100", fill: "#fff" }} className="icons" />{" "}
      </div>

      <div class="div5">
        <Html5 style={{ width: "100", fill: "#fff" }} className="icons" />
      </div>

      <div class="div6">
        {" "}
        <Express
          style={{ width: "100", fill: "#fff" }}
          className="icons"
        />{" "}
      </div>

      <div class="div7">
        {" "}
        <JavaScript style={{ width: "100", fill: "#fff" }} className="icons" />
      </div>
      {/* tools */}
      <div class="div8">
        <Css style={{ width: "100", fill: "#fff" }} className="icons" />
      </div>

      <div class="div9 font-mono text-white font-bold	text-5xl p-6 "> 
      <h1>Professional Tools
        🪓
      </h1>
      </div>

      <div class="div10">
        {" "}
        <MongoDb
          style={{ width: "100", fill: "#fff" }}
          className="icons"
        />{" "}
      </div>

      <div class="div11">
        {" "}
        <Tailwinds style={{ width: "100", fill: "#fff" }} className="icons" />
      </div>

      <div class="div12">
        {" "}
        <Npm style={{ width: "100", fill: "#fff" }} className="icons" />{" "}
      </div>

      <div class="div13">
        {" "}
        <VsCode style={{ width: "100", fill: "#fff" }} className="icons" />
      </div>

      <div class="div14">
        {" "}
        <MySql style={{ width: "100", fill: "#fff" }} className="icons" />
      </div>
      <div class="div15">
        <PostMan style={{ width: "100", fill: "#fff" }} className="icons" />{" "}
      </div>
    </div>
  );
};

export default skills;
