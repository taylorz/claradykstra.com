import { useState } from "react";
import styled, { css } from "styled-components";

import Head from "../components/Head";
import PageContainer from "../components/PageContainer";
import { MaxWidth, Grid, Text } from "../components/ui";
import { useScreenSize } from "../utils/react-responsive";

const Selected = () => {
  return (
    <>
      <Head title="Clara Dykstra" />
      <PageContainer>
        <Grid stack>
          <WorkItem
            year="2021"
            type="Parametric"
            title="Prior School for Performing Arts"
          />
          <WorkItem
            year="2020"
            type="Publication"
            title="Inaba Williams Pump-2-Plug Symposium"
            description="Urban Designer"
          />
          <WorkItem
            year="2018"
            type="Publication"
            title="Joel Sanders Architects, Stalled! Online Video"
            description="Animator"
          />
          <WorkItem
            year="2018"
            type="Exhibition"
            title="The Temple Hoyne Buell Center for the Study of American Architecture
            “Living in America: Frank Lloyd Wright, Harlem & Modern Housing”"
            description="Researcher, Assistant Curator"
          />
          <WorkItem
            year="2017"
            type="Published"
            title="Urban Omnibus, Locations of Justice Series: After Arrest"
            description="Contributed graphics to describe the spatial logic of Criminal Courthouses."
          />
        </Grid>
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

const WorkItem = ({ year, type, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { screenSize } = useScreenSize();
  return (
    <StyledWorkItem>
      <Grid
        onClick={() => setIsOpen(!isOpen)}
        container
        mb={screenSize.isSm ? 4 : 0}
      >
        <Grid item xs={12}>
          <Grid
            container
            flexDirection={screenSize.isSm && "column"}
            spacing={screenSize.isSm ? 0 : 3}
          >
            <Grid item>
              <Text lightened>{year}</Text>
            </Grid>
            <Grid item>
              <Text lightened>{type}</Text>
            </Grid>
            <Grid item flex={1}>
              <Text>{title}</Text>
            </Grid>
          </Grid>
        </Grid>
        {isOpen ? (
          <Grid item xs={12} mt={4} mb={12}>
            <MaxWidth>
              <Grid stack spacing={4}>
                {description ? <Text>{description}</Text> : null}
                <Grid container alignItems="center">
                  <Grid item xs={1}>
                    <Text>1</Text>
                  </Grid>
                  <Grid item xs={11}>
                    <img
                      style={{ width: "100%", maxHeight: "480px" }}
                      src="https://images.unsplash.com/photo-1607101435453-e6a1327f1c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </MaxWidth>
          </Grid>
        ) : null}
      </Grid>
    </StyledWorkItem>
  );
};
