import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {featuredPortfolio} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "projects",
      title: "Projects",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <p><b>Github link in Menubar</b></p>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a target="blank" href={d.link}>
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <span>
            <h3>{d.title}</h3>
            <p>{d.desc}</p>
            </span>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}
