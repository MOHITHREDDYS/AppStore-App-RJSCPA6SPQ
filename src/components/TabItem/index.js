// Write your code here

import './index.css'

const TabItem = props => {
  const {tab, changeTab, isActive} = props
  const {tabId, displayText} = tab

  const onClickingTab = () => {
    changeTab(tabId)
  }

  const isTabActivated = isActive ? 'active' : ''

  return (
    <li>
      <button
        className={`${isTabActivated}`}
        type="button"
        onClick={onClickingTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
