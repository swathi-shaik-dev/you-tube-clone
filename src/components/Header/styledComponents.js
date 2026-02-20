import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px 15px 30px;
  background-color: ${props => (props.dark ? '#212121' : ' #ffffff')};
  border-bottom: 1px solid ${props => (props.dark ? '#424242' : '#e2e8f0')};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const Image = styled.img`
  ${props => (props.logo ? 'width: 30%' : 'width: 18%')}
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CustomButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  height: 30px;
  width: 30px;
  border: ${props => props.dark && props.outline && '1px solid #ffffff'}
  border: ${props => !props.dark && props.outline && '1px solid #3b82f6'}
  color: ${props => (props.dark ? '#ffffff' : '#3b82f6')}
  padding: ${props => props.outline && '8px 10px 8px 10px'}
  font-size: 15px;
`
export const StyledMdOutlineWbSunny = styled(FiSun)`
  height: 30px;
  width: 30px;
  color: #ffffff;
  margin-right: 15px;
`
export const StyledFaMoon = styled(FaMoon)`
  height: 30px;
  width: 30px;
  margin-right: 15px;
`
