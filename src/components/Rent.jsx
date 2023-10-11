function Rent({ image, title, description, price }) {
  return (
    <div className="rent">
      <div className="rent__wrapper">
        <div className="rent__wrapper--container">
          <div className="rent__wrapper--text">
            <h5 className="rent__wrapper--title">{title}</h5>
            <p className="rent__wrapper--description">{description}</p>
          </div>
          <span className="rent__wrapper--price">${price}</span>
        </div>
      </div>
      <img src={image} alt="" className="rent__image" />
    </div>
  );
}

export default Rent;
