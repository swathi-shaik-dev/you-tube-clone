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
  StyledHamburgerMenu,
  MenuContainer,
  StyledNavLink,
} from './styledComponents'
import LogoutBtn from '../LogoutBtn'

const Header = () => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme, showMenu, onShowMenu, avatar} = value

      const onClickChangeTheme = () => changeTheme()

      const onClickShowMenu = () => onShowMenu()

      const watchLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <>
          <Navbar $dark={isDarkTheme}>
            <StyledLink to="/">
              <Image $logo alt="website logo" src={watchLogo} />
            </StyledLink>
            <IconsContainer>
              <CustomButton
                data-testid="theme"
                onClick={onClickChangeTheme}
                type="button"
              >
                {isDarkTheme ? <StyledMdOutlineWbSunny /> : <StyledFaMoon />}
              </CustomButton>
              <StyledHamburgerMenu
                onClick={onClickShowMenu}
                $dark={isDarkTheme}
                $showMenu={showMenu}
              />
              <Image alt="profile" src={avatar} />
              <LogoutBtn />
            </IconsContainer>
          </Navbar>
          {showMenu && (
            <MenuContainer $dark={isDarkTheme}>
              <StyledNavLink $dark={isDarkTheme} to="/" exact>
                Home
              </StyledNavLink>

              <StyledNavLink $dark={isDarkTheme} to="/trending">
                Trending
              </StyledNavLink>

              <StyledNavLink $dark={isDarkTheme} to="/gaming">
                Gaming
              </StyledNavLink>

              <StyledNavLink $dark={isDarkTheme} to="/saved-videos">
                Saved Videos
              </StyledNavLink>
            </MenuContainer>
          )}
        </>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(Header)
