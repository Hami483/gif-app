import React,{useState,useEffect} from 'react'

const API_KEY= process.env.REACT_APP_API_KEY;


const Random = () => {

    const [gif,setGif] = useState('')

    const fetchGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

        const response = await fetch(url)
        const data = await response.json()
        // console.log(data.data.images.downsized_large)
        const imageSrc = data.data.images.downsized_large.url
        // console.log(imageSrc)

        setGif(imageSrc);
    }

    useEffect(() =>{
        fetchGif()
    },[])

    return(<>
        <div className="container">
            <h1>Random Gif</h1>
        <img src={gif} alt="" width='500'/>
        <button onClick={fetchGif}>Generate gif</button>
        </div>
        </>
    )
}

export default Random;