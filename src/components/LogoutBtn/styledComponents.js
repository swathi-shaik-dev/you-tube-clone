import styled, {css} from 'styled-components'

export const LogoutButton = styled.button`
  padding: 5px 10px 5px 10px;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  border-radius: 8px;

  ${props =>
    props.cancel &&
    css`
      background: transparent;
      border: 1px solid ${props.$dark ? '#ffffff' : '#000000'};
      color: ${props.$dark ? '#ffffff' : '#000000'};
    `}

  ${props =>
    props.logout &&
    css`
      background: transparent;
      border: 1px solid ${props.$dark ? '#ffffff' : '#3b82f6'};
      color: ${props.$dark ? '#ffffff' : '#3b82f6'};
    `}

  ${props =>
    props.confirm &&
    css`
      background: #3b82f6;
      color: #ffffff;
      border: 1px solid #3b82f6;
    `}
`
export const LogoutConatiner = styled.div`
  padding: 20px 40px 20px 40px;
  border-radius: 10px;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: column;
  font-family: Roboto;
`
export const Text = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#181818')};
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
