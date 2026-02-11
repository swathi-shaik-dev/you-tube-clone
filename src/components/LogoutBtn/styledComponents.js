import styled from 'styled-components'

export const CustomButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  height: 30px;
  width: 30px;
  border: ${props => (props.dark && props.outline ? '1px solid #ffffff' : null)}
  border: ${props =>
    !props.dark && props.outline ? '1px solid #3b82f6' : null}
  color: ${props => (props.dark ? '#ffffff' : '#3b82f6')}
  padding: 8px 10px 8px 10px;
  font-size: 15px;
  ${props => props.logout && 'background-color: #3b82f6; color: #ffffff;'}
`
export const LogoutConatiner = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: column;
  font-family: Roboto;
`
export const Text = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#181818')};
  font-size: 15px;
  margin-bottom: 10px;
`
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  align-items: center;
`
