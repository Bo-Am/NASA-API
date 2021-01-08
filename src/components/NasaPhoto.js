import React from 'react';
import {useState, useEffect} from 'react';
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null)

  useEffect(()=> {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if(!photoData) return <div />;
  
  return (<>
    <NavBar />
    <div className='nasa-photo'>
      {(photoData.media_type === 'video') ? (
      <iframe 
      width="490" 
      height="320" 
      title="space-video" 
      frameBorder="0" 
      className="photo" 
      align="left"
      allow="encrypted-media"
      gesture="media" 
      src={photoData.url} />
      ) : (<img className='photo' src={photoData.url} alt={photoData.title}/>)}

      <h2>{photoData.title}</h2>
      <p className='date'>{photoData.date}</p>
      <p className='explanation'>{photoData.explanation}</p>
    </div>
  </>)
}
