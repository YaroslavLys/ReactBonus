import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 20px;
  flex-wrap: wrap;
  align-items: center;
  background-color: cornsilk;
  border-radius: 16px;
  margin: 20px;
`

export const Text = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  margin: 0 0 0 32px;
  font-size: 32px;
  flex: 1;
`

export const Price = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  margin: 0 20px 0 0;
  font-size: 32px;
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 30px;
`


export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Counter = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 32px;
  margin: 10px 10px;
`

export const Button = styled.button`
  padding: 18px 22px;
  background-color: #dfe5ff;
  border: solid #0044b7 1px;
  border-radius: 10px;
  margin: 10px 10px;
  &:hover {
    box-shadow: 0 0 8px #777676;
  }
`