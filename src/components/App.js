import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeUserName} from './actions/usernameAction';
// Greeting.propTypes = {
//     name: PropTypes.string.isRequired
// };



class App extends Component {
    render()
    {
        return(
            <div>
            <h1> Welcome {this.props.username} </h1>
            <div>
                <input 
                    defaultValue={this.props.username} />
            </div>
            </div>
        );
    }
}

const mapStateToProps = function (state)  {
    return {
        username: state.username
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        changeUserName: dispatch(changeUserName)
    }
}

export default connect(mapStateToProps)(App);