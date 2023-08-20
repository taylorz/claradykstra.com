import Head from "../components/Head";
import PageContainer from "../components/PageContainer";
import { MaxWidth, Grid, Text } from "../components/ui";

const Contact = ({}) => {
  return (
    <>
      <Head title="Clara Dykstra - Contact" />
      <PageContainer>
        <MaxWidth>
          <Grid stack>
            <Text>Email</Text>
            <Text>clara.dykstra@gmail.com</Text>
          </Grid>
        </MaxWidth>
      </PageContainer>
    </>
  );
};

export default Contact;
