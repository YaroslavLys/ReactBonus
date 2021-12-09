import styled from "styled-components";
import { Input } from "antd";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 30px;
`;

export const Error = styled.div`
    position: absolute;
    color: red;
    font-size: 16px;
    top: 25px;
    left: 20px;
    font-family: Bahnschrift;
`;

export const InputForm = styled(Input)`
    margin-top: 20px;
    width: 700px;
`;
