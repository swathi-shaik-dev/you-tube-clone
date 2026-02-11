import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import AppContext from '../../context/AppContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideosList from '../VideosList'
import {
  LoaderContainer,
  TrendingContainer,
  IconContainer,
  Image,
  Navbar,
  NoResults,
  StyledHiFire,
  VideoContainer,
  Heading,
  Text,
  Container,
  CustomButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideos: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  onClickRetry = () => {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
        channel: each.channel,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))

      this.setState({
        trendingVideos: fetchedVideos,
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
        const {trendingVideos} = this.state

        return (
          <TrendingContainer data-testid="trending" dark={isDarkTheme}>
            <Navbar dark={isDarkTheme}>
              <IconContainer dark={isDarkTheme}>
                <StyledHiFire />
              </IconContainer>
              <Heading dark={isDarkTheme}>Trending</Heading>
            </Navbar>
            <VideoContainer dark={isDarkTheme}>
              {trendingVideos.map(each => (
                <VideosList key={each.id} videoCard={each} />
              ))}
            </VideoContainer>
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
          <NoResults dark={isDarkTheme}>
            <Image noResult alt="failure view" src={failureImg} />
            <Heading dark={isDarkTheme} noResult>
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

  renderTrendingView = () => {
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
      <>
        <Header />
        <Container>
          <Sidebar />
          {this.renderTrendingView()}
        </Container>
      </>
    )
  }
}

export default Trending
