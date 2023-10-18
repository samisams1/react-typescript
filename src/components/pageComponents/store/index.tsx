import React from 'react';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import PageHeader from '../../PageHeader';
import { PeopleOutlineTwoTone } from '@mui/icons-material';
import { StoreList } from './StoreList';

export const Store = () => (
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
            md={12}
            lg={12}
          >
           <PageHeader
      title = {"Store"}
      subTitle ={"this Page shows The Product Avalible i the Store  Product"}
      icon={<PeopleOutlineTwoTone fontSize='large'/>}
      />
     <StoreList/>   
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
