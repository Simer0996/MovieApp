import SelectList from 'react-native-dropdown-select-list'

export const MovieMenu = ({ setSelectedMovieType, fetchMovies }) => {

    const data = [{ key: 'now_playing', value: 'now_playing' }, { key: 'popular', value: 'popular' }, { key: 'top_rated', value: 'top_rated' }, { key: 'upcoming', value: 'upcoming' }];

    return (
        <SelectList setSelected={setSelectedMovieType} data={data} onSelect={() => fetchMovies()} />
    )
};