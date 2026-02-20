import AppContext from '../../context/AppContext'
import VideosList from '../VideosList'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  PageContainer,
  Navbar,
  StyledMdOutlinePlaylistAdd,
  Container,
  IconContainer,
  VideoContainer,
  Image,
  Heading,
  Text,
  TrendingContainer,
  NoResults,
} from './styledComponents'

const SavedVideos = () => (
  <AppContext.Consumer>
    {value => {
      const {savedVideos, isDarkTheme} = value
      const isEmpty = savedVideos.length === 0

      const renderNoSavedVideos = () => (
        <NoResults dark={isDarkTheme}>
          <Image
            noResult
            alt="no saved videos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          />
          <Heading dark={isDarkTheme} noResult>
            No Saved Videos found
          </Heading>
          <Text noResult>You can save your videos while watching them.</Text>
        </NoResults>
      )

      const renderSavedVideos = () => (
        <TrendingContainer data-testid="savedVideos" dark={isDarkTheme}>
          <Navbar dark={isDarkTheme}>
            <IconContainer dark={isDarkTheme}>
              <StyledMdOutlinePlaylistAdd />
            </IconContainer>
            <Heading dark={isDarkTheme}>Saved Videos</Heading>
          </Navbar>
          <VideoContainer dark={isDarkTheme}>
            {savedVideos.map(each => (
              <VideosList key={each.id} videoCard={each} />
            ))}
          </VideoContainer>
        </TrendingContainer>
      )

      return (
        <PageContainer>
          <Header />
          <Container>
            <Sidebar />
            {isEmpty ? renderNoSavedVideos() : renderSavedVideos()}
          </Container>
        </PageContainer>
      )
    }}
  </AppContext.Consumer>
)

export default SavedVideos
