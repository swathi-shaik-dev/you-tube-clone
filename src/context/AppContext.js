import React from 'react'

const AppContext = React.createContext({
  isDarkTheme: false,
  avatar: '',
  generateAvatar: () => {},
  resetAvatar: () => {},
  showMenu: false,
  onShowMenu: () => {},
  changeTheme: () => {},
  savedVideos: [],
  addToSavedVideos: () => {},
  removeVideoFromSavedVideos: () => {},
})

export default AppContext
