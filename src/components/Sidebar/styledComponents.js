import {NavLink} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  flex-shrink: 0;
  font-family: Roboto;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
`

export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 100%;
`

export const ListItem = styled.li`
  list-style-type: none;
`

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${props => (props.dark ? '#e2e8f0' : '#231f20')};
  font-size: 15px;
  &.active {
    background-color: ${props => (props.dark ? '#424242' : '#f1f5f9')};
    border-radius: 5px;
    font-weight: 600;
    color: ${props => (props.dark ? '#ffffff' : '#000000')};
  }
  text-decoration: none;
  padding: 10px;
  width: 100%;
`
export const StyledAiFillHome = styled(AiFillHome)`
  color: ${props => (props.dark ? ' #606060' : '#212121')};
  width: 20px;
  height: 20px;
  margin-right: 20px;
  ${StyledLink}.active & {
    color: #ff0000;
  }
`
export const StyledHiFire = styled(HiFire)`
  color: ${props => (props.dark ? ' #606060' : '#212121')};
  width: 20px;
  height: 20px;
  margin-right: 20px;
  ${StyledLink}.active & {
    color: #ff0000;
  }
`
export const StyledSiYoutubegaming = styled(SiYoutubegaming)`
  color: ${props => (props.dark ? ' #606060' : '#212121')};
  width: 20px;
  height: 20px;
  margin-right: 20px;
  ${StyledLink}.active & {
    color: #ff0000;
  }
`
export const StyledMdOutlinePlaylistAdd = styled(RiMenuAddFill)`
  color: ${props => (props.dark ? ' #606060' : '#212121')};
  width: 20px;
  height: 20px;
  margin-right: 20px;
  ${StyledLink}.active & {
    color: #ff0000;
  }
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const Text = styled.p`
  color: ${props => (props.dark ? '#f8fafc' : '#1e293b')};
  font-size: ${props => props.title && '15px'};
  font-size: ${props => props.desc && '15px'};
  font-weight: 500;
`
export const LogoContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
`
export const Image = styled.img`
  ${props => props.social && 'width: 20px; height: 20px; margin-right: 10px;'}
`
