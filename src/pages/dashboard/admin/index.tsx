import React from 'react';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { StoreProducts } from '../../../components/pageComponents/dashboard/store/TotalProducts';
import { TotalProducts } from '../../../components/pageComponents/dashboard/TotalProducts';
import { TotalOrders } from '../../../components/pageComponents/dashboard/TotalOrders';
//import { TotalUser } from '../../../components/pageComponents/dashboard/TotalUsers';
import { ShopeProducts } from '../../../components/pageComponents/dashboard/sale/TotalProducts';

export const AdminDashboard = () => (
  <>
    <Helmet>
      <title>
        Dashboard | Seblewongale
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
            <ShopeProducts
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
        </Grid>
      </Container>
    </Box>
  </>
);