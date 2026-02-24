import AppContext from '../../context/AppContext'
import {GameItem, StyledLink, Image, Text} from './styledComponents'

const GameCard = props => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {gameCard} = props
      const {id, title, thumbnailUrl, viewCount} = gameCard

      return (
        <GameItem>
          <StyledLink to={`/videos/${id}`}>
            <Image $game alt="video thumbnail" src={thumbnailUrl} />
            <Text $dark={isDarkTheme} $title>
              {title}
            </Text>
            <Text $view>{viewCount} Watching Worldwide</Text>
          </StyledLink>
        </GameItem>
      )
    }}
  </AppContext.Consumer>
)

export default GameCard
