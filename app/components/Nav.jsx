let React = require('react');
let {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();

        let location = this.refs.search.value;
        let encodedLocation = encodeURIComponent(location);

        if (encodedLocation.length > 0) {
            this.refs.search.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },

    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active"
                                       activeStyle={{fontWeight: 'bold'}}>
                                Get Weather
                            </IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active"
                                  activeStyle={{fontWeight: 'bold'}}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active"
                                  activeStyle={{fontWeight: 'bold'}}>
                                Examples
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather by city"
                                       ref="search"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
