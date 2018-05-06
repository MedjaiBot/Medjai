import * as React from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export class Header extends React.Component<{}, {}>
{
    render ()
    {
        return <Menu inverted>
            <MenuItem>
                <Link to="/">Homepage</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/extensions">Extensions</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/settings">Settings</Link>
            </MenuItem>
        </Menu>
    }
}
