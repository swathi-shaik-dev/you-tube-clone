import React from 'react'

const AppContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  savedVideos: [],
  addToSavedVideos: () => {},
  removeVideoFromSavedVideos: () => {},
})

export default AppContext
