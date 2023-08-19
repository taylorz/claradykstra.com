import styled, { css } from "styled-components";

import Head from "../components/Head";
import PageContainer from "../components/PageContainer";
import { MaxWidth, Grid, Text } from "../components/ui";

const Selected = () => {
  return (
    <>
      <Head title="Clara Dykstra" />
      <PageContainer>
        <MaxWidth>
          <Grid container>
            <Grid item xs={12}>
              <WorkItem
                year="2023"
                title="Locations of Justice Series: After Arrest"
              />
              <WorkItem
                year="2022"
                title="Locations of Justice Series: After Arrest"
              />
              <WorkItem
                year="2022"
                title="Locations of Justice Series: After Arrest"
              />
              <WorkItem
                year="2021"
                title="Locations of Justice Series: After Arrest"
              />
              <WorkItem
                year="2020"
                title="Locations of Justice Series: After Arrest"
              />
              <WorkItem
                year="2019"
                title="Locations of Justice Series: After Arrest"
              />
              <WorkItem
                year="2018 to 2020"
                title="Locations of Justice Series: After Arrest"
              />
              <WorkItem
                year="2018"
                title="Locations of Justice Series: After Arrest"
              />
              <WorkItem
                year="2018"
                title="Locations of Justice Series: After Arrest"
              />
            </Grid>
          </Grid>
        </MaxWidth>
      </PageContainer>
    </>
  );
};

export default Selected;

const StyledWorkItem = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const WorkItem = ({ year, title }) => {
  return (
    <StyledWorkItem>
      <Grid container spacing={4}>
        <Grid item>
          <Text lightened>{year}</Text>
        </Grid>
        <Grid item>
          <Text lightened>Publication</Text>
        </Grid>

        <Grid item>
          <Text>{title}</Text>
        </Grid>
      </Grid>
    </StyledWorkItem>
  );
};
