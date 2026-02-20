import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import AppContext from '../../context/AppContext'
import {
  LogoutButton,
  BtnContainer,
  LogoutConatiner,
  Text,
} from './styledComponents'

const LogoutBtn = props => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const onclickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <>
          <Popup
            modal
            trigger={
              <LogoutButton logout $dark={isDarkTheme} type="button">
                Logout
              </LogoutButton>
            }
            className="popup-content"
          >
            {close => (
              <LogoutConatiner dark={isDarkTheme}>
                <Text dark={isDarkTheme}>
                  Are you sure, you want to logout?
                </Text>
                <BtnContainer>
                  <LogoutButton
                    cancel
                    $dark={isDarkTheme}
                    type="button"
                    onClick={() => close()}
                  >
                    Cancel
                  </LogoutButton>
                  <LogoutButton confirm type="button" onClick={onclickLogout}>
                    Confirm
                  </LogoutButton>
                </BtnContainer>
              </LogoutConatiner>
            )}
          </Popup>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(LogoutBtn)
