import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../services/api";
import { useEffect, useState } from "react";

const Recipes = () => {

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getResult();
    }, [query])

    const getResult = async () => {
       let result = await getRecipes(query);

       if (result && result.recipes) {
            setRecipes(result.recipes);
       }
    }
    
    return (
        <>
            <Search setQuery = {setQuery} />
            <RecipeList query = {query} recipes = {recipes} />
        </>
    )
}

export default Recipes;