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
          <a target="blank" href="https://drive.google.com/file/d/1FWk7sqgaQIlhYYlNPZglGBsQiZCMZ08n/view?usp=drivesdk">Download CV</a>
        </li>
        <li>
          <a target="blank" href="https://github.com/AKRaavanan/">Github</a>
        </li>
      </ul>
    </div>
  );
}
