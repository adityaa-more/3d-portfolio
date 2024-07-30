import React, { Component } from "react";
import logo1 from "../assests/figures.png";
import linkd from "../assests/linkedin.png";
import git from "../assests/github.png";
import gmail from "../assests/gmail.png";
import insta from "../assests/instagram.png";

export default class Footer extends Component {
  render() {
    return (
      <div class="bg-neutral-900 h-[200px] flex justify-around items-center">
        <p class="text-gray-300 text-base">
          &copy;2024{" "}
          <span class="font-bold text-lg text-white">Aditya More</span>
        </p>
        <div>
          <img src={logo1} class="w-[100px] h-[100px]" alt="" />
          {/* <p class="mt-6 text-sm text-center font-semibold">3D Modelling</p> */}
        </div>
        <div class="flex">
          <a href="https://www.linkedin.com/in/adityaa-more/">
            <img src={linkd} alt="" class="w-[24px] h-[24px] mr-6"></img>
          </a>
          <a href="https://github.com/adityaa-more">
            <img src={git} alt="" class="w-[24px] h-[24px] mr-6"></img>
          </a>
          <a href="mailto:adityamore.se@gmail.com">
            <img src={gmail} alt="" class="w-[24px] h-[24px] mr-6"></img>
          </a>
          <a href="https://www.instagram.com/adityaa.896/">
            <img src={insta} alt="" class="w-[24px] h-[24px]"></img>
          </a>
        </div>
      </div>
    );
  }
}
