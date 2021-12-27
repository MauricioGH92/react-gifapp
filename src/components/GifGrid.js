import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GIfGridItem from "./GIfGridItem";

const GifGrid = ({ category }) => {
  const {data:images,loading} = useFetchGifs(category);
  
  return (
    <>
      <h3>{category}</h3>
      {loading && 'Cargando...'}

       <div className="card-grid">
        {images.map((img) => (
          <GIfGridItem key={img.id} {...img} />
        ))}
      </div>)
    </>
  );
};

export default GifGrid;
