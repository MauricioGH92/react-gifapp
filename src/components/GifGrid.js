import React,{useState,useEffect} from 'react'

const GifGrid = ({category}) => {


    const [images, setImages] = useState([])
    useEffect(() => {
        getGifs()
    }, [])
    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=YYwA8eeuGHWXes967yOixSHlRPRRHZjA';
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img=>({
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }))
        console.log(gifs);
        setImages(gifs)

    }
    
    return (
        <>
            <h3>{category}</h3>
            <ol>
                {
                  images.map(({id,title})=>(
                      <li key={id}>
                          {title}
                      </li>
                  ))  
                }
            </ol>
        </>
    )
}

export default GifGrid
