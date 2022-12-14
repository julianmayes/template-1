import styled from "styled-components";
import { sizes } from "../utils/variables";

export const Section = ({ children, all, large, medium, small }) => {
  return (
    <Cont all={all} large={large} medium={medium} small={small}>
      {children}
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
  justify-content: space-between;

  ${(props) => props.all};

  @media (max-width: ${sizes.large}) {
    ${(props) => props.large};
  }

  @media (max-width: ${sizes.medium}) {
    ${(props) => props.medium};
  }

  @media (max-width: ${sizes.small}) {
    ${(props) => props.small};
  }
`;
