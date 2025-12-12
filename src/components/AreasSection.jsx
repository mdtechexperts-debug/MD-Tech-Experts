import "./AreasSection.css";
import Map from "../assets/Map.png"; // make sure your Map.png is here

const AreasSection = () => {
  return (
    <section className="areas-container">
      <h2 className="areas-title">
        Areas <span>We Serve</span>
      </h2>

      <p className="areas-text">
        We Work With Clients Across North America, Europe, The Middle East, South Asia, And Africa.
      </p>

      <div className="map-wrapper">
        <img src={Map} alt="World Map" className="map-image" />
      </div>
    </section>
  );
};

export default AreasSection;
