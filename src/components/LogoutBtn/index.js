import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import AppContext from '../../context/AppContext'
import {
  StyledIoLogOut,
  StyledSmallPopup,
  StyledMediumPopup,
  LogoutButton,
  BtnContainer,
  LogoutConatiner,
  Text,
} from './styledComponents'

const LogoutBtn = props => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme, resetAvatar} = value

      const onclickLogout = () => {
        const {history} = props
        localStorage.removeItem('avatar')
        resetAvatar()
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <>
          <StyledSmallPopup
            modal
            trigger={
              <span>
                <StyledIoLogOut $dark={isDarkTheme} />
              </span>
            }
            className="popup-content"
          >
            {close => (
              <LogoutConatiner $dark={isDarkTheme}>
                <Text $dark={isDarkTheme}>
                  Are you sure, you want to logout?
                </Text>
                <BtnContainer>
                  <LogoutButton
                    $cancel
                    $dark={isDarkTheme}
                    type="button"
                    onClick={() => close()}
                  >
                    Cancel
                  </LogoutButton>
                  <LogoutButton $confirm type="button" onClick={onclickLogout}>
                    Confirm
                  </LogoutButton>
                </BtnContainer>
              </LogoutConatiner>
            )}
          </StyledSmallPopup>
          <StyledMediumPopup
            modal
            trigger={
              <LogoutButton $logout $dark={isDarkTheme} type="button">
                Logout
              </LogoutButton>
            }
            className="popup-content"
          >
            {close => (
              <LogoutConatiner $dark={isDarkTheme}>
                <Text $dark={isDarkTheme}>
                  Are you sure, you want to logout?
                </Text>
                <BtnContainer>
                  <LogoutButton
                    $cancel
                    $dark={isDarkTheme}
                    type="button"
                    onClick={() => close()}
                  >
                    Cancel
                  </LogoutButton>
                  <LogoutButton $confirm type="button" onClick={onclickLogout}>
                    Confirm
                  </LogoutButton>
                </BtnContainer>
              </LogoutConatiner>
            )}
          </StyledMediumPopup>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(LogoutBtn)
