import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            
            <h3 className="animate__animated animate__bounceInRight">{ category }</h3>

                {loading && <p className="animate__animated animate__heartBeat" >Loading</p>}

                <div className="card-grid">
                    {
                        images.map ( img => (
                            <GifGridItem
                                key={ img.id } 
                                { ...img } 
                            />
                        ))
                    }
            
            </div>
        </>
    )
}
// Ejemplo de contador
/* <h3> { count } </h3>
<button onClick={ ()=> setCount (count +1) }></button> */