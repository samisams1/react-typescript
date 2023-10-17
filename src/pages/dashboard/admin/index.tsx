import React from 'react';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { ShopeProduct } from '../../product/shope/shopeProduct';
import { StoreProducts } from '../../../components/pageComponents/dashboard/store/TotalProducts';
import { TotalProducts } from '../../../components/pageComponents/dashboard/TotalProducts';
import { TotalOrders } from '../../../components/pageComponents/dashboard/TotalOrders';
import { TotalUser } from '../../../components/pageComponents/dashboard/TotalUsers';

export const AdminDashboard = () => (
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
            lg={3}
          >
            <ShopeProduct
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <StoreProducts
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1.6k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <TotalProducts
              sx={{ height: '100%' }}
              value={75.5}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <TotalOrders
              sx={{ height: '100%' }}
              value="$15k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <TotalOrders
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="$24k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <TotalUser
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1.6k"
            />
          </Grid>
          <Grid
            xs={12}
            lg={12}
          >
           SaleList
          </Grid>
         
        </Grid>
      </Container>
    </Box>
  </>
);