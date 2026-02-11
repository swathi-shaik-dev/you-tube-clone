import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import Sidebar from '../Sidebar'
import AppContext from '../../context/AppContext'
import {
  LoaderContainer,
  ChannelContainer,
  Container,
  CustomButton,
  StyledBiDislike,
  StyledBiLike,
  StyledBsDot,
  StyledHr,
  StyledMdOutlinePlaylistAdd,
  VideoContainer,
  VideoDetailsContainer,
  ViewsContainer,
  ViewsLikeContainer,
  Text,
  Heading,
  DescContainer,
  NoResults,
  Image,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    isLiked: false,
    isDisliked: false,
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedVideo = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: data.video_details.channel,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: fetchedVideo,
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
        const {
          isDarkTheme,
          addToSavedVideos,
          removeVideoFromSavedVideos,
          savedVideos,
        } = value
        const {videoDetails, isLiked, isDisliked} = this.state

        const {title, videoUrl, channel, viewCount, publishedAt, description} =
          videoDetails

        const isSaved = savedVideos.some(each => each.id === videoDetails.id)

        const onClickSave = () => {
          if (isSaved) {
            removeVideoFromSavedVideos(videoDetails.id)
          } else {
            addToSavedVideos(videoDetails)
          }
        }

        const formattedChannel = {
          name: channel.name,
          profileImageUrl: channel.profile_image_url,
          subscriberCount: channel.subscriber_count,
        }

        const duration = formatDistanceToNow(new Date(publishedAt))

        return (
          <VideoDetailsContainer
            data-testid="videoItemDetails"
            dark={isDarkTheme}
          >
            <VideoContainer>
              <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
            </VideoContainer>
            <Text dark={isDarkTheme} title>
              {title}
            </Text>
            <ViewsLikeContainer>
              <ViewsContainer>
                <Text view>{viewCount} views</Text>
                <StyledBsDot />
                <Text view>{duration}</Text>
              </ViewsContainer>
              <ViewsContainer>
                <CustomButton
                  icon
                  active={isLiked}
                  type="button"
                  onClick={this.onClickLike}
                >
                  <StyledBiLike active={isLiked} /> Like
                </CustomButton>
                <CustomButton
                  icon
                  active={isDisliked}
                  type="button"
                  onClick={this.onClickDislike}
                >
                  <StyledBiDislike active={isDisliked} /> Dislike
                </CustomButton>
                <CustomButton
                  icon
                  type="button"
                  active={isSaved}
                  onClick={onClickSave}
                >
                  <StyledMdOutlinePlaylistAdd active={isSaved} />
                  {isSaved ? 'Saved' : 'Save'}
                </CustomButton>
              </ViewsContainer>
            </ViewsLikeContainer>
            <StyledHr />
            <DescContainer>
              <Image
                profile
                alt="channel logo"
                src={formattedChannel.profileImageUrl}
              />
              <ChannelContainer>
                <Text dark={isDarkTheme} profile>
                  {formattedChannel.name}
                </Text>
                <Text view>{formattedChannel.subscriberCount} subscribers</Text>
                <Text dark={isDarkTheme} profile>
                  {description}
                </Text>
              </ChannelContainer>
            </DescContainer>
          </VideoDetailsContainer>
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

  renderVideoItemDetails = () => {
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
          {this.renderVideoItemDetails()}
        </Container>
      </>
    )
  }
}

export default VideoItemDetails
