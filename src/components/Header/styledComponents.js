import {Link, NavLink} from 'react-router-dom'

import {MdMenu, MdLightMode, MdDarkMode} from 'react-icons/md'

import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 10px 30px;
  background-color: ${props => (props.$dark ? '#212121' : ' #ffffff')};
  border-bottom: 1px solid ${props => (props.$dark ? '#424242' : '#e2e8f0')};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const Image = styled.img`
  ${props =>
    props.$logo
      ? 'width: 40%; @media (width< 576px){width: 50%;} @media(width >= 576px){width: 30%;}'
      : 'width: 15%; border-radius: 50%; @media (max-width: 767px){display: none;}'}
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
export const CustomButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  
  border: ${props => props.$dark && props.$outline && '1px solid #ffffff'}
  border: ${props => !props.$dark && props.$outline && '1px solid #3b82f6'}
  color: ${props => (props.$dark ? '#ffffff' : '#3b82f6')}
  padding: ${props => props.$outline && '8px 10px 8px 10px'}
  font-size: 15px;
`
export const StyledMdOutlineWbSunny = styled(MdLightMode)`
  height: 30px;
  width: 30px;
  color: #ffffff;

  @media (max-width: 767px) {
    height: 23px;
    width: 23px;
  }
`
export const StyledFaMoon = styled(MdDarkMode)`
  height: 35px;
  width: 35px;

  @media (max-width: 767px) {
    height: 25px;
    width: 25px;
  }
`
export const StyledHamburgerMenu = styled(MdMenu)`
  height: 32px;
  width: 32px;
  margin: 0 15px 0 12px;
  @media (min-width: 768px) {
    display: none;
  }
  color: ${props => {
    if (props.$showMenu) {
      return '#ff0b37'
    }
    return props.$dark ? '#ffffff' : '#0f0f0f'
  }};
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 30px;
  background-color: ${props => (props.$dark ? '#212121' : ' #ffffff')};
  border-bottom: 1px solid ${props => (props.$dark ? '#424242' : '#e2e8f0')};
  @media (min-width: 768px) {
    display: none;
  }
`

export const StyledNavLink = styled(NavLink)`
  margin-bottom: 15px;
  font-weight: 500;
  color: ${props => (props.$dark ? '#ffffff' : '#000000')};
  font-size: 15px;
  &.active {
    border-radius: 5px;
    font-weight: 600;
    color: #ff0b37;
  }
  text-decoration: none;
`
