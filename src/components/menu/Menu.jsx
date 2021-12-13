import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Experience</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Education</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a target="blank" href="https://drive.google.com/file/d/1kMIBqaK51-UYkS5ZSVXGpXPsmaRRX1JF/view?usp=sharing">Download CV</a>
        </li>
      </ul>
    </div>
  );
}
