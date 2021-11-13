import {useState, useEffect} from 'react';
import {isPersistentState} from '../helpers';
// API
import API, { Movie, Cast, Crew } from '../API';

// Types
export type MovieState = Movie & { actors : Cast[]; directors: Crew[] }

export const useFetchMovie = (movieId: number) => {
    const [state, setState] = useState<MovieState>({} as MovieState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                setLoading(true); 
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                // Get movie directors
                const directors = credits.crew.filter(
                    crewMember => crewMember.job === 'Director'
                );

                // pass movie directors, actors into empty state object
                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                })

                setLoading(false);

            } catch (error) {
                setError(true);
            }
        };

        // Fecth movie and save in session storage
        const movieSessionState = isPersistentState(movieId.toString());

        if (movieSessionState) {
            console.log('fetching data from session storage');
            setState(movieSessionState);
            setLoading(false);
            return;
        }
        console.log('fetching data from API');
        
        fetchMovieData();
    }, [movieId]);

    // Push movie data to session storage 
    useEffect(() => { 
        sessionStorage.setItem(movieId.toString(), JSON.stringify(state));
    }, [movieId, state])

    // return states
    return {state, loading, error}
};