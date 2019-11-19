import React from 'react';



const Artista = ({artista}) => {

    const { url, name, listeners } = artista
    const image = artista.image[3]['#text']
    const size = artista.image[3].size
    const imgdefault = "https://ebonly6yfa4y.wpcdn.shift8cdn.com/wp-content/uploads/2017/03/200px-J-Rock_icon.svg_.png"


    return(
            <div className="col s12 m6 l4">
                <div className="card">

                    <div className="card-image">
                        <img className="mx-auto d-block" src={ imgdefault || image } size={ 'large' || size }/>
                    </div>
                    
                    <div className="card-content text-center">
                        <h3>{ name }</h3>
                        <p>Reproducciones: { listeners }</p>
                    </div>
                    
                    <div className="card-content text-center m-2">
                        <a href={ url } target="blank" rel="noopener noreferrer" className="waves-effect waver-light btn">Ver más información</a>
                    </div>

                </div>
            </div>
    )
}

export default Artista;