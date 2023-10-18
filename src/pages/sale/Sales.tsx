import React from 'react';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PageHeader from '../../components/PageHeader';
import { Helmet } from 'react-helmet';
import { SaleToolbar } from '../../components/pageComponents/sale/SaleToolbar';
import { SaleList } from '../../components/pageComponents/sale/SaleList';

export const Sales = () => (
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
      title = {"Sales"}
      subTitle ={"Sales List"}
      icon={<MonetizationOnTwoToneIcon fontSize='large'/>}
      />
            <SaleToolbar name="Sales" addName="New Sales"  />
            <SaleList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
