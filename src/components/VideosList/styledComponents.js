import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemCard = styled.li`
  margin-bottom: 35px;
  display: flex;
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`
export const Image = styled.img`
  ${props =>
    props.$profile &&
    'width: 35px; height: 40px; margin-left: 20px; @media(min-width: 576px){display: none;}'}
  ${props =>
    props.$video &&
    'width: 350px; height: 200px; @media(max-width: 576px){width: 100%;}'}
`

export const ProfileImage = styled.div`
  display: flex;
  @media (max-width: 576px) {
    margin-top: 13px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 15px;
`
export const Text = styled.p`
  margin: 0px 0px 3px 0px;

  ${({$title, $dark}) =>
    $title &&
    `
      font-size: 18px;
      font-weight: 500;
      color: ${$dark ? '#f9f9f9' : '#181818'};
       @media(max-width:576px){
        font-size: 15px;
        }
    `}

  ${props =>
    props.$channel &&
    'margin: 0px; color: #606060; font-size: 15px; font-weight: 500; @media(max-width:576px){font-size: 12px;}'}
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
`
export const StyledBsDot = styled(BsDot)`
  color: #606060;
  height: 15px;
  width: 15px;
`
