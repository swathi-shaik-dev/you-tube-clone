import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GameItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 22%;
  margin-left: 5px;
  margin-bottom: 15px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const Image = styled.img`
  ${props =>
    props.game &&
    'height: 250px; width: 100%; margin-bottom: 10px; border-radius: 10px;'}
`
export const Text = styled.p`
  ${props =>
    props.dark && props.title
      ? 'color: #f9f9f9; font-size: 18px; font-weight: 500;'
      : null} 

  ${props =>
    !props.dark && props.title
      ? 'color: #0f0f0f; font-size: 18px; font-weight: 500;'
      : null}

  ${props => props.view && 'color: #606060; font-size: 18px;'}
`
