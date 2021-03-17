import React from 'react'
import { Card } from 'react-bootstrap'
import _ from 'lodash'

const ArtistsList = ({artists}) => {
    return(
        <React.Fragment>
            {Objects.keys(artists).length > 0 && (
                <div className="artists">
                    {artists.items.map((artists, index) => {
                        return(
                            <React.Fragment key="index">
                                <Card style={{ width: '18 rem' }}>
                                    <a
                                       target="_blank" 
                                       href={artist.external_urls.spotify}
                                       rel="noopener noreferrer"
                                       className="card-image-link"
                                        >
                                            {!_isEmpty(artists.image) ? (
                                                <Card.Img
                                                    variant="top"
                                                    src={artists.image[0].url}
                                                    alt=""
                                                />
                                            ):( <img src={} alt=""/>)}
                                            </a>
                                            <Card.Body>
                                                <Card.Title>{artists.name}</Card.Title>
                                            </Card.Body>
                                </Card>
                            </React.Fragment>
                        )
                    })}
                </div>
            )}
        </React.Fragment>
    )
}

export default ArtistsList