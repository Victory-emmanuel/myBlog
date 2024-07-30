import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

// NAVIGATION
const NavWrapper = styled.nav`
  grid-template-columns: 20% 70% 10%;
  position: relative;
  background-color: #fff;
  color: #343434;
  z-index: 10;
  position: sticky;
  top: 0;
  display: grid;
  align-items: center;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 1.5rem 2rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
  @media (max-width: 400px) {
    padding: 1rem;
  }
`;
const Logo = styled.img`
  display: flex;
  margin-right: auto;

  @media (max-width: 821px) {
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
const Logo2 = styled.img`
  display: none;
  margin: auto 0;

  @media (max-width: 600px) {
    display: block;
    width: 4rem;
  }
  @media (max-width: 400px) {
    display: block;
    width: 2.5rem;
  }
`;
const NavWrapperLink = styled.div`
  display: flex;
  gap: 2rem;
  margin: auto;
  position: relative;
  @media (max-width: 1100px) {
    gap: 1rem;
  }

  @media (max-width: 1000px) {
    display: ${(props) => (props.active ? "flex" : "none")};
    flex-direction: column;
    text-align: center;
    padding: 2rem 0;
    margin-right: auto;
  }
`;

const StyledNavText = styled(NavLink)`
  color: #343434;
  font-weight: 500;
  transition: 0.2s;
  //   &.${(props) => props.activeclassname} {
  //     color: #ef0909;
  //   }
  &:hover {
    color: #ef0909;
  }
  @media (max-width: 1000px) {
    display: block;
    padding-top: 2rem;
    font-size: 1.5rem;
    text-align: center;
  }
  @media (max-width: 800px) {
    padding: 1rem;
  }
`;
const StyledNavBtn = styled.button`
  @media (max-width: 600px) {
    height: 4.5rem;
    width: 13rem;
  }
  @media (max-width: 400px) {
  }
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 100%;
  left: 0;
  width: 15rem;
  border-radius: 10px;
  padding: 1rem 1rem;
  @media (max-width: 600px) {
    position: relative;
  }
`;

const DropdownItem = styled(Link)`
  color: #343434;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: 200ms ease-in-out;
  &:hover {
    background-color: #ddd;
  }
  @media (max-width: 1000px) {
    text-align: left;
  }
`;
const SocialsMain = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  z-index: 100;
  background-color: #ef0909;
  padding: 2rem 1rem;
  border-radius: 50px;
  transition: 300ms ease-in-out;

  &:hover {
    box-shadow: 2px 6px 20px -1px rgba(240, 0, 0, 0.36);
  }
  @media (max-width: 821px) {
    grid-template-columns: repeat(4, 1fr);
    top: 93%;
    border-radius: 20px;
    padding: 1rem 3rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 400px) {
    padding: 1rem 1.5rem;
  }
`;
const SocialsLink = styled(Link)`
  color: #fefefe;
  transition: 200ms ease-in-out;
`;

export {
  NavWrapper,
  Logo,
  Logo2,
  NavWrapperLink,
  StyledNavBtn,
  StyledNavText,
  DropdownMenu,
  DropdownItem,
  SocialsLink,
  SocialsMain,
};
