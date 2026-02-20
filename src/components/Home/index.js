import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import AppContext from '../../context/AppContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'
import {
  PageContainer,
  LoaderContainer,
  VideosContainer,
  NoResults,
  Image,
  Heading,
  Text,
  CustomButton,
  Container,
  HomeContainer,
  Banner,
  Content,
  StyledMdClose,
  HomeVideosContainer,
  SearchContainer,
  Input,
  StyledMdSearch,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    showBanner: true,
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    homeVideos: [],
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchVideos = event => {
    event.preventDefault()
    const {homeVideos, searchInput} = this.state
    const filteredVideos = homeVideos.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({homeVideos: filteredVideos}, this.getHomeVideos)
  }

  onClickRetry = () => {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        homeVideos: fetchedVideos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderNoSearchResults = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NoResults dark={isDarkTheme}>
            <Image
              noResult
              alt="no videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            />
            <Heading dark={isDarkTheme ? 'dark' : null} noResult>
              No Search results found
            </Heading>
            <Text noResult>
              Try different key words or remove search filter
            </Text>
            <CustomButton type="button" noResult>
              Retry
            </CustomButton>
          </NoResults>
        )
      }}
    </AppContext.Consumer>
  )

  renderSuccessView = () => {
    const {homeVideos} = this.state
    const isEmpty = homeVideos.length === 0

    if (isEmpty === true) {
      return this.renderNoSearchResults()
    }
    return (
      <VideosContainer>
        {homeVideos.map(each => (
          <VideoItem key={each.id} videoItem={each} />
        ))}
      </VideosContainer>
    )
  }

  renderFailureView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <NoResults>
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

  renderHomeView = () => {
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
    const {showBanner, searchInput} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <PageContainer>
              <Header />
              <Container>
                <Sidebar />
                <HomeContainer
                  data-testid="home"
                  dark={isDarkTheme ? 'dark' : null}
                >
                  {showBanner && (
                    <Banner data-testid="banner">
                      <Content>
                        <Image
                          banner
                          alt="nxt watch logo"
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        />
                        <Text banner>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </Text>
                        <CustomButton type="button" banner>
                          GET IT NOW
                        </CustomButton>
                      </Content>
                      <CustomButton
                        close
                        onClick={this.onCloseBanner}
                        type="button"
                        data-testid="close"
                      >
                        <StyledMdClose />
                      </CustomButton>
                    </Banner>
                  )}
                  <HomeVideosContainer>
                    <SearchContainer>
                      <Input
                        dark={isDarkTheme ? 'dark' : null}
                        search
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onChangeInput}
                      />
                      <CustomButton
                        data-testid="searchButton"
                        search
                        type="button"
                        onClick={this.onSearchVideos}
                      >
                        <StyledMdSearch />
                      </CustomButton>
                    </SearchContainer>
                    {this.renderHomeView()}
                  </HomeVideosContainer>
                </HomeContainer>
              </Container>
            </PageContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
