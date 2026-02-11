import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import AppContext from '../../context/AppContext'
import {
  CustomButton,
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
              <CustomButton outline dark={isDarkTheme} type="button">
                Logout
              </CustomButton>
            }
            className="popup-content"
          >
            {close => (
              <LogoutConatiner dark={isDarkTheme}>
                <Text dark={isDarkTheme}>
                  Are you sure, you want to logout?
                </Text>
                <BtnContainer>
                  <CustomButton
                    outline
                    dark={isDarkTheme}
                    type="button"
                    onClick={() => close()}
                  >
                    Cancel
                  </CustomButton>
                  <CustomButton logout type="button" onClick={onclickLogout}>
                    Confirm
                  </CustomButton>
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
