const Recommendation = ({ bike }) => {


  if (!bike) {
    return <p>No bike</p>
  }

  return (
    <div className="recommendation-container">
      <div>
        <img src={bike.image} alt="" />
      </div>
      <div className="content">
        <h3>{bike.bikeName}</h3>
        <p>{bike.description}</p>
        <a className="readMoreButton" href={bike.link}>Les mer og kjøp</a>
      </div>
    </div>
  )
}

export default Recommendation