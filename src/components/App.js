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
                    defaultValue={this.props.username} 
                    onChange = {(e) => {this.props.changeUserName(e.target.value)}}/>
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
        //bindActionCreators is method that takes from onChange event with props.change(value) 
        //and that value passed to the dispatch(changeUserName(value)) and call like this becuse it binds method to this bindActionCreators 
        changeUserName: bindActionCreators(changeUserName, dispatch)
    }
}

export default connect(mapStateToProps)(App);