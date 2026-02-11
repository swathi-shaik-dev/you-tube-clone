import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.dark ? '#212121' : '#f1f1f1')};
`
export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  font-family: Roboto;
  background-color: ${props => (props.dark ? ' #000000' : '#ffffff')};
  border-radius: 10px;
`
export const Image = styled.img`
  width: ${props => props.logo && '30%'};
  margin-bottom: ${props => props.logo && '25px'};
  align-self: ${props => props.logo && 'center'};
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background: transparent;
`
export const Label = styled.label`
  color: ${props => (props.dark ? '#ffffff' : '#7e858e')};
  font-size: ${props => (props.checkbox ? '18px' : '15px')};
  font-weight: 500;
  margin-bottom: 8px;
  color: ${props => props.checkbox && '#0f0f0f'};
`
export const Input = styled.input`
  border: 1px solid #94a3b8;
  padding: 10px;
  color: ${props => (props.dark ? '#ffffff' : '#7e858e')};
  font-size: 18px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  margin-bottom: ${props => !props.checkbox && '15px'};
  border: ${props => props.checkbox && '1px solid #616e7c'};
  margin-right: ${props => props.checkbox && '8px'}
  height: ${props => !props.checkbox && '30px'};
  border: ${props => props.dark && 'none'};
  background: transparent;
`
export const CheckboxConatiner = styled.div`
  display: flex;
`
export const CustomButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 10px;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 15px;
`
export const Text = styled.p`
  ${props => props.error && 'color: #ff0b37; font-size: 13px;'}
`
