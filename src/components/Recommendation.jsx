import { useState, useEffect } from "react"
import sanityClient from "../lib/client"
import Navigation from "./Navigation"
import Loader from "./Loader"


const Recommendation = ({ slug, navigationProps }) => {
  const [bike, setBike] = useState(null)

  useEffect(()=>{
    sanityClient
      .fetch(
        `*[_type == "bike_finder" && slug.current == "${slug}"] {
            title,
            "currentSlug": slug.current,
            description,
            "image": image.asset->url,
            ew_url,
            price
        }`
      )
      .then((data) => {
        setBike(data[0])
      })
      .catch(console.error)
  }, [])

  const redirectToProduct = (url) => {
    window.parent.location.href = url;
  }

  if (!bike) {
    return (
      <Loader />
    )
  }

  return (
    <div className="main-container">
      <div className="header">
        <h1>Vi tror du kommer til å digge denne</h1>
        <h2>Basert på dine svar tror vi denne sykkelen kommer til å passe deg perfekt</h2>
      </div>
      <div className="recommendation-container">
        <Navigation {...navigationProps} />
        <div className="recommendation_inner">
          <div className="recommendation_image">
            <img src={bike.image} />
          </div>
          <div className="recommendation_content">
            <h3>{bike.title}</h3>
            <p>{bike.description}</p>
            <div>
              <button onClick={() => redirectToProduct(bike.ew_url)}>Les mer og kjøp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendation