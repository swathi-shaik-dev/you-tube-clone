import styled, {css} from 'styled-components'
import Popup from 'reactjs-popup'
import {IoLogOut} from 'react-icons/io5'

export const StyledSmallPopup = styled(Popup)`
  @media (min-width: 768px) {
    display: none;
  }
`

export const StyledMediumPopup = styled(Popup)`
  @media (max-width: 767px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  padding: 5px 10px 5px 10px;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  border-radius: 8px;

  ${props =>
    props.$cancel &&
    css`
      background: transparent;
      border: 1px solid ${props.$dark ? '#ffffff' : '#000000'};
      color: ${props.$dark ? '#ffffff' : '#000000'};
    `}

  ${props =>
    props.$logout &&
    css`
      background: transparent;
      border: 2px solid ${props.$dark ? '#ffffff' : '#ff0b37'};
      color: ${props.$dark ? '#ffffff' : '#ff0b37'};
      @media (max-width: 767px) {
        display: none;
      }
    `}

  ${props =>
    props.$confirm &&
    css`
      background: #ff0b37;
      color: #ffffff;
      border: 1px solid #ff0b37;
    `}
`
export const LogoutConatiner = styled.div`
  padding: 20px 40px 20px 40px;
  border-radius: 10px;
  background-color: ${props => (props.$dark ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: column;
  font-family: Roboto;
`
export const Text = styled.p`
  color: ${props => (props.$dark ? '#f9f9f9' : '#181818')};
  font-size: 15px;
  margin-bottom: 20px;
`
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  align-self: center;
`
export const StyledIoLogOut = styled(IoLogOut)`
  height: 30px;
  width: 30px;
  @media (min-width: 768px) {
    display: none;
  }
  color: ${props => (props.$dark ? '#ffffff' : '#0f0f0f')};
`
