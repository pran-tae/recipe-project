import { Menu } from 'semantic-ui-react';
import { logo } from '../../constants/constant';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Menu fixed = "top">
            <Menu.Item as = {Link} to = "/">
                <img src = {logo} alt = "logo" style = {{width: 50}}/>
            </Menu.Item>
            <Menu.Item name = "Home" as = {Link} to = "/" />
            <Menu.Item name = "Recipes" as = {Link} to = "/recipes" />
        </Menu>
    )
}

export default NavBar;