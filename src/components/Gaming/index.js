import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import AppContext from '../../context/AppContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import GameCard from '../GameCard'
import {
  PageContainer,
  LoaderContainer,
  NoResults,
  GameContainer,
  Heading,
  StyledSiYoutubegaming,
  TrendingContainer,
  Navbar,
  IconContainer,
  Image,
  CustomButton,
  Text,
  Container,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideos: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedVideos = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({
        gamingVideos: fetchedVideos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <LoaderContainer dark={isDarkTheme} data-testid="loader">
            <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderSuccessView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {gamingVideos} = this.state

        return (
          <TrendingContainer data-testid="gaming" dark={isDarkTheme}>
            <Navbar dark={isDarkTheme ? 'dark' : null}>
              <IconContainer dark={isDarkTheme ? 'dark' : null}>
                <StyledSiYoutubegaming />
              </IconContainer>
              <Heading dark={isDarkTheme ? 'dark' : null}>Gaming</Heading>
            </Navbar>
            <GameContainer dark={isDarkTheme ? 'dark' : null}>
              {gamingVideos.map(each => (
                <GameCard key={each.id} gameCard={each} />
              ))}
            </GameContainer>
          </TrendingContainer>
        )
      }}
    </AppContext.Consumer>
  )

  renderFailureView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <NoResults dark={isDarkTheme ? 'dark' : null}>
            <Image noResult alt="failure view" src={failureImg} />
            <Heading dark={isDarkTheme ? 'dark' : null} noResult>
              Oops! Something Went Wrong
            </Heading>
            <Text noResult>
              We are having some trouble completing your request. Please try
              again.
            </Text>
            <CustomButton onClick={this.onClickRetry} type="button" noResult>
              Retry
            </CustomButton>
          </NoResults>
        )
      }}
    </AppContext.Consumer>
  )

  renderGamingView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <PageContainer>
        <Header />
        <Container>
          <Sidebar />
          {this.renderGamingView()}
        </Container>
      </PageContainer>
    )
  }
}

export default Gaming
