import logo from '/logo-name.svg'
import React, {useEffect, useState} from "react";
//import './Header.css'
import { styled } from 'styled-components'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`
const Header : React.FC = () => {
    const [content, setContent] = useState<Date>(new Date());

    useEffect(() => {
        const interval : number = setInterval(()=> setContent(new Date()), 1000);

        return ()=>{
            clearInterval(interval);
        }
    }, []);

    return (
        <HeaderContainer>
            <img src={logo} alt="Result"/>
            <span> {content.toLocaleTimeString()} </span>
        </HeaderContainer>
    )
};

export default Header;