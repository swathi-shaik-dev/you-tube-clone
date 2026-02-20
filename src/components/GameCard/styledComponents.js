import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GameItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 23%;
  margin-left: 20px;
  margin-bottom: 35px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const Image = styled.img`
  ${props =>
    props.game &&
    'height: 350px; width: 100%; margin-bottom: 8px; border-radius: 10px;'}
`
export const Text = styled.p`
  margin: 3px;
  ${props =>
    props.dark && props.title
      ? 'color: #f9f9f9; font-size: 15px; font-weight: 500;'
      : null}

  ${props =>
    !props.dark && props.title
      ? 'color: #0f0f0f; font-size: 15px; font-weight: 500;'
      : null}

  ${props => props.view && 'color: #606060; font-size: 13px;'}
`
