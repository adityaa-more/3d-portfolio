import React, { Component } from "react";
import folderIcon from "../assests/google-drive-folder-symbol.png";

export default class VideoGallery extends Component {
  render() {
    return (
      <div class="container flex flex-row flex-wrap justify-center px-16 pt-24 bg-gray-50 text-black">
        <div class="relative mb-16 mr-12 rounded-2xl w-[340px] h-[340px] overflow-hidden flex items-center bg-neutral-700 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
          <img
            src="https://media.giphy.com/media/RdF3p3G02lGYQwDdGB/giphy.gif"
            alt=""
          />
          <a href="#!">
            <div class="flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-600/50 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <img src={folderIcon} alt="" class=" w-[50px] h-[50px]" />
              <p>Chair</p>
            </div>
          </a>
        </div>
        <div class="relative mb-16 mr-12 rounded-2xl w-[340px] h-[340px] overflow-hidden flex items-center bg-neutral-700 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
          <img src="https://i.imghippo.com/files/FecnN1722311956.png" alt="" />
          <a href="#!">
            <div class="flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-600/50 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <img src={folderIcon} alt="" class=" w-[50px] h-[50px]" />
              <p>Tin Can</p>
            </div>
          </a>
        </div>
        <div class="relative mb-16 mr-12 rounded-2xl w-[340px] h-[340px] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 overflow-hidden flex justify-center bg-neutral-700">
          <img src="https://i.imghippo.com/files/gq1cI1722312056.png" alt="" />
          <a href="#!">
            <div class="flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-600/50 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <img src={folderIcon} alt="" class=" w-[50px] h-[50px]" />
              <p>Winter House</p>
            </div>
          </a>
        </div>
        <div class="relative mb-16 mr-12 rounded-2xl w-[340px] h-[340px] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30  overflow-hidden flex justify-center bg-neutral-700">
          <img src="https://i.imghippo.com/files/ZuRbf1722312098.png" alt="" />
          <a href="#!">
            <div class="flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-600/50 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <img src={folderIcon} alt="" class=" w-[50px] h-[50px]" />
              <p>Isometric Bedroom</p>
            </div>
          </a>
        </div>
        <div class="relative mb-16 mr-12 rounded-2xl w-[340px] h-[340px] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30  overflow-hidden flex justify-center bg-neutral-700">
          <img
            class="object-contain w-[255px] h-[340px]"
            src="https://media.giphy.com/media/ub6Q8emEHMljkPnYiq/giphy.gif"
            alt=""
          />
          <a href="#!">
            <div class="flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-600/50 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <img src={folderIcon} alt="" class=" w-[50px] h-[50px]" />
              <p>Donut</p>
            </div>
          </a>
        </div>
        <div class="relative mb-16 mr-12 rounded-2xl w-[340px] h-[340px] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30  overflow-hidden flex justify-center bg-neutral-700">
          <img
            src="https://media.giphy.com/media/eoSvwF0Q4ARB2AcizL/giphy.gif"
            alt=""
          />
          <a href="#!">
            <div class="flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-600/50 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <img src={folderIcon} alt="" class=" w-[50px] h-[50px]" />
              <p>
                Tea Cup <br />& Donut
              </p>
            </div>
          </a>
        </div>
        <div class="relative mb-16 mr-12 rounded-2xl w-[340px] h-[340px] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 overflow-hidden flex justify-center bg-neutral-700">
          <img
            class="object-contain w-[255px] h-[340px]"
            src="https://media.giphy.com/media/trKpdh3exkpIG6LbQI/giphy.gif"
            alt=""
          />
          <a href="#!">
            <div class="flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-600/50 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <img src={folderIcon} alt="" class=" w-[50px] h-[50px]" />
              <p>Walking Creature</p>
            </div>
          </a>
        </div>
        <div class="relative mb-16 mr-12 rounded-2xl w-[340px] h-[340px] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30  overflow-hidden flex justify-center bg-neutral-700">
          <img
            src="https://media.giphy.com/media/s7GEVK5w3DC65e1iLi/giphy.gif"
            alt=""
          />
          <a href="#!">
            <div class="flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-600/50 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <img src={folderIcon} alt="" class=" w-[50px] h-[50px]" />
              <p>Hologram</p>
            </div>
          </a>
        </div>
        <div class="relative mb-16 mr-12 rounded-2xl w-[340px] h-[340px] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 overflow-hidden flex justify-center bg-neutral-700">
          <img
            src="https://media.giphy.com/media/vTWscfR1RywKExDEDF/giphy.gif"
            alt=""
          />
          <a href="#!">
            <div class="flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-600/50 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <img src={folderIcon} alt="" class=" w-[50px] h-[50px]" />
              <p>Sword</p>
            </div>
          </a>
        </div>
        <div class="relative mb-16 mr-12 rounded-2xl w-[340px] h-[340px] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30  overflow-hidden flex justify-center bg-neutral-700">
          <img
            src="https://media.giphy.com/media/iey4ZjjVTxv7Ek43nn/giphy.gif"
            alt=""
          />
          <a href="#!">
            <div class="flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-600/50 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <img src={folderIcon} alt="" class=" w-[50px] h-[50px]" />
              <p>Sword Animation</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
