import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GameItem = styled.li`
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    width: 46%;
    margin-right: 10px;
    margin-bottom: 23px;
  }
  @media (width >= 576px) {
    width: 30%;
    margin-right: 14px;
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    margin-right: 20px;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`
export const Image = styled.img`
  ${props =>
    props.$game &&
    'width: 100%; margin-bottom: 8px; border-radius: 10px; @media(max-width:576px){height: 200px;} @media(width >=576px){height: 250px;} @media(min-width: 768px){height: 300px;}'}
`
export const Text = styled.p`
  margin: 3px;
  ${props =>
    props.$dark && props.$title
      ? 'color: #f9f9f9; font-size: 15px; font-weight: 500;'
      : null}

  ${props =>
    !props.$dark && props.$title
      ? 'color: #0f0f0f; font-size: 15px; font-weight: 500;'
      : null}

  ${props => props.$view && 'color: #606060; font-size: 13px;'}
`
