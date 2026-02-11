import {RiMenuAddFill} from 'react-icons/ri'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: Roboto;
`
export const NoResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`
export const Image = styled.img`
  ${props =>
    props.noResult && 'width:250px; height: 250px; margin-bottom: 10px;'}
`
export const Heading = styled.h1`
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  font-size: 30px;
  margin-bottom: 10px;
`
export const Text = styled.p`
  ${props =>
    props.noResult &&
    'color: #424242; font-size: 20px; margin-bottom: 10px; text-align: center'}
`
export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`
export const Navbar = styled.nav`
  width: 100%;
  background-color: ${props => (props.dark ? '#231f20' : '#f1f5f9')};
  padding: 20px;
`
export const IconContainer = styled.div`
  border-radius: 100%;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? ' #0f0f0f' : '#f9f9f9')};
`
export const StyledMdOutlinePlaylistAdd = styled(RiMenuAddFill)`
  color: #ff0000;
  height: 25px;
  width: 25px;
`
export const VideoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  padding: 20px;
`
