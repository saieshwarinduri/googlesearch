import {Component} from 'react'

import SuggestionItem from '../SuggestionItem/index'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  changeInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  deleteSearchInput = () => {
    this.setState({searchInput: ''})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(eachSearchList =>
      eachSearchList.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google_image"
          alt="google logo"
        />
        <div className="searchContainer">
          <div className="search_box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="searchLogo"
              alt="search icon"
            />
            <input
              type="search"
              className="input_element"
              placeholder="Search Google"
              onChange={this.onChangeInputValue}
              value={searchInput}
            />
            {searchInput !== '' && (
              <button
                type="button"
                className="button_cross"
                onClick={this.deleteSearchInput}
              >
                x
              </button>
            )}
          </div>
          <ul className="list_of_elements">
            {searchResult.map(eachItem => (
              <SuggestionItem
                ItemList={eachItem}
                key={eachItem.id}
                changeInput={this.changeInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
