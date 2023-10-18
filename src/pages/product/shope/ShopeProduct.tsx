import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import PageHeader from '../../../components/PageHeader';
import { Helmet } from 'react-helmet';
import { ShopeProductList } from '../../../components/pageComponents/shope/shopeProductList';

export const ShopeProduct = () => (
  <>
    <Helmet>
      <title>
        Shope Product | SebleWongale
      </title>
    </Helmet>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            md={12}
            lg={12}
          >
           <PageHeader
      title = {"Shope Product"}
      subTitle ={"this Page shows The Product Avalible i the Shope  Product"}
      icon={<LocalMallTwoToneIcon fontSize='large'/>}
      />
            <ShopeProductList/>   
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);