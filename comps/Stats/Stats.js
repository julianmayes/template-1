import styled from "styled-components";
import { links } from "./data";
import { sizes } from "../../utils/variables";
import { Text } from "../Text/Text";
import { H2 } from "../Text/H2";
import { motion } from "framer-motion";

export const Stats = ({
  all,
  large,
  medium,
  small,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 1 },
}) => {
  return (
    <Cont all={all} large={large} medium={medium} small={small}>
      {links.map((item, i) => {
        return (
          <Card
            key={i}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={{ ease: "easeOut", duration: 1, delay: i / 4 }}
          >
            <H2 all={`margin: 0 0 10px 0; color:white`}>{item.head}</H2>
            <Text all={`color:white`}>{item.text}</Text>
          </Card>
        );
      })}
    </Cont>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  grid-gap: 100px;

  @media (max-width: ${sizes.small}) {
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: ${sizes.xsmall}) {
    grid-template-columns: 2fr;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  flex-direction: column;
  transition: 0.2s ease;

  @media (max-width: ${sizes.small}) {
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`;
