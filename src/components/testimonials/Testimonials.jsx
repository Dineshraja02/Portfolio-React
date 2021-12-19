import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Mern Stack Development",
      title: "From June 2021 To Till Now",
      img:
        "https://yt3.ggpht.com/jm7j9zyQfWfFW5C-bKCSjs-b5jWRnk2U_1_4GcIwkbf_wGffvR_dVcdn77U5ROuApqrhJN0Zag=s900-c-k-c0x00ffffff-no-rj",
      desc:
      "Guvi Geek Network Private Ltd,Chennai" ,
    },
    {
      id: 2,
      name: "BE-Mechanical Engineering",
      title: "From June 2014 To May 2018",
      img:"https://campushunt.in/collegelogo/annai%20mathammal%20sheela%20eng%20clg%20logo.jpg",
      desc:
        "Annai Mathammal Sheela Engineering College, Namakkal",
      featured: true,
      Percentage:"Percentage:63.8%"
    },
    {
      id: 3,
      name: "HSC,SSLC",
      title: "From June 2007 To May 2014",
      img:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQGGGcDaEXfaWQ/company-logo_200_200/0/1519870564559?e=2159024400&v=beta&t=Jmpt4dYcJkxg7L2MxMI6at3kztNb4UGBtMYQXW4-gCU",
      desc:
        "St.Joseph's College Hr Sec School, Trichy",
      Percentage: "HSC : 72.6% , SSLC : 80.6% " 
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Education</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                className="user"
                src={d.img}
                alt=""
              />
            </div>
            <div className="center">
              <b>{d.desc}</b>
            </div>
            <div className="center">
              {d.Percentage}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
