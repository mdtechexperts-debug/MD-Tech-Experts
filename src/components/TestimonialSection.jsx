// src/components/TestimonialSection.jsx
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./TestimonialSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSection() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setSlidesToShow(1);
      else if (window.innerWidth <= 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    pauseOnHover: true,
    arrows: false,
  };

  const testimonials = [
    {
      name: "Jonathan P., USA",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      text:
        "MD Tech Experts elevated our entire IT infrastructure. Their proactive monitoring prevented issues before they even surfaced, and their support team consistently goes above and beyond. The level of professionalism and reliability they bring is unmatched in the industry.",
      stars: "★★★★★",
    },
    {
      name: "Samantha W., UK",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      text:
        "Working with MD Tech Experts has been nothing short of exceptional. They solved long-standing technical challenges for our company and implemented solutions that significantly improved our daily operations. Their expertise continues to support our long-term success.",
      stars: "★★★★★",
    },
    {
      name: "Michael R., Canada",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      text:
        "The cybersecurity improvements provided by MD Tech Experts were transformative. They secured every layer of our infrastructure and ensured our team understood best practices. Their guidance has given us complete peace of mind and long-term protection.",
      stars: "★★★★★",
    },
    {
      name: "Angela D., Germany",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      text:
        "Their onboarding process was seamless, and their continuing support has been phenomenal. MD Tech Experts are clear communicators, solution-driven, and incredibly attentive. Our systems now run smoother than ever before thanks to their consistent effort.",
      stars: "★★★★★",
    },
    {
      name: "Omar S., UAE",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
      text:
        "MD Tech Experts modernized every part of our digital workflow. From cloud optimization to network upgrades, their solutions helped reduce downtime and increased overall productivity. Their expertise is truly world-class and dependable.",
      stars: "★★★★★",
    },
    {
      name: "Julie M., France",
      avatar: "https://randomuser.me/api/portraits/women/27.jpg",
      text:
        "A dedicated and highly efficient team. MD Tech Experts helped us streamline internal communications, secure sensitive data, and stabilize our systems. Their services deliver real results and long-lasting improvements.",
      stars: "★★★★★",
    },
    {
      name: "Daniel H., Australia",
      avatar: "https://randomuser.me/api/portraits/men/91.jpg",
      text:
        "It’s rare to find an IT partner that provides both advanced solutions and exceptional customer service. MD Tech Experts always respond quickly, understand our needs, and implement reliable fixes that keep our business running at full speed.",
      stars: "★★★★★",
    },
    {
      name: "Emma T., Sweden",
      avatar: "https://randomuser.me/api/portraits/women/52.jpg",
      text:
        "Their monitoring services dramatically reduced technical issues across our departments. MD Tech Experts consistently anticipate potential problems, making our IT environment more stable and efficient than ever.",
      stars: "★★★★★",
    },
    {
      name: "Luis P., Spain",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      text:
        "Finally, a team that understands the importance of consistent, dependable support. MD Tech Experts solved issues we had struggled with for years and provided strategic insights that improved our operations overall.",
      stars: "★★★★★",
    },
    {
      name: "Aiko T., Japan",
      avatar: "https://randomuser.me/api/portraits/women/30.jpg",
      text:
        "Their cloud migration process was smooth and incredibly well-executed. MD Tech Experts ensured our team adapted quickly, and the system improvements have significantly boosted productivity across all departments.",
      stars: "★★★★★",
    },
  ];

  return (
    <section className="testimonial-section">
      <h1 className="testimonial-heading">What our clients tell about us?</h1>
      <p className="testimonial-subheading">
        Hear what global businesses say about working with MD Tech Experts.
      </p>

      <div className="testimonial-slider-wrapper">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-slide">
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />

                  <div className="testimonial-info">
                    <span className="testimonial-name">{t.name}</span>
                    <span className="testimonial-stars">{t.stars}</span>
                  </div>
                </div>

                <p className="testimonial-text">{t.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
