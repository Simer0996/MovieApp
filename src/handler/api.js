import apiRequestHandler from "./apiHandler";

export const getContent = async (type, category) => {
    try {
        const response = await apiRequestHandler({
            url: `${type}/${category}`,
            method: 'GET'
        })
        return response.results
    } catch (error) {
        console.warn(error)
    }
};

export const getSearchMovie = async (type, contentType) => {
    try {
        const response = await apiRequestHandler({
            url: `search/${type}?query=${movieName}`,
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




