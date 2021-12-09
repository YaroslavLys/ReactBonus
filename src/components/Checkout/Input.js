import {
    Error,
    InputWrapper,
    InputForm,
} from "./Input.styles";
import { Field, ErrorMessage } from "formik";

export function Input({title, name, type}) {
    return (
        <InputWrapper>
            <div style={{fontSize: "18px", fontWeight: "bold"}}>{title}:</div>
            <Field id={name} name={name} type={type} as={InputForm}/>
            <Error><ErrorMessage name={name}/></Error>
        </InputWrapper>
    );
}