import React, { Component } from "react";
import logo from "../assests/cube.png";

export default class Header extends Component {
  render() {
    return (
      <div class=" flex flex-row justify-between items-center bg-neutral-900 px-8 py-6">
        <h1 class="font-bold text-3xl ">Aditya More.</h1>
        <div>
          <img
            src={logo}
            alt=""
            class="block mr-auto ml-auto mb-2 w-[40px] h-[40px] "
          />
          <h1 class="font-bold text-3xl  text-center">3D Portfolio</h1>
        </div>
        <a
          class="text-sm font-semibold rounded-full bg-sky-600  p-2 transition duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-600"
          href="https://aditya-more-my-portfolio.netlify.app/"
        > S/W Dev Portfolio</a>
      </div>
    );
  }
}
