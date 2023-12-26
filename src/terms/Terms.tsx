import { useEffect, useState } from "react";
import "./terms.scss";

const Terms = () => {
  const [data, setData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [islangopen, setIslangopen] = useState(false);
  const [menuClass, setMenuClass] = useState("none");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuClass(isMenuOpen ? "closing" : "open");
  };
  const toggleLang = () => {
    setIslangopen(!islangopen);

  };

  useEffect(() => {
    fetch("https://sow-gdch.onrender.com/api/terms/")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data[0].content);
        setData(data[0].content);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div className="terms">
      <div className="nav">
        <div className="logo" onClick={toggleMenu}>
          <img
            src="https://storage.123fakturere.no/public/icons/diamond.png"
            alt=""
          />
        </div>
        {
        // isMenuOpen && 
        (
        <div className={`menu ${menuClass}`}>
          <span>Home</span>
          <span>Order</span>
          <span>Our Customers</span>
          <span>About US</span>
          <span>Contact Us</span>
        </div>
      )}
        

        <div className="text">
          <span>Home</span>
          <span>Order</span>
          <span>Our Customers</span>
          <span>About US</span>
          <span>Contact Us</span>
          <div className="lang" onClick={toggleLang}>
            <span >English</span>
            <img
              src="https://storage.123fakturere.no/public/flags/GB.png"
              alt=""
            />

          </div>
          {
        islangopen && 
        (
        <div className={`langtoggle`}>
          <div className="lang">
            <span>Bokmål</span>
            <img
              src="https://storage.123fakturere.no/public/flags/NO.png"
              alt=""
            />
          </div>
          <div className="lang">
            <span>Nynorsk</span>
            <img
              src="https://storage.123fakturere.no/public/flags/NO.png"
              alt=""
            />
          </div>
          <div className="lang">
            <span>English</span>
            <img
              src="https://storage.123fakturere.no/public/flags/GB.png"
              alt=""
            />
          </div>
        </div>
      )}
        </div>
      </div>
      
      <div className="content">
        <h1>Terms</h1>
        <button>Close and Go Back</button>
        <div className="termsbody">{data}</div>
        <button>Close and Go Back</button>
      </div>
    </div>
  );
};

export default Terms;
