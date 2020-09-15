import styled from "styled-components";

const Section = styled.section`
  width: 1000px;
  margin: auto;
  margin-bottom: 20px;
  padding-top: 20px;
`;

const TimeLine = styled.div`
  position: relative;
  margin-left: 2rem;
  padding: 2.5em 2em 2em;
  border-left: 2px solid rgba(0, 0, 0, 0.3);

  &:before {
    content: "${(props) => props.date}";
    display: block;
    position: absolute;
    top: 1em;
    left: 1.85em;
    font-weight: bold;
    font-weight: 700;
    font-size: 0.85rem;
  }
  &:after {
    content: "";
    width: 10px;
    height: 10px;
    display: block;
    position: absolute;
    top: 1em;
    left: -8px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.3);
    background-color: white;
  }
  &:last-child {
    border-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 85%, rgba(0, 0, 0, 0)) 1 100%;
  }

  h3 {
    margin: 8px 0;
    font-size: 1.6rem;
  }

  p {
    margin: 0 0 15px;
    padding-left: 3px;
    font-size: 0.94rem;
  }
`;

const Card = styled.a`
  display: flex;
  position: relative;
  margin: 18px 0 15px;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.5rem;
    color: white;
    opacity: 0;
    transition: all 0.6s;
    border-radius: 5px;
  }
  div:hover {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export { Section, TimeLine, Card };
