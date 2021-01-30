import React,{useState,useEffect} from 'react'

const API_KEY= process.env.REACT_APP_API_KEY;


const Tag = () => {

    const [gif,setGif] = useState('')
    const [tag,setTag] = useState('dogs')

    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

        const response = await fetch(url)
        const data = await response.json()
        // console.log(data.data.images.downsized_large)
        const imageSrc = data.data.images.downsized_large.url
        // console.log(imageSrc)

        setGif(imageSrc);
    }

    useEffect(() =>{
        fetchGif(tag)
    },[tag])

     const handleClick = () => {
        fetchGif(tag);
    }

    return(<>
        <div className="container">
            <h1>Random Gif</h1>
        <img src={gif} alt="" width='500'/>
        <input type="text" value={tag} onChange={e => setTag(e.target.value)}/>
        <button onClick={handleClick}>Generate gif</button>
        </div>
        </>
    )
}

export default Tag;