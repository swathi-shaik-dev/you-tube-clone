import {MdClose, MdSearch} from 'react-icons/md'

import styled from 'styled-components'

export const PageContainer = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: Roboto;
`

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;

  padding: 20px 20px 15px 30px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 36%;
  @media (max-width: 767px) {
    width: 70%;
  }
`
export const Image = styled.img`
  ${props =>
    props.$banner &&
    'width: 30%; margin-bottom: 10px; @media(min-width: 576px){width: 20%;}'}
  ${props =>
    props.$noResult && 'width:250px; height: 250px; margin-bottom: 10px;'}
`
export const Text = styled.p`
  ${props =>
    props.$banner &&
    'color: #231f20; font-size: 20px; margin-bottom: 15px; @media (max-width: 767px){font-size: 13px;}'}

  ${props =>
    props.$noResult &&
    'color: #424242; font-size: 20px; margin-bottom: 10px; text-align: center'}
`
export const CustomButton = styled.button`
  border: none;
  ${props =>
    props.$banner &&
    'align-self:flex-start; margin-top:20px; background:transparent; border: 1px solid #000000; color: #000000; font-size: 13px; padding: 8px 10px 8px 10px; @media (max-width: 767px){font-size: 9px; margin-top: 0px; padding: 5px;}'}

  ${props =>
    props.$close &&
    'border: none; outline: none; cursor: pointer; align-self: flex-start; background: none;'}
  ${props =>
    props.$search &&
    'border-left: 1px solid #cccccc; outline:none; background: transparent; color: #cccccc; height: 100%; width: 20%; padding: 5px 8px 5px 8px;'}

  ${props =>
    props.$noResult &&
    'background-color: #4f46e5; color: #ffffff; font-size: 15px; padding: 8px 10px 8px 10px; border-radius: 5px; border: none; outline: none; cursor: pointer'}
`
export const StyledMdClose = styled(MdClose)`
  height: 20px;
  width: 20px;
  color: #0f0f0f;
  @media (max-width: 767px) {
    height: 15px;
    width: 15px;
  }
`

export const StyledMdSearch = styled(MdSearch)`
  height: 18px;
  width: 18px;
  @media (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`

export const HomeContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.$dark ? '#181818' : '#f1f5f9')};
  font-family: Roboto;
  overflow-y: auto;
`
export const HomeVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  @media (max-width: 576px) {
    padding: 0px;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  height: 30px;
  border: 1px solid ${props => (props.$dark ? '#424242' : '#cccccc')};
  @media (max-width: 576px) {
    width: 90%;
    margin: 15px;
    align-self: center;
  }
  @media (min-width: 576px) {
    width: 75%;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
`
export const Input = styled.input`
  border: none;
  cursor: pointer;
  flex-grow: 1;
  outline: none;
  padding: 10px;
  color: ${props => (props.$dark ? '#ffffff' : '#181818')};
  font-size: 13px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
  background-color: ${props => (props.$dark ? '#181818' : '#ffffff')};
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 50vh;
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  width: 100%;
`
export const NoResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: ${props => (props.$dark ? '#0f0f0f' : '#f9f9f9')};
`
export const Heading = styled.h1`
  color: ${props => (props.$dark ? '#ffffff' : '#181818')};
  font-size: 30px;
  margin-bottom: 10px;
`
