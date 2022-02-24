import React from 'react'

interface CharacterCardProps{

name: string,
key: number,
image: string,
location: string,
status: string,
species: string,
type: string,
gender: string,
}



function GaleryItems(props: CharacterCardProps) {
  
    return (

    <div className="box">

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img className="img_card" src={props.image} alt="Character" />
                </div>
                <div className="flip-card-back">
                 <h1 className="card_name">{props.name}</h1>
                 <ul>
                    <li>Location: {props.location}</li>
                     <li>Species: {props.species}</li>
                     <li>Status: {props.status}</li>
                     <li>Type: {props.type}</li>
                     <li>Gender: {props.gender}</li>
                 </ul>
                </div>
            </div>
        </div>
    
    
    </div>
  )
}

export default GaleryItems