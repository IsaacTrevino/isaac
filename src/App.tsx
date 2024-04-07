import React from "react";
import "./App.css";
import {
  FaInstagram as InstagramIcon,
  FaLinkedin as LinkedInIcon,
  FaDollarSign as DollarIcon,
  FaYinYang as YinYangIcon,
} from "react-icons/fa";
import { IconType } from "react-icons";

const links: {
  [key: string]: {
    name: string;
    url: string;
    icon: IconType;
    show?: boolean;
  }[];
} = {
  social: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/isaactrevino1/",
      icon: LinkedInIcon,
      show: true,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_isaac_t/",
      icon: InstagramIcon,
      show: true,
    },
  ],
  apps: [
    {
      name: "Trade.AI",
      url: "#",
      icon: DollarIcon,
      show: true,
    },
    {
      name: "Scene.AI",
      url: "#",
      icon: YinYangIcon,
      show: true,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" className="App-logo" alt="logo" />
        <p>Isaac Trevino</p>
        {/* create centered list of links seperated by type using tailwind */}
        <div className="flex flex-col items-center justify-center">
          {/* loop throw link types */}
          {Object.keys(links).map((linkType) => (
            <div key={linkType} className="flex flex-col items-center">
              <h2 className="text-2xl font-bold capitalize">{linkType}</h2>
              {/* loop through links */}
              {links[linkType].map((link) => {
                // if link.show is false, return null
                if (!link.show) return null;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="m-2"
                  >
                    {/* button with icon and name, make button styled */}
                    <button className="flex flex-row items-center bg-gray-800 p-2 rounded-lg w-full ">
                      <link.icon size={32} />
                      <span className="text-white text-lg font-semibold ml-2">
                        {link.name}
                      </span>
                    </button>
                  </a>
                );
              })}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
