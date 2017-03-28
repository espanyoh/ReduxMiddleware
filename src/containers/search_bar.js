import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    render(){
        return(
            <div>
                <form className="input-group" onSubmit={this.onFormSubmit}>
                    <input 
                        placeholder="Get a five-day forecast in your fav cities"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn bth-secondary">Submit</button>
                    </span>
                </form>
            </div>
        );
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState( {term : event.target.value} );
    }

    onFormSubmit(event){
        event.preventDefault();
        //stop form submit by default when enter or submit button

        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

//first parameter is null because, here (searchbar) didn't want any state bind
export default connect(null, mapDispatchToProps)(SearchBar);