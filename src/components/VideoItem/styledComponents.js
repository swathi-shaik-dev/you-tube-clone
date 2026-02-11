import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-right: 8px;
  margin-bottom: 15px;
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
  ${props =>
    !props.dark && props.chTitle ? 'color: #313131; font-size: 12px;' : ''}
  ${props =>
    props.dark && props.chTitle ? 'color: #ffffff; font-size: 12px;' : ''}
  ${props =>
    !props.dark && props.chName ? 'color: #606060; font-size: 12px;' : ''}
  ${props =>
    props.dark && props.chName ? 'color: #909090; font-size: 12px;' : ''}
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
