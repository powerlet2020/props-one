import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import "../App.css";

const contact = {
  name: "Hamza",
  image: "../assets/cat1.png",
  phone: "0246304979",
  email: "powerlet@.com",
};

const { name, image, email } = contact;
console.log(name);
console.log(image);
console.log(email);
function Contact(props) {
  return (
    <>
      <article>
        <div className="image">
          <img src={props.image} alt="" width={50} />
        </div>
        <h3>{props.name}</h3>

        <div className="contact-info">
          <div className="phone">
            <i class="fa-solid fa-phone"></i>
            <p>{props.contact}</p>
          </div>

          <div className="email">
            <i class="fa-regular fa-envelope"></i>
            <p>{props.email}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Contact;
