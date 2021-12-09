import styled from 'styled-components';

export const GlobalWrapper  = styled.div`
  display: flex;
  padding: 5px 80px;
`

export const FilterWrapper = styled.div`
  display: flex;
  flex: 10;
`

export const FilterSelector = styled.select`
  margin-right: 40px;
  padding: 10px 32px;
  border-radius: 5px;
  border: solid #c4c4c4 1px;
`

export const LabelText = styled.h4`
  font-weight: 800;
  margin: 0 30px;
  align-self: center;
`

export const ApplyButton = styled.button`
  padding: 18px 32px;
  background-color: #8bff46;
  flex: 1;
  border: solid #137700 1px;
  border-radius: 10px 40px;
  font-size: 18px;
  font-weight: 400;

  &:hover {
    box-shadow: 0 0 8px #777676;
  }
`

export const HorLine = styled.hr`
  margin-top: 0;
`