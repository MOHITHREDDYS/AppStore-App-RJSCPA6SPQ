// Write your code here

import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app

  return (
    <li className="app">
      <img src={imageUrl} alt={appName} className="app_image" />
      <p className="app_name">{appName}</p>
    </li>
  )
}

export default AppItem
