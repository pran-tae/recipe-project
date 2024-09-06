import Header from "../components/common/Header";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <Header title = "Check out our recipes!" bgClass = "bg-image">
            <Button 
                content = "Search"
                color = "orange"
                size = "big"
                as = {Link}
                to = "/recipes"
            />
        </Header>
    )
}

export default Home;