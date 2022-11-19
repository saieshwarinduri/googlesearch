import './index.css'

const SuggestionItem = props => {
  const {ItemList, changeInput} = props
  const {suggestion} = ItemList

  const onchangeStates = () => {
    changeInput(suggestion)
  }

  return (
    <li className="list_Item_names">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="image_logo"
        onClick={onchangeStates}
      />
    </li>
  )
}
export default SuggestionItem
