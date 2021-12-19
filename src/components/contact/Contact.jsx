import { useState,useRef } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "Dinesh_Mail",
        "template_dj3a1si",
        formRef.current,
        "user_f5QuEjxxQNlkddHfE6whu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" required placeholder="Name" name="user_name" />
            <input  type="text" required placeholder="Subject" name="user_subject" />
            <input  type="text" required placeholder="Email" name="user_email" />
            <textarea rows="5" required placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
      </div>
    </div>
  );
}
