import { Container, Header, Grid } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";


const RecipeList = ({ query, recipes }) => {

    return (
        <Container>
            <Header 
                size = "huge"
                content = {`Results for ${query}`}
                textAlign = "center"
            />
            <Grid columns = {4} doubling>
                {
                    recipes && recipes.map(recipe => (
                        <Grid.Column>
                            <RecipeListItem recipe = {recipe} />
                        </Grid.Column>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default RecipeList;