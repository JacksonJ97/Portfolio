import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Components
import Button from "../../Utilities/Button";

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    margin: 0.5em 0;
  }

  p {
    font-size: 1.5rem;
  }

  .btns-container {
    margin: 2em 0;
  }

  .links-container {
    display: flex;
    justify-content: center;
    font-size: 2rem;

    a {
      margin: 0 0.25em;
    }

    a:hover {
      color: #ffd369;
    }
  }
`;

const Hero = ({ id }) => {
  return (
    <Wrapper id={id}>
      <h1>Hello! I'm Jackson Jude.</h1>
      <p>I'm an electrical engineering graduate looking to pursue a career in frontend development.</p>
      <div className="btns-container">
        <Button text="View Resume" />
        <Button text="View Projects" target="projects" />
      </div>

      <div className="links-container">
        <a href="https://github.com/JacksonJ97" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/jacksonjude/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="mailto:jacksonjude97@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </Wrapper>
  );
};

export default Hero;
