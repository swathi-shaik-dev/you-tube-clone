import {MdClose, MdSearch} from 'react-icons/md'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: Roboto;
`

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  height: 250px;
  background-size: cover;
  width: 100%;
  padding: 20px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`
export const Image = styled.img`
  ${props => props.banner && 'width: 35px; margin-bottom: 10px;'}
  ${props =>
    props.noResult && 'width:250px; height: 250px; margin-bottom: 10px;'}
`
export const Text = styled.p`
  ${props =>
    props.banner && 'color: #231f20; font-size: 25px; margin-bottom: 15px;'}

  ${props =>
    props.noResult &&
    'color: #424242; font-size: 20px; margin-bottom: 10px; text-align: center'}
`
export const CustomButton = styled.button`
  ${props =>
    props.banner &&
    'border: 1px solid #0f0f0f; color: #0f0f0f; font-size: 25px; padding: 8px 10px 8px 10px;'}
  ${props =>
    props.close &&
    'border: none; outline: none; cursor: pointer; height: 20px; width: 20px;'}
  ${props =>
    props.search &&
    'border: 1px solid #383838; background: transparent; color: #383838; height: 25px; width: 80px; text-align: center;'}

  ${props =>
    props.noResult &&
    'background-color: #4f46e5; color: #ffffff; font-size: 15px; padding: 8px 10px 8px 10px; border-radius: 5px; border: none; outline: none; cursor: pointer'}
`
export const StyledMdClose = styled(MdClose)`
  height: 20px;
  width: 20px;
  color: #0f0f0f;
`

export const StyledMdSearch = styled(MdSearch)`
  height: 20px;
  width: 20px; 
`

export const HomeContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  font-family: Roboto;
`
export const HomeVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`

export const SearchContainer = styled.div`
  display: flex;
  width: 40%;
`
export const Input = styled.input`
  border: 1px solid #383838;
  flex-grow: 1;
  height: 25px;
  padding: 10px;
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  font-size: 15px;
  background-color: ${props => (props.dark ? '#181818' : '#ffffff')};
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
`
export const NoResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`
export const Heading = styled.h1`
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  font-size: 30px;
  margin-bottom: 10px;
`
