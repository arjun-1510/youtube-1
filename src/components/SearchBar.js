import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    onInputChange = event => {
        this.setState({ term: event.target.value});

    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);

        

    };

    render() {
        return (
        <div className="search-bar ui segment">
        <form  onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
                <img src="https://freepngimg.com/thumb/animation/63719-rush-minion-wallpaper-desktop-despicable-video-high-definition.png" style={{height:"70px"}}/>
                <h1 style={{marginLeft:"6%",marginTop:"-5%"}}>Mini-Tube</h1>
            <br/>
                <label>video Search</label>
                <input 
                type="text"  
                value={this.state.term}
                onChange={this.onInputChange}
                
                />
              </div>
          </form> 
      </div>
    );
                
    }
}

export default SearchBar;