import Contact from "./components/contact";
import cat1 from "./assets/cat1.jpg";
import cat2 from "./assets/cat2.jpg";
import cat3 from "./assets/cat3.jpg";
import cat4 from "./assets/cat4.jpg";

function App() {
  return (
    <>
      <Contact
        name="mr. whakerloos"
        contact="0246304979"
        email="powerlet@gmail.com"
        image={cat1}
      />
      <Contact
        name="mr. luna"
        contact="0206304979"
        email="lunat@gmail.com"
        image={cat2}
      />
      <Contact
        name="mr. tiger"
        contact="0206304979"
        email="lunat@gmail.com"
        image={cat3}
      />
      <Contact
        name="mr. Nimbus"
        contact="0246394979"
        email="Nimbus@gmail.com"
        image={cat4}
      />
      <hr />
    </>
  );
}

export default App;
