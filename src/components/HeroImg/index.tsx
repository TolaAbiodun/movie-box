import React from 'react';

// Import Hero Image styles
import {Wrapper, Content, Text} from './HeroImg.styles';


// Types
type Props = {
    image: string;
    title: string;
    text: string;
}

const HeroImg: React.FC<Props> = ({image, title, text}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);


export default HeroImg;