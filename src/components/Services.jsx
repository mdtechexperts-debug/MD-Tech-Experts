import React, { useState } from "react";
import "./Services.css";

// Background image
import servicesBg from "../assets/servicesbg.png";

// Card images
import gameDev from "../assets/game-development.png";
import blockchain from "../assets/blockchain-game.png";
import appDev from "../assets/app-development.png";
import webDev from "../assets/website-development.png";
import cyber from "../assets/cybersecurity.png";
import uiux from "../assets/ui-ux.png";
import graphic from "../assets/graphic-design.png";
import video from "../assets/video-editing.png";

// Popup images
import gamePopupImg from "../assets/GameDevelopment.png";
import blockchainPopupImg from "../assets/BlockChain.png";
import appPopupImg from "../assets/AppDevelopment.png";
import webPopupImg from "../assets/WebDevelopment.png";
import cyberPopupImg from "../assets/cybersecuritycon.png";
import uiPopupImg from "../assets/UI.png";
import graphicPopupImg from "../assets/GraphicDesign.png";
import videoPopupImg from "../assets/VideoEditing.png";

import Popup from "./Popup";

const servicesData = [
  { 
    title: "Game Development", 
    description: "We design and develop high-quality games with engaging mechanics, stunning visuals, and smooth performance—tailored for mobile, PC, and console platforms.", 
    image: gameDev,
    popupImage: gamePopupImg
  },
  { 
    title: "Blockchain Game Dev", 
    description: "We create innovative Web3 games featuring NFTs, token economies, and secure blockchain mechanics for next-generation gaming.", 
    image: blockchain,
    popupImage: blockchainPopupImg
  },
  { 
    title: "App Development", 
    description: "We create fast, scalable, and user-friendly mobile apps for Android and iOS with modern UI and seamless functionality.", 
    image: appDev,
    popupImage: appPopupImg
  },
  { 
    title: "Website Development", 
    description: "We design and develop responsive, modern, and SEO-friendly websites that help establish and grow your online presence.", 
    image: webDev,
    popupImage: webPopupImg
  },
  { 
    title: "Cybersecurity Consulting", 
    description: "We provide expert security assessments and strategies to keep your applications, websites, and systems safe from threats.", 
    image: cyber,
    popupImage: cyberPopupImg
  },
  { 
    title: "UI/UX Design", 
    description: "We design intuitive, modern, and visually appealing interfaces that deliver smooth interactions and great user experiences.", 
    image: uiux,
    popupImage: uiPopupImg
  },
  { 
    title: "Graphic Design", 
    description: "We craft standout visual content—from branding and logos to marketing materials that elevate your brand.", 
    image: graphic,
    popupImage: graphicPopupImg
  },
  { 
    title: "Video Editing / AI Video Generation", 
    description: "We produce high-quality edited videos and AI-generated content for promotions, storytelling, and social media impact.", 
    image: video,
    popupImage: videoPopupImg
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <div className="services-section" id="services">
        <div className="services-container">
          <h2 className="services-title">Our Expertise</h2>

          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div className="service-card" key={index}>
                <img src={service.image} className="service-image" alt={service.title} />

                <h3 className="service-title">{service.title}</h3>

                <p className="service-description">{service.description}</p>

                <button
                  className="service-btn"
                  onClick={() => setSelectedService(service)}
                >
                  More Info
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POPUP RENDER */}
      {selectedService && (
        <Popup 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </>
  );
}
