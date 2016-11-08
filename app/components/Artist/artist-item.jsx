import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class ArtistItem extends Component {
  constructor() {
    super()
  }

  render() {
    const artistObj = this.props.artist
    return (
        <div className="row">
          <div className="col-md-4">
            <img width="250" src={artistObj.imageurl} />
          </div>
          <div className="col-md-5">
            <Link to={`/artists/${artistObj.id}`}><h4>{ artistObj.name }</h4></Link>
            <p>
            {
              artistObj.genres && artistObj.genres.map(genre => {
                if (genre !== artistObj.genres[artistObj.genres.length - 1])
                  return genre.name + ", "
                else
                  return genre.name
              }
            )}
            </p>
          </div>
          <div className="col-md-3">
            <Link to={`/artists/${artistObj.id}`}><button className="btn btn-success">SEE ARTIST PAGE</button></Link>
          </div>
        </div>
    )
  }
}
