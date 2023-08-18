import styled, { css } from "styled-components";

import Head from "../components/Head";
import PageContainer from "../components/PageContainer";
import { MaxWidth, Grid, Text } from "../components/ui";

const About = ({}) => {
  return (
    <>
      <Head />
      <PageContainer>
        <MaxWidth>
          <Text>
            Clara holds a Bachelor of Arts in Cultural Anthropology from UCLA
            and a Masters of Architecture from Columbia University. She recently
            relocated to Los Angeles, CA from NYC. For the past two and half
            years, she has applied her training as an architect in the field of
            urban design.
          </Text>
        </MaxWidth>
      </PageContainer>
    </>
  );
};

export default About;
