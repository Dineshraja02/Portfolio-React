import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      company: "Alonzo InfoTech",
      title: "Ar Voice Call Executive",
      desc:
        "Guide Uk Housing Association Tenents to get their claim fund to repair household damages ",
      duration: "Dec 2020 - June 2021 ",
      img:
        "https://m.media-amazon.com/images/I/71xPBFPXurL._SY450_.jpg",
    },
    {
      id: "2",
      company: "Veejei Automation",
      title: "Development Engineer",
      desc:
        "Dimention Inspection of casting, Quality Inspection of casting, ISO Documentaton ",
      duration: "May 2019 - Nov 2020 ",
      img:
        "https://www.imerys.com/sites/imerys.com/files/styles/645w/public/2019/05/15/Application%20foundry.jpg?itok=KDFndqB8",
    },
    {
      id: "3",
      company: "Eltex Super Casting Pvt Ltd",
      title: "Fetling Supervisor",
      desc:
        "Excess Metal Grinding, Ontime Delivery to packing",
      duration: "June 2018 - May 2019 ",
      img:
        "https://www.savimetal.com/files/87558.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                  <h3>{d.company}</h3>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>{d.duration}</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
