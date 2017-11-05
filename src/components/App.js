import React, { Component } from 'react';
import {connect} from 'react-redux';
// Greeting.propTypes = {
//     name: PropTypes.string.isRequired
// };



class App extends Component {
    render()
    {
        return(

            <h1> Welcome {this.props.username} </h1>

        );
    }
}

const mapStateToProps = function (state)  {
    return {
        username: state.username
    };
}
export default connect(mapStateToProps)(App);