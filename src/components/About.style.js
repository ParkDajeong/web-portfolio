import styled from "styled-components";

const Section = styled.section`
  p {
    margin: 1.2rem 1.5rem 1rem;
  }

  @media only screen and (max-width: 768px) {
    p {
      text-align: center;
      margin-top: 5px;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  margin: 0 1.5rem;

  & > img {
    width: 180px;
    border-radius: 5px;
  }
  & > div {
    width: 100%;
    padding: 0 20px;
  }
  h3 {
    font-size: 1.7rem;
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Contact = styled.ul`
  li {
    display: flex;
    align-items: center;
    padding: 3px 0;
  }

  li > img {
    width: 20px;
    margin-right: 7px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileContact = styled.div`
  margin: 1rem;
`;

const ContactItem = styled.a`
  display: inline-flex;
  position: relative;
  margin: 0 5px;
  padding: 5px 7px;
  border-radius: 4px;

  @media only screen and (min-width: 768px) {
    display: none;
  }

  &:after {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    content: "${(props) => props.tooltip}";
    padding: 6px 10px;
    top: 2.4em;
    left: 50%;
    transform: translateX(-50%) translateY(-2px);
    background: #a9a8a9;
    color: white;
    white-space: nowrap;
    z-index: 2;
    border-radius: 2px;
    transition: opacity 0.2s, transform 0.2s;
  }
  &:hover {
    &:after {
      display: block;
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }
  }

  &:before {
    content: "";
    width: 0;
    height: 0;
    border-left: solid 5px transparent;
    border-right: solid 5px transparent;
    border-bottom: solid 5px #a9a8a9;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    transform: translateX(-50%) translateY(-2px);
    top: 2.1em;
    left: 50%;
    transition: opacity 0.2s, transform 0.2s;
    z-index: 3;
  }
  &:hover {
    &:before {
      display: block;
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }
  }

  img {
    width: 23px;
  }
`;

export { Section, Profile, Contact, MobileContact, ContactItem };
