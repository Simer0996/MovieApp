import apiRequestHandler from "./apiHandler";

export const getMovies = async (Type) => {
    try {
        const response = await apiRequestHandler({
            url: `movie/${Type}`,
            method: 'GET'
        })
        return response
    } catch (error) {
        console.warn(error)
    }
};
export const getTvShows = async (type) => {
    try {
        const response = await apiRequestHandler({
            url: `tv/${type}`,
            method: 'GET'
        })
        return (response)
    } catch (error) {
        console.warn(error)
    }
}


export const getSearchMovies = async (movieName) => {
    try {
        const response = await apiRequestHandler({
            url: `search/movie?query=${movieName}`,
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

export const getSearchTv = async (tvShowName) => {
    try {
        const response = await apiRequestHandler({
            url: `search/tv?query=${tvShowName}`,
            method: 'GET'
        })
        return response
    } catch (error) {
        console.warn(error)
    }
}




