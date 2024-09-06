import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Button, Image, Header, Segment } from "semantic-ui-react";
import { getRecipeDetails } from "../services/api";
import { Link } from "react-router-dom";


const RecipeDetails = () => {

    const [recipe, setRecipe] = useState({});

    const { recipeId } = useParams();

    useEffect(() => {
        const getData = async () => {
            let result = await getRecipeDetails(recipeId)
            if (result && result.recipe) {
                setRecipe(result.recipe);
            }
        }
        getData();
    }, [])

    return (
        Object.keys(recipe).length > 0 ?
        <Grid container stackable columns = {2} className = "details-page-content">
            <Grid.Column>
                <Button 
                    as = {Link}
                    to = {"/recipes"}
                    content = "Back"
                    color = "orange"
                    style = {{ marginBottom: 40 }}
                />
                <Image src = {recipe.image_url} />
            </Grid.Column>
            <Grid.Column>
                <Header size = "medium">{recipe.title}</Header>
                <p>Published by: {recipe.publisher}</p>
                <Button 
                    as = {"a"} // anchor
                    href = {recipe.source_url}
                    target = "_blank"
                    content = "Recipe Page"
                    color = "orange"
                />
                <Button 
                    as = {"a"} // anchor
                    href = {recipe.publisher_url}
                    target = "_blank"
                    content = "Publisher's Page"
                    color = "orange"
                />
                <Header size = "large" contents = "Ingredients" />
                <Segment.Group>
                    {
                        recipe && recipe.ingredients.map(data => (
                            <Segment>
                                <h5>{data}</h5>
                            </Segment>
                        ))
                    }
                </Segment.Group>
            </Grid.Column>
        </Grid> : null
    )
}

export default RecipeDetails;