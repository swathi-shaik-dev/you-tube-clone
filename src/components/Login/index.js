import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import AppContext from '../../context/AppContext'
import {
  LoginContainer,
  LoginCard,
  Image,
  Input,
  Label,
  FormContainer,
  CheckboxConatiner,
  CustomButton,
  Text,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showError: false,
    passwordType: true,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({passwordType: !prevState.passwordType}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onSubmitDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg, showError, passwordType} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const watchLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer dark={isDarkTheme}>
              <LoginCard dark={isDarkTheme}>
                <Image logo alt="website logo" src={watchLogo} />
                <FormContainer onSubmit={this.onSubmitDetails}>
                  <Label dark={isDarkTheme} htmlFor="username">
                    USERNAME
                  </Label>
                  <Input
                    dark={isDarkTheme}
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                  <Label dark={isDarkTheme} htmlFor="password">
                    PASSWORD
                  </Label>
                  <Input
                    dark={isDarkTheme}
                    type={passwordType ? 'password' : 'text'}
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <CheckboxConatiner>
                    <Input
                      dark={isDarkTheme}
                      onChange={this.onShowPassword}
                      type="checkbox"
                      id="checkbox"
                      checkbox
                    />
                    <Label checkbox dark={isDarkTheme} htmlFor="checkbox">
                      Show Password
                    </Label>
                  </CheckboxConatiner>
                  <CustomButton type="submit">Login</CustomButton>
                  {showError && <Text error>*{errorMsg}</Text>}
                </FormContainer>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Login
