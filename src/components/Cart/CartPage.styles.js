import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 50px;
  flex-wrap: wrap;
  flex-direction: column;
`

export const Label = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  margin: 0;
  font-size: 48px;
  text-align: center;
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 200px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 220px;
`

export const Button = styled.button`
  font-size: 26px;
  padding: 18px 32px;
  background-color: #dfe5ff;
  border: solid #0044b7 1px;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 8px #777676;
  }
`
