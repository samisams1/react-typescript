import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { ShopeProductList } from '../../../components/pageComponents/shope/shopeProductList';

export const ShopeProduct = () => (
  <>
     <Helmet>
        <title>Overview | Inventory</title>
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
           PageHeader
            <ShopeProductList/>   
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);