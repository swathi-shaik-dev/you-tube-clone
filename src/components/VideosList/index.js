import {formatDistanceToNow} from 'date-fns'

import AppContext from '../../context/AppContext'

import {
  Image,
  ItemCard,
  StyledBsDot,
  StyledLink,
  Content,
  Text,
  ViewsContainer,
  ProfileImage,
} from './styledComponents'

const VideosList = props => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videoCard} = props
      const {id, title, thumbnailUrl, channel} = videoCard
      const {viewCount, publishedAt} = videoCard

      const duration = formatDistanceToNow(new Date(publishedAt))

      return (
        <ItemCard>
          <StyledLink to={`/videos/${id}`}>
            <Image $video alt="video thumbnail" src={thumbnailUrl} />
            <ProfileImage>
              <Image
                $profile
                alt={channel.name}
                src={channel.profile_image_url}
              />
              <Content>
                <Text $dark={isDarkTheme} $title>
                  {title}
                </Text>
                <Text $channel>{channel.name}</Text>
                <ViewsContainer>
                  <Text $channel>{viewCount} views</Text>
                  <StyledBsDot />
                  <Text $channel>{duration}</Text>
                </ViewsContainer>
              </Content>
            </ProfileImage>
          </StyledLink>
        </ItemCard>
      )
    }}
  </AppContext.Consumer>
)

export default VideosList
