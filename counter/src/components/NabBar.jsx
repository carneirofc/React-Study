import React, {Component} from 'react'

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#"> Counter App ?
                    <span style={this.styles}
                          className="badge badge-primary m-2">
                    {this.props.val}
                </span></a>
            </nav>

        );
    };
}

export default NavBar;