import AppContext from '../../context/AppContext'

import {
  StyledSiYoutubegaming,
  SideBarContainer,
  StyledAiFillHome,
  StyledHiFire,
  StyledLink,
  StyledMdOutlinePlaylistAdd,
  LinkContainer,
  LogoContainer,
  ContactContainer,
  Text,
  ListItem,
  Image,
} from './styledComponents'

const Sidebar = () => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <SideBarContainer dark={isDarkTheme}>
          <LinkContainer>
            <ListItem key="home">
              <StyledLink dark={isDarkTheme} to="/" exact>
                <StyledAiFillHome dark={isDarkTheme} />
                Home
              </StyledLink>
            </ListItem>
            <ListItem key="trend">
              <StyledLink dark={isDarkTheme} to="/trending">
                <StyledHiFire dark={isDarkTheme} />
                Trending
              </StyledLink>
            </ListItem>
            <ListItem key="game">
              <StyledLink dark={isDarkTheme} to="/gaming">
                <StyledSiYoutubegaming dark={isDarkTheme} />
                Gaming
              </StyledLink>
            </ListItem>
            <ListItem key="save">
              <StyledLink dark={isDarkTheme} to="/saved-videos">
                <StyledMdOutlinePlaylistAdd dark={isDarkTheme} />
                Saved Videos
              </StyledLink>
            </ListItem>
          </LinkContainer>
          <ContactContainer>
            <Text dark={isDarkTheme} title>
              CONTACT US
            </Text>
            <LogoContainer>
              <Image
                social
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <Image
                social
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <Image
                social
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
            </LogoContainer>
            <Text dark={isDarkTheme} desc>
              Enjoy! Now to see your channels and recommendations!
            </Text>
          </ContactContainer>
        </SideBarContainer>
      )
    }}
  </AppContext.Consumer>
)

export default Sidebar
