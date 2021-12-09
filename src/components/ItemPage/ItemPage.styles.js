import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 100px 200px;
  justify-content: center;
`

export const ButtonWrapper = styled.div`
  display: flex;
  padding: 10px;
`


export const Image = styled.img`
  width: 500px;
  height: 400px;
  border-radius: 15px;
`

export const Label = styled.h2`
  font-weight: 500;
  font-size: 68px;
  margin: 0;
  align-self: center;
`

export const Text = styled.h4`
  font-weight: 300;
  font-size: 32px;
  align-self: center;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
`
export const Price = styled.h4`
  font-weight: 400;
  font-size: 32px;
  align-self: center;
`
export const BackButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 18px 20px;
  background-color: #ffb9b9;
  border: solid #ff0026 1px;
  border-radius: 5px;

  align-self: center;
  margin: 10px;

  &:hover {
    box-shadow: 0 0 8px #777676;
  }
`

export const AddButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 18px 20px;
  background-color: #abffb1;
  border: solid #1e9800 1px;
  border-radius: 5px;
  align-self: center;
  margin: 10px;

  &:hover {
    box-shadow: 0 0 8px #777676;
  }
`