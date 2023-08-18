import styled, { css } from "styled-components";

import Head from "../components/Head";
import PageContainer from "../components/PageContainer";
import { MaxWidth, Grid, Text } from "../components/ui";

const Contact = ({}) => {
  return (
    <>
      <Head />
      <PageContainer>
        <Grid stack>
          <Text>Email</Text>
          <Text>clara.dykstra@gmail.com</Text>
        </Grid>
      </PageContainer>
    </>
  );
};

export default Contact;
