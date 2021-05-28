import React, { useState, useEffect } from 'react';
import './App.css';

function Board() {
    const [colors, setColors] = useState([])
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


    const colorCards = colors.map(bgColor =>
        <div onClick={() => { navigator.clipboard.writeText(bgColor.color) }} className="card" key={bgColor.id} style={{ backgroundColor: bgColor.color }}>
            {bgColor.id}
            {bgColor.name}
            {bgColor.year}
            {bgColor.color}
            {bgColor.pantone_value}
        </div>)

    return (
        <div className='container'>
            <div>{colorCards}</div>
            <div>
                <button onClick={previousPage}>Anterior</button>
                <button onClick={nextPage}>Seguinte</button>
            </div>


        </div>


    )
}

export default Board;