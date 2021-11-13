import React from 'react';

// Stlyes
import {Wrapper, Image} from './Cast.styles';

// Types
type Props = {
    name: string;
    character: string;
    imageUrl: string;
}

const Cast: React.FC<Props> = ({name, character, imageUrl}) => (
    <Wrapper>
        <Image src={imageUrl} alt='cast-thumb' />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

export default Cast;