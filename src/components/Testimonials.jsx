import { ImQuotesLeft } from "react-icons/im";
function Testimonials({ image, nom, role, temoignage }) {
  return (
    <div className="testimonials__card">
      <span className="testimonials__icon">
        <ImQuotesLeft />
      </span>
      <div className="testimonials__users">
        <img
          src={image}
          alt=""
          className="testimonials__users--img"
        />
        <div className="testimonials__users--description">
          <p className="testimonials__users--text">{nom}</p>
          <p className="testimonials__users--role">{role}</p>
        </div>
      </div>
      <p className="testimonials__content">
        {temoignage}
      </p>
    </div>
  );
}

export default Testimonials;
