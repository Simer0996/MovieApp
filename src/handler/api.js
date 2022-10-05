import apiRequestHandler from "./apiHandler"

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

export const showDetails = async (type, Id) => {

    try {
        const response = await apiRequestHandler({
            url: `${type}/${Id}`,
            method: 'GET'
        })
        return response
    } catch (error) {
        console.warn(error)
    }
};

export const getSearchContent = async (type, query) => {
    try {
        const response = await apiRequestHandler({
            url: `search/${type}?query=${query}`,
            method: 'GET'
        })
        return response.results
    } catch (error) {
        console.warn(error)
    }
}


