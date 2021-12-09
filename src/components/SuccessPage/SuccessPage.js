import { useHistory } from "react-router-dom";
import {
    Wrapper,
    ButtonSuccess, ImageSuccess,
} from "./SuccessPage.styles";
import success from "../../assets/success_logo.png";

export function SuccessPage() {
    let history = useHistory();

    return (
        <Wrapper>
            <ImageSuccess src={success}/>
            <div style={{fontSize: "36px", fontWeight: "bold"}}>Success</div>
            <div style={{fontSize: "24px"}}>Your order was sent to processing!</div>
            <div style={{fontSize: "24px"}}>Check your email box for further information</div>
            <ButtonSuccess onClick={() => history.push("/catalog")}>Go back to Catalog</ButtonSuccess>
        </Wrapper>
    );
}