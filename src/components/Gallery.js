import React, { useState } from 'react';
import './gallery.css';
import Images from './gallery_images/Images';

const Gallery = () => {
    const [state,setstate]=useState(false);
   
    
    const [items, setItems] = useState(Images);

    const filterItem = (categoryItem) => {
        const updatedItems = Images.filter((currentElement) => {
            return currentElement.category == categoryItem;
        });
        setItems(updatedItems);

    }

    return (
        <div id="gallery">
            <span>
            <i className="bg fab fa-envira"></i>
                <h2>Gallery</h2>
            </span>
            <div className='Navigation'>
                <button className='btn' onClick={() => setItems(Images)}>All</button>
                <button className='btn' onClick={() => filterItem('Events')}>Events</button>
                <button className='btn' onClick={() => filterItem('Workshop')}>Workshop</button>
                <button className='btn' onClick={() => filterItem('Others')}>Others</button>
            </div>
            <div className="imgContainer">
                {
                    items.map((elem) => {
                        
                        const { id, image, caption, category } = elem;
                        
                        return (
                            <div className="imgInContainer">
                             
                                <img className="img img-fluid"  id='changeWidth' src={image} alt='img' />
                                
                                    
                                   
                                <p className="caption">{caption}</p>
                                <div>
                                {state&&(
                                        
                                        <img className="imagebig"
                                        
                                        src={image}                                     
                                        
                                        alt="no-image"
                                        ></img>
                                    
                                    )
                                        
                                    }
 
                                </div>
                            </div> 
                             );
                        
                    })
                }
            </div>
        </div>
    )
}
export default Gallery;