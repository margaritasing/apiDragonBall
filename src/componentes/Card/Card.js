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
    <div className="row">
  {starW.map((prueba) => (
        <div className="col-3" key={prueba.id}>
        <div className="card my-2">
            <div className='card-img'>
               <img src={prueba.imageUrl} style={{ width:"240px", height:"300px" }} className="card-img-top" alt="..."/> 
            
            </div>
         {  /*   <button className="favorito"
             onClick={props.addOrRemoveFromFavs} 
             data-movie-id={prueba.id}>🖤
  </button>   */   }      
           <div className="card-body text-center">
              <h5 className="card-title">{Capitalize(prueba.name)}</h5>
              <p className="card-text">Planeta: {Capitalize(prueba.originplanet)}</p>
              <p className="card-text">Rol: {Capitalize(prueba.role)}</p>
              <p className="card-text">Especie:  {Capitalize(prueba.specie)}</p>
              <p className="card-text"> Status: {Capitalize(prueba.status)}</p>
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