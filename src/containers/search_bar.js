import React, {Component} from 'react';

export default class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term:''};
        this.onInputChange = this.onInputChange.bind(this);
    }
    render(){
        return(
            <div>
                <form className="input-group" onSubmit={this.onFormSubmit}>
                    <input 
                        placeholder="Get a five-day forecast in your fav cities"
                        className="form_control"
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
    }
}