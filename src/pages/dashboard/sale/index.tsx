import React from 'react';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
//import { ShopeProducts } from '../../../components/scensComponents/dashboard/sale/TotalProducts';
//import { TotalSales } from '../../../components/scensComponents/dashboard/TotalSales';
import { Helmet } from 'react-helmet';
import { ShopeProduct } from '../../product/shope/shopeProduct';

export const SellerDashboard = () => (
  <>
    <Helmet>
      <title>
        Overview | Inventory
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
            sm={6}
            lg={6}
          >
            <ShopeProduct
           //   difference={16}
            //  positive={false}
            //  sx={{ height: '100%' }}
            //  value="1.6k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={6}
          >
            <ShopeProduct
           //   sx={{ height: '100%' }}
            //  value="$15k"
            />
          </Grid>
         
        </Grid>
      </Container>
    </Box>
  </>
);