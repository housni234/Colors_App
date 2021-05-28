import React, { useState, useEffect } from 'react';
import Card from "./Card"
import './App.css';

function Board() {
    const [colors, setColors] = useState([]);
    const [page, setPage] = useState(1);
    

    useEffect(() => {
        fetch(`https://reqres.in/api/colors?page=${page}`)
            .then((response) => response.json())
            .then((data) => { setColors(data.data) });
    }, [page])

    const nextPage = () => {
        setPage(page + 1);
    };
    const previousPage = () => {
        setPage(page - 1);
    };
   
    let cards = []
    for (let i = 0 ; i < colors.length ; i++){
            cards.push(<Card name={colors[i].name} color={colors[i].color} id={colors[i].id} year={colors[i].year} />)
    }
        
    return (
        <div className='container'>
            
             {cards}
            
            <div>
                <button onClick={previousPage}>Anterior</button>
                <button onClick={nextPage}>Seguinte</button>
            </div>


        </div>


    )
}

export default Board;