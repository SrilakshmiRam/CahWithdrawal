import './index.css'

const DenominationItem = props => {
  const {itemDetails, getValue} = props
  const {value} = itemDetails

  const OnValueButton = () => {
    getValue(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={OnValueButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem