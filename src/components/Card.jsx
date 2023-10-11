
function Card({number,icon,title,description="Préparez-vous à lancer votre site web immobilier sans..."}) {
  return (
    <div className="card">
    <span className="card__icon">{icon}</span>
    <div className="card__wrapper">
        <h5 className="card__number">{number}</h5>
        <h5 className="card__title">{title}</h5>
        <h5 className="card__description">{description}</h5>
    </div>
      
    </div>
  )
}

export default Card
