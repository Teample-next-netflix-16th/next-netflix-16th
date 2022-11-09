import styled from "styled-components";
import {RiHome2Line,RiSearchLine} from 'react-icons/ri';
import {HiDownload} from 'react-icons/hi';
import {BsList} from 'react-icons/bs';
import {MdOutlineVideoLibrary} from 'react-icons/md';
import Image from 'next/image';

const BtmNav = styled.footer`
    width: 100%;
    height: 8%;
    position : fixed;
    background-color: #121212;
    bottom : 0;
    display: flex;
    justify-content : space-between;
    margin-left: auto;
    margin-right: auto;
    position : absolute;
    
`

const Icon = styled.div`
    cursor: pointer;
    color : #8C8787;
    display: flex;
    flex-direction : column;
    align-content

    a{
        font-size : 13px;
    }
`

const Footer = () =>{
    return(
        <BtmNav>
            <Icon>
                <RiHome2Line/>
                <a>Home</a>
            </Icon>
            <Icon>
                <RiSearchLine/>
                <a>Search</a>
            </Icon>
            <Icon>
                <MdOutlineVideoLibrary/>
                <a>Coming Soon</a>
            </Icon>
            <Icon>
                <HiDownload/>
                <a>Downloads</a>
            </Icon>
            <Icon>
                <BsList/>
                <a>More</a>
            </Icon>
        </BtmNav>
    )
}

export default Footer;