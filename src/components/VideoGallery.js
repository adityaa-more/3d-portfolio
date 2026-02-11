import React, { Component } from "react";
import folderIcon from "../assests/google-drive-folder-symbol.png";
import { siteConfig } from "../data/siteConfig";

const defaultStyle = {
  pageBackground: "bg-gray-50",
  pageText: "text-black",
  cardBackground: "bg-neutral-700",
  cardOverlay: "bg-slate-600/50",
  cardTitle: "text-white",
};

export default class VideoGallery extends Component {
  render() {
    const config = this.props.config || siteConfig;
    const { owner, gallery = [], style = {} } = config;
    const resolvedStyle = { ...defaultStyle, ...style };

    return (
      <section
        className={`container flex flex-col items-center px-6 pb-10 pt-20 sm:px-10 md:px-16 ${resolvedStyle.pageBackground} ${resolvedStyle.pageText}`}
      >
        <header className="mb-10 w-full max-w-5xl text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{owner?.name}</h1>
          <p className="mt-1 text-base opacity-80 md:text-lg">{owner?.role}</p>
          <p className="mt-3 max-w-2xl text-sm opacity-75 md:text-base">{owner?.tagline}</p>
        </header>

        <div className="flex w-full max-w-6xl flex-row flex-wrap justify-center gap-10 md:justify-start">
          {gallery.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className={`group relative flex h-[320px] w-[320px] items-center overflow-hidden rounded-2xl transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 ${resolvedStyle.cardBackground}`}
            >
              <img src={card.url} alt={card.title} className="h-full w-full object-contain" />

              <a
                href={card.link}
                target={card.link?.startsWith("http") ? "_blank" : "_self"}
                rel={card.link?.startsWith("http") ? "noreferrer" : undefined}
                className="absolute inset-0"
              >
                <div
                  className={`absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 ${resolvedStyle.cardOverlay}`}
                >
                  <img src={folderIcon} alt="Open project" className="h-[50px] w-[50px]" />
                  <p className={`mt-2 text-center text-lg font-semibold ${resolvedStyle.cardTitle}`}>
                    {card.title}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
