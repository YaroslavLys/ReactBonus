import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 65px 100px;
`

export const Image = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;
`

export const TextWrapper = styled.div`
  padding: 60px;
`

export const Label = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 36px;
`

export const ImageText = styled.p`
  font-size: 24px;
`

export const ItemsText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 36px;
  text-align: center;  
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const Button = styled.button`
  width: 200px;
  height: 70px;
  background: #ff0000;
  border: none;
  border-bottom: 6px solid #890000;
  padding: 16px;
  border-radius: 4px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-top: 30px;
  transition: all 0.1s;
  outline: none;

  &:hover {
    transform: translateY(-0.25em);
  }
`
export const Items = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

