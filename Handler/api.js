import apiRequestHandler from "./apiHandler";

export const getPopularMovies = async () => {
    try {
        const response = await apiRequestHandler({
            url: 'movie/popular',
            method: 'GET'
        })
        return response
    } catch (error) {
        console.warn(error)
    }
};

export const getNowPlayingMovies = async () => {
    try {
        const response = await apiRequestHandler({
            url: 'movie/now_playing',
            method: 'GET'
        })
        return response
    } catch (error) {
        console.warn(error)
    }
}

export const getTopRatedMovies = async () => {
    try {
        const response = await apiRequestHandler({
            url: 'movie/top_rated',
            method: 'GET'
        })
        return response
    } catch (error) {
        console.warn(error)
    }
};

export const getUpcoming = async () => {
    try {
        const response = await apiRequestHandler({
            url: 'movie/upcoming',
            method: 'GET'
        })
        return response
    } catch (error) {
        console.warn(error)
    }
}

export const getSearchMovies = async () => {
    try {
        const response = await apiRequestHandler({
            url: 'search/movie',
            method: 'GET'
        })
        return response
    } catch (error) {
        console.warn(error)
    }
}

export const getMultiSearch = async () => {
    try {
        const response = await apiRequestHandler({
            url: 'search/multi',
            method: 'GET'
        })
        return response
    } catch (error) {
        console.warn(error)
    }
}

export const getSearchTv = async () => {
    try {
        const response = await apiRequestHandler({
            url: 'search/tv',
            method: 'GET'
        })
        return response
    } catch (error) {
        console.warn(error)
    }
}

export const getTvAirToday = async () => {
    try {
        const response = await apiRequestHandler({
            url: 'tv/airing_today',
            method: 'GET'
        })
        return response
    } catch (error) {
        console.warn(error)
    }
}

export const getTvOnTheAir = async () => {
    try {
        const response = await apiRequestHandler({
            url: 'tv/on_the_air',
            method: 'GET'
        })
        return response
    } catch (error) {
        console.warn(error)
    }
}

export const getTvPopular = async () => {
    try {
        const response = await apiRequestHandler({
            url: 'tv/popular',
            method: 'GET'
        })
        return response
    } catch (error) {
        console.warn(error)
    }
}

export const getTopRatedTv = async () => {
    try {
        const response = await apiRequestHandler({
            url: 'tv/top_rated',
            method: 'GET'
        })
        return response
    } catch (error) {
        console.warn(error)
    }
}