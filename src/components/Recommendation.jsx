const Recommendation = ({ bike }) => {

  const redirectToProduct = (url) => {
    window.parent.location.href = url;
  }


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
        <button onClick={redirectToProduct(bike.link)} className="readMoreButton" href={bike.link}>Les mer og kjøp</button>
      </div>
    </div>
  )
}

export default Recommendation