import React, { Component } from 'react';
import Hobbies from './components/Hobbies';
import Time from './components/Time';
import Greetings from './components/Greetings';
import GitHubProfile from './components/GitHubProfile';
// Greeting.propTypes = {
//     name: PropTypes.string.isRequired
// };



class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'octocat'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.textInput.focus();
    }

    handleChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    async handleSearch(e){
    //alert("Username is" + this.props.username);
    const data = await fetch(`https://api.github.com/users/${this.state.username}`)
    .then((r) => 
        {
            return r.json(); 
        });
        console.log("response is " +data.name);
        this.setState({
            gitHubData: data
        });
    }


    render() {
        const children = this.props.children;
        const hobbies = this.props.user.hobbies;
        const username = this.state.username;
        return (
            <div>
                <h1 className="main-heading">
                    <Greetings name={this.props.user.name}/>
                    {this.state.username}
                    <Time />
                </h1>
                <div>{this.props.children}</div>
                <input 
                    type="text" 
                    placeholder="username"                     
                    defaultValue={this.state.username}
                    onChange={this.handleChange} 
                    ref={(input) => { this.textInput = input; }}/>
                
                <button onClick={this.handleSearch}> Search </button>
                {
                    this.state.gitHubData && <GitHubProfile userData={this.state.gitHubData}/>
                }
                <Hobbies hobbies={hobbies}/>
            </div>
        );
    }
}

export default Application;