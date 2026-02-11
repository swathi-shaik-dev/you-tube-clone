import {NotFoundContainer, Image, Heading} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <Image
      alt="not found"
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
    />
    <Heading>Page Not Found</Heading>
    <Heading as="p">
      We are sorry, the page you requested could not be found.
    </Heading>
  </NotFoundContainer>
)

export default NotFound
