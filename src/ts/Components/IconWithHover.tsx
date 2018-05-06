import * as React from 'react'
import { Icon, IconProps } from 'semantic-ui-react'

export class IconWithHover extends React.Component<IconProps, {}>
{
    state = {
        showElement: false
    }

    render ()
    {
        return <span style={{
            paddingRight: '5px'
        }}>
            <Icon inverted name={this.props.name} onMouseEnter={() =>
            {
                this.setState({
                    showElement: true
                })
            }} onMouseLeave={() =>
            {
                this.setState({
                    showElement: false
                })
            }}/>
            {this.state.showElement ? this.props.children : null}
        </span>
    }
}
