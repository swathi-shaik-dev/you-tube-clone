import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'
import {BsDot} from 'react-icons/bs'

import styled from 'styled-components'

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: Roboto;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: ${props => (props.$dark ? '#0f0f0f' : '#f9f9f9')};
`
export const NoResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: ${props => (props.$dark ? '#0f0f0f' : '#f9f9f9')};
`
export const Image = styled.img`
  ${({$noResult}) =>
    $noResult &&
    `
      width: 250px;
      height: 250px;
      margin-bottom: 10px;
    `}

  ${props => props.$profile && 'width: 40px; height: 40px; margin-right: 10px;'}
`
export const Heading = styled.h1`
  color: ${props => (props.$dark ? '#ffffff' : '#181818')};
  font-size: 30px;
  margin-bottom: 10px;
`

export const CustomButton = styled.button`
  padding: 0px;
  display: flex;
  align-items: center;
  ${props =>
    props.$noResult &&
    'background-color: #4f46e5; color: #ffffff; font-size: 15px; padding: 8px 10px 8px 10px; border-radius: 5px; border: none; outline: none; cursor: pointer'}

  ${({$icon, $active}) =>
    $icon &&
    `border: none;
     background: transparent;
     font-size: 15px;
     margin-right: 20px;
     cursor: pointer;
     outline: none;
     font-weight: ${$active ? 'bold' : 'normal'};
     color: ${$active ? '#3b82f6' : '#64748b'};
    `}
`
export const VideoDetailsContainer = styled.div`
  background-color: ${props => (props.$dark ? '#0f0f0f' : '#f9f9f9')};
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 576px) {
    padding: 0px;
  }
`

export const Wrapper = styled.div`
  margin-bottom: 10px;
  @media (max-width: 576px) {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
  }
`

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;

  iframe,
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const Text = styled.p`
  margin: 0px;
  ${props =>
    props.$noResult &&
    'color: #424242; font-size: 20px; margin-bottom: 10px; text-align: center;'}

  ${({$title, $dark}) =>
    $title &&
    `
      font-size: 18px;
      font-weight: 500;
      color: ${$dark ? '#f9f9f9' : '#181818'};
      @media(max-width: 576px){
        padding: 0 15px 0 15px;
      }
    `}

  
  ${props => props.$view && 'color: #64748b; font-size: 16px;'}
  ${props =>
    props.$views && 'margin-bottom: 20px; color: #64748b; font-size: 13px;'}

  ${({$profile,$dark}) => 
    $profile && 
    `
      margin-bottom: 5px; 
      font-size: 15px;
      font-weight: 500;
      color: ${$dark ? '#f9f9f9' : '#0f0f0f'};
    `}
`
export const ViewsLikeContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 15px;
  }
`

export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
export const StyledBsDot = styled(BsDot)`
  color: #64748b;
  height: 25px;
  width: 25px;
`
export const StyledBiLike = styled(BiLike)`
  height: 23px;
  width: 23px;
  margin-right: 5px;
  color: ${props => (props.$active ? '#3b82f6' : '#64748b')};
  ${props => props.$active && 'font-weight: bold;'}
`
export const StyledBiDislike = styled(BiDislike)`
  height: 23px;
  width: 23px;
  margin-right: 5px;
  color: ${props => (props.$active ? '#3b82f6' : '#64748b')};
  ${props => props.$active && 'font-weight: bold;'}
`
export const StyledMdOutlinePlaylistAdd = styled(RiMenuAddFill)`
  height: 23px;
  width: 23px;
  margin-right: 5px;
  color: ${props => (props.$active ? '#3b82f6' : '#64748b')};
  ${props => props.$active && 'font-weight: bold;'}
`
export const StyledHr = styled.hr`
  border: 1px solid #64748b;
  width: 100%;
`
export const DescContainer = styled.div`
  display: flex;
  padding: 15px;
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
`
