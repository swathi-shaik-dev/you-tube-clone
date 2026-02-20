import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemCard = styled.li`
  margin-bottom: 35px;
  display: flex;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
`
export const Image = styled.img`
  ${props => props.video && 'width: 350px; height: 200px;'}
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 15px;
`
export const Text = styled.p`
  margin: 5px;
  ${props =>
    props.dark && props.title
      ? 'color: #f9f9f9; font-size: 18px; font-weight: 500;'
      : null}

  ${props =>
    !props.dark && props.title
      ? 'color: #181818; font-size: 18px; font-weight: 500;'
      : null}

  ${props =>
    props.channel && 'color: #606060; font-size: 15px; font-weight: 500'}
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
