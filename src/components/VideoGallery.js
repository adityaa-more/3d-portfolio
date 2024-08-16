import React, { Component } from "react";
import folderIcon from "../assests/google-drive-folder-symbol.png";

const cardData = [
  {
    url: "https://media.giphy.com/media/RdF3p3G02lGYQwDdGB/giphy.gif",
    title: "Chair",
    link: "#!",
  },
  {
    url: "https://i.imghippo.com/files/FecnN1722311956.png",
    title: "Tin Can",
    link: "#!",
  },
  {
    url: "https://i.imghippo.com/files/gq1cI1722312056.png",
    title: "Winter House",
    link: "#!",
  },
  {
    url: "https://i.imghippo.com/files/ZuRbf1722312098.png",
    title: "Isometric Bedroom",
    link: "#!",
  },
  {
    url: "https://media.giphy.com/media/ub6Q8emEHMljkPnYiq/giphy.gif",
    title: "Donut",
    link: "#!",
  },
  {
    url: "https://media.giphy.com/media/eoSvwF0Q4ARB2AcizL/giphy.gif",
    title: "Tea Cup",
    link: "#!",
  },
  {
    url: "https://media.giphy.com/media/trKpdh3exkpIG6LbQI/giphy.gif",
    title: "Walking Creature",
    link: "#!",
  },
  {
    url: "https://media.giphy.com/media/s7GEVK5w3DC65e1iLi/giphy.gif",
    title: "Hologram",
    link: "#!",
  },
  {
    url: "https://media.giphy.com/media/vTWscfR1RywKExDEDF/giphy.gif",
    title: "Sword",
    link: "#!",
  },
  {
    url: "https://media.giphy.com/media/iey4ZjjVTxv7Ek43nn/giphy.gif",
    title: "Sword Animation",
    link: "#!",
  },
];

export default class VideoGallery extends Component {
  render() {
    return (
      <div class="container flex flex-row flex-wrap justify-center px-16 pt-24 bg-gray-50 text-black">
        
        {cardData.map((card, index)=>(

          <div key={index} class="flex items-center relative mb-16 mr-12 rounded-2xl w-[340px] h-[340px] overflow-hidden bg-neutral-700 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
          <img src={card.url} alt={card.title} className="object-contain w-full h-full"/>
          <a href={card.link}>
            <div class="flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-600/50 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <img src={folderIcon} alt="" class=" w-[50px] h-[50px]" />
              <p>{card.title}</p>
            </div>
          </a>
          </div>

        ))}
        
      </div>
    );
  }
}
