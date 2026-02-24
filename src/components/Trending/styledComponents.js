import {HiFire} from 'react-icons/hi'

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
  ${props =>
    props.$noResult && 'width:250px; height: 250px; margin-bottom: 10px;'}
`
export const Heading = styled.h1`
  color: ${props => (props.$dark ? '#ffffff' : '#181818')};
  font-size: 23px;
  font-weight: 600;
`
export const Text = styled.p`
  ${props =>
    props.$noResult &&
    'color: #424242; font-size: 20px; margin-bottom: 10px; text-align: center'}
`
export const CustomButton = styled.button`
  ${props =>
    props.$noResult &&
    'background-color: #4f46e5; color: #ffffff; font-size: 15px; padding: 8px 10px 8px 10px; border-radius: 5px; border: none; outline: none; cursor: pointer'}
`
export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${props => (props.$dark ? '#0f0f0f' : '#f9f9f9')};
  overflow-y: auto;
`
export const Navbar = styled.nav`
  width: 100%;
  background-color: ${props => (props.$dark ? '#231f20' : '#f1f5f9')};
  padding: 12px 0 13px 28px;
  display: flex;
  align-items: center;
`
export const IconContainer = styled.div`
  border-radius: 100%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.$dark ? ' #0f0f0f' : '#ffffff')};
  margin-right: 20px;
`
export const StyledHiFire = styled(HiFire)`
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
  @media (max-width: 576px) {
    padding: 0px;
  }
`
