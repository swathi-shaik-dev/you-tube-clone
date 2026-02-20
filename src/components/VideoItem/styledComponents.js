import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import styled, {css} from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 15px;
  font-family: Roboto;
`
export const Image = styled.img`
  ${props => props.thumbnail && 'width: 100%; margin-bottom: 8px;'}
  ${props => props.channel && 'width:40px; height: 40px; margin-right: 10px;'}
`
export const ChannelConatiner = styled.div`
  display: flex;
`
export const ChannelDesc = styled.div`
  display: flex;
  flex-direction: column;
`
export const Text = styled.p`
  margin: 0 0 8px 0;
  ${props =>
    props.chTitle &&
    css`
      color: ${props.dark ? '#ffffff' : '#313131'};
      font-size: 15px;
      font-weight: 500;
    `}

  ${props =>
    props.chName &&
    css`
      color: ${props.dark ? '#909090' : '#606060'};
      font-size: 14px;
    `}
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const StyledBsDot = styled(BsDot)`
  color: ${props => (props.dark ? '#909090' : '#606060')};
  height: 5px;
  width: 5px;
  margin-left: 8px;
  margin-right: 8px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
