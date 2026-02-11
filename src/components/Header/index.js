import {withRouter} from 'react-router-dom'
import AppContext from '../../context/AppContext'
import {
  Navbar,
  StyledLink,
  Image,
  IconsContainer,
  CustomButton,
  StyledFaMoon,
  StyledMdOutlineWbSunny,
} from './styledComponents'
import LogoutBtn from '../LogoutBtn'

const Header = () => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value

      const onClickChangeTheme = () => changeTheme()

      const watchLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <Navbar dark={isDarkTheme ? 'dark' : null}>
          <StyledLink to="/">
            <Image alt="website logo" src={watchLogo} />
          </StyledLink>
          <IconsContainer>
            <CustomButton
              data-testid="theme"
              onClick={onClickChangeTheme}
              type="button"
            >
              {isDarkTheme ? <StyledMdOutlineWbSunny /> : <StyledFaMoon />}
            </CustomButton>
            <Image
              alt="profile"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            />
            <LogoutBtn />
          </IconsContainer>
        </Navbar>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(Header)
