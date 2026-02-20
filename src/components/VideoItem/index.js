import {formatDistanceToNow} from 'date-fns'
import AppContext from '../../context/AppContext'

import {
  ListItem,
  StyledBsDot,
  StyledLink,
  Text,
  Image,
  ChannelConatiner,
  ChannelDesc,
  ViewsContainer,
} from './styledComponents'

const VideoItem = props => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {videoItem} = props
      const {
        id,
        title,
        thumbnailUrl,
        channel,
        viewCount,
        publishedAt,
      } = videoItem

      const formattedChannel = {
        name: channel.name,
        profileImageUrl: channel.profile_image_url,
      }

      const duration = formatDistanceToNow(new Date(publishedAt))

      return (
        <ListItem>
          <StyledLink to={`/videos/${id}`}>
            <Image thumbnail alt="video thumbnail" src={thumbnailUrl} />
            <ChannelConatiner>
              <Image
                channel
                alt="channel logo"
                src={formattedChannel.profileImageUrl}
              />
              <ChannelDesc>
                <Text $dark={isDarkTheme ? 'dark' : null} chTitle>
                  {title}
                </Text>
                <Text $dark={isDarkTheme ? 'dark' : null} chName>
                  {formattedChannel.name}
                </Text>
                <ViewsContainer>
                  <Text $dark={isDarkTheme ? 'dark' : null} chName>
                    {viewCount} views
                  </Text>
                  <StyledBsDot />
                  <Text $dark={isDarkTheme ? 'dark' : null} chName>
                    {duration}
                  </Text>
                </ViewsContainer>
              </ChannelDesc>
            </ChannelConatiner>
          </StyledLink>
        </ListItem>
      )
    }}
  </AppContext.Consumer>
)

export default VideoItem
