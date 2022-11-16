import styled from 'styled-components';
import { RiHome2Line, RiSearchLine } from 'react-icons/ri';
import { HiDownload } from 'react-icons/hi';
import { BsList } from 'react-icons/bs';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { useState, useEffect } from 'react';

const BtmNav = styled.footer`
  width: 400px;
  height: 8vh;
  background-color: #121212;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 998;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Icon = styled.div`
  cursor: pointer;
  color: #8c8787;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  a {
    font-size: 10px;
  }
  :active {
    color: white;
  }
`;

const Footer = () => {
  return (
    <BtmNav>
      <Icon>
        <RiHome2Line size={25} />
        <a>Home</a>
      </Icon>
      <Icon>
        <RiSearchLine size={25} />
        <a>Search</a>
      </Icon>
      <Icon>
        <MdOutlineVideoLibrary size={25} />
        <a>Coming Soon</a>
      </Icon>
      <Icon>
        <HiDownload size={25} />
        <a>Downloads</a>
      </Icon>
      <Icon>
        <BsList size={25} />
        <a>More</a>
      </Icon>
    </BtmNav>
  );
};

export default Footer;
