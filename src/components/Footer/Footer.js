import {Wrapper, Links, HorLine, Text, LogoImage} from './Footer.styles'
import {InstagramOutlined, YoutubeOutlined, FacebookOutlined} from '@ant-design/icons'
import Logo from "../../assets/logo.png"

export function Footer() {
    return (
        <div style={{textAlign: 'center'}}>
            <HorLine/>
            <Wrapper>
                <LogoImage src={Logo}/>
                <Links>
                    <InstagramOutlined style={{margin: '10px'}}/>
                    <YoutubeOutlined style={{margin: '10px'}}/>
                    <FacebookOutlined style={{margin: '10px'}}/>
                </Links>
            </Wrapper>
            <HorLine style={{marginTop: '0px', width: '80vw'}}/>
            <Text>2021 IoT @ Copyright all rights reserved</Text>
        </div>
    );
}