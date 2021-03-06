import React from 'react'

const MovieReviews = ({ reviews }) => {
  
  return (
      <div className='review-list'>
      {
        reviews.map(review => 
        (
          <div className='review'>
            <h3>{review.display_title}</h3>
            <p>{review.summary_short}</p>
          </div>
        ))
      }
      </div>
      )
}

  
MovieReviews.defaultProps = {
  reviews: ''
}

export default MovieReviews