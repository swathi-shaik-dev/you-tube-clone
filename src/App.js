import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import AppContext from './context/AppContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false, savedVideos: [], showMenu: false, avatar: ''}

  componentDidMount() {
    const storedAvatar = localStorage.getItem('avatar')
    if (storedAvatar) {
      this.setState({avatar: storedAvatar})
    }
  }

  getRandomAvatar = () => {
    const gender = Math.random() > 0.5 ? 'women' : 'men'
    const num = Math.floor(Math.random() * 90)
    return `https://randomuser.me/api/portraits/${gender}/${num}.jpg`
  }

  generateAvatar = () => {
    const newAvatar = this.getRandomAvatar()
    localStorage.setItem('avatar', newAvatar)
    this.setState({avatar: newAvatar})
  }

  resetAvatar = () => {
    this.setState({avatar: ''})
  }

  onShowMenu = () => {
    this.setState(prevState => ({showMenu: !prevState.showMenu}))
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addToSavedVideos = video => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, video],
    }))
  }

  removeVideoFromSavedVideos = id => {
    const {savedVideos} = this.state
    const filteredVideos = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: filteredVideos})
  }

  render() {
    const {isDarkTheme, savedVideos, showMenu, avatar} = this.state
    console.log(avatar)
    return (
      <AppContext.Provider
        value={{
          isDarkTheme,
          avatar,
          generateAvatar: this.generateAvatar,
          resetAvatar: this.resetAvatar,
          showMenu,
          onShowMenu: this.onShowMenu,
          changeTheme: this.onChangeTheme,
          savedVideos,
          addToSavedVideos: this.addToSavedVideos,
          removeVideoFromSavedVideos: this.removeVideoFromSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
