import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'

const Card = () => {

  const [starW, setStarW] = useState([])

  useEffect(() => {       
    const endPoint = "https://dragon-ball-super-api.herokuapp.com/api/characters"             
    axios.get(endPoint).then(response =>{
        const movieData = response.data;
        console.log(movieData)
        setStarW(movieData)
    })
    .catch(error =>{
        alert("Error", "Hubo un error", "error")
    })      
    }, [])

    

    const Capitalize = (str) => { 
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

  return (
    <div className="row my-2 mx-2">
  {starW.map((prueba) => (
        <div className="col-3" key={prueba.id}>
        <div className="card my-2">
             <img src={prueba.imageUrl}  className="card-img-top" alt="..."/> 
         {  /*   <button className="favorito"
             onClick={props.addOrRemoveFromFavs} 
             data-movie-id={prueba.id}>🖤
  </button>   */   }      
           <div className="card-body text-center">
              <h5 className="card-title">{Capitalize(prueba.name)}</h5>
              <p className="card-text">{Capitalize(prueba.originplanet)}</p>
              <p className="card-text">{Capitalize(prueba.role)}</p>
              <p className="card-text">{Capitalize(prueba.specie)}</p>
              <p className="card-text">{Capitalize(prueba.status)}</p>
            { /*  <Link to={`/detalle?id=${prueba.id}`} className="btn btn-dark" >View details</Link> */}
          </div>
        </div>     
      </div>
    ))

    }
  </div>

    
  )
}

export default Card