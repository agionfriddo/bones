import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class ReviewItem extends Component {
  constructor() {
    super()
  }

	buildStarsBoolean(rating){
		return Array.from(new Array(5), (element, index) => rating > index);
	} 
				
  render() {
    const review = this.props.review
    console.log("REVIEW ITEM", review)
    return (
      <div className="row">
        <div className="col-md-12">
          <h4>
						{
							this.buildStarsBoolean(review.rating).map(star => {
								return star ? <span className="glyphicon glyphicon-star"></span> : <span className="glyphicon glyphicon-star-empty"></span>;
							})
				 		}
					</h4>
					<h4>{ review.title }</h4>
          {
            review.user ? <p>By { review.user.name}</p> : null
          }
          <p>{ review.content }</p>
        </div>
      </div>
    )
  }
}
