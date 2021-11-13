import React , {useState, useEffect, useRef} from 'react';

// Import styles
import {Wrapper, Content} from './SearchBar.styles';

// Import Search Icon
import searchIcon from '../../images/search-icon.svg';

// Types
type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

// Searbar component

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    // Skip initial render in use effect
    useEffect(() => {
      if (initial.current) {
        initial.current = false;
        return;
      }

      // Create slight delay to fetch search term
      const timer = setTimeout(() => {
        setSearchTerm(state);
      }, 600);

      // Clear timer
      return () => clearTimeout(timer);
    }, [setSearchTerm, state]);


    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input type='text' 
                       placeholder='Search' 
                       onChange = {e => setState(e.currentTarget.value)}
                       value = {state}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;
 

