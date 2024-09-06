import axios from "axios";
import { API_URL } from "../constants/constant";

export const getRecipes = async (query) => {
    try {
        let response = await axios.get(`${API_URL}/search?q=${query}`);
        return response.data;
    } catch (error) {
        console.log("Error when calling api: ", error.message);
        return error.response;
    }
}

export const getRecipeDetails = async (query) => {
    try {
        let response = await axios.get(`${API_URL}/get?rId=${query}`);
        return response.data;
    } catch (error) {
        console.log("Error when calling api: ", error.message);
        return error.response;
    }
}