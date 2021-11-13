import React from 'react';
import {Link} from 'react-router-dom';

// Import styles
import { ThumbNails } from './Thumbnails.styles';


// Types
type Props = {
  image: string;
  movieId?: number;
  clickable: Boolean;
}


const ThumbImg: React.FC<Props> = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <ThumbNails src={image} alt="movie-thumb-image" />
      </Link>
    ) : (
      <ThumbNails src={image} alt="movie-thumb-image" />
    )}
  </div>
); 


export default ThumbImg;