import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'
import {BsDot} from 'react-icons/bs'

import styled from 'styled-components'

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
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
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
    props.noResult && 'width: 250px; height: 250px; margin-bottom: 10px;'}

  ${props => props.profile && 'width: 40px; height: 40px; margin-right: 10px;'}
`
export const Heading = styled.h1`
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  font-size: 30px;
  margin-bottom: 10px;
`

export const CustomButton = styled.button`
  ${props =>
    props.noResult &&
    'background-color: #4f46e5; color: #ffffff; font-size: 15px; padding: 8px 10px 8px 10px; border-radius: 5px; border: none; outline: none; cursor: pointer'}

  ${props =>
    props.icon && props.active
      ? 'border: none; background: transparent; color: #2563eb; font-size: 13px; margin-right: 8px; cursor: pointer; outline: none;'
      : null}

  ${props =>
    props.icon && !props.active
      ? 'border: none; background: transparent; color: #64748b; font-size: 13px; margin-right: 8px; cursor: pointer; outline: none;'
      : null}
`
export const VideoDetailsContainer = styled.div`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const VideoContainer = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 15px;
  flex-grow: 1;
`

export const Text = styled.p`
${props =>
  props.noResult &&
  'color: #424242; font-size: 20px; margin-bottom: 10px; text-align: center;'}

${props =>
  props.dark && props.title
    ? 'color: #f9f9f9; font-size: 15px; font-weight: 500;'
    : null}

${props =>
  !props.dark && props.title
    ? 'color: #181818; font-size: 15px; font-weight: 500;'
    : null}

${props => props.view && 'color: #606060; font-size: 13px;'}

${props =>
  props.profile && props.dark
    ? 'color: #f9f9f9; font-size: 13px; font-weight: 500;'
    : null}

${props =>
  props.profile && !props.dark
    ? 'color: #0f0f0f; font-size: 13px; font-weight: 500;'
    : null}
`
export const ViewsLikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 15px;
`

export const ViewsContainer = styled.div`
  display: flex;
  align-item: center;
`
export const StyledBsDot = styled(BsDot)`
  color: #606060;
  height: 5px;
  width: 5px;
  margin-left: 8px;
  margin-right: 8px;
`
export const StyledBiLike = styled(BiLike)`
  height: 15px;
  width: 15px;
  margin-right: 5px;
  color: ${props => (props.active ? '#3b82f6' : ' #606060')};
`
export const StyledBiDislike = styled(BiDislike)`
  height: 15px;
  width: 15px;
  margin-right: 5px;
  color: ${props => (props.active ? '#3b82f6' : ' #606060')};
`
export const StyledMdOutlinePlaylistAdd = styled(RiMenuAddFill)`
  height: 15px;
  width: 15px;
  margin-right: 5px;
  color: ${props => (props.active ? '#3b82f6' : ' #606060')} ;
`
export const StyledHr = styled.hr`
  border: 1px solid #606060;
  width: 100%;
`
export const DescContainer = styled.div`
  margin-top: 15px;
  display: flex;
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
`
