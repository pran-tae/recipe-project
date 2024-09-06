import { Grid, Form, Input } from "semantic-ui-react";
import { useState } from "react";


const Search = ({ setQuery }) => {

    const [value, setValue] = useState("");
    const onFormSubmit = () => {
        setQuery(value);
    }

    return (
        <Grid column = {2} textAlign = "center" className = "search-box">
            <Grid.Column>
                <h2 className = "search-heading">Search Recipes with <span style = {{ color: "orange" }}>Forkify</span>!</h2>
                <h4>To search using multiple key words, seperate each word with a comma (,).</h4>
                <Form onSubmit = {onFormSubmit}>
                    <Input 
                        placeholder = "e.g. sushi, pizza, smoothie"
                        action = {{ icon: "search", color: "orange" }}
                        onChange={(e) => setValue(e.target.value)}
                        value = {value}
                    />
                </Form>
            </Grid.Column>    
        </Grid>
    )
}

export default Search;