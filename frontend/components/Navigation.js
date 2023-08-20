import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { Grid, Text } from "../components/ui";
import { useScreenSize } from "../utils/react-responsive";

const StyledNavigation = styled.div`
  width: 100%;
`;

const Navigation = ({}) => {
  const router = useRouter();
  const { screenSize } = useScreenSize();

  return (
    <StyledNavigation>
      <Grid container ml={screenSize.isSm ? 0 : 12}>
        <Grid item xs={12}>
          <Link href="/">
            <Text>Clara Dykstra</Text>
          </Link>
        </Grid>
        <Grid item xs={12} ml={screenSize.isSm ? 12 : 24}>
          <Link href="/selected">
            <Text lightened={router.pathname !== "/selected"} hoverable>
              Selected
            </Text>
          </Link>
          {router.pathname === "/selected" ? (
            <Grid item xs={12} ml={12}>
              <Text hoverable>By year</Text>
              <Text hoverable lightened>
                By title
              </Text>
              <Text hoverable lightened>
                By type
              </Text>
            </Grid>
          ) : null}
          <Link href="/about">
            <Text lightened={router.pathname !== "/about"} hoverable>
              About
            </Text>
          </Link>
          <Link href="/contact">
            <Text lightened={router.pathname !== "/contact"} hoverable>
              Contact
            </Text>
          </Link>
        </Grid>
      </Grid>
    </StyledNavigation>
  );
};

export default Navigation;
