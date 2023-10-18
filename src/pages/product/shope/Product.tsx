import React from 'react';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import PageHeader from '../../../components/PageHeader';
import { PeopleOutlineTwoTone } from '@mui/icons-material';
import ProductList from '../../../components/product/ProductList';
import { Toolbar } from '../../../components/toolbar';
import ProductForm from '../../../components/product/ProductForm';
export const Product = () => (
  <>
    <Helmet>
      <title>
        Product | Seblewengale
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
      title = {"Products"}
      subTitle ={"This is Product page You can add new products or edit existing products"}
      icon={<PeopleOutlineTwoTone fontSize='large'/>}
      />
            <Toolbar name="Product" addName="Create New Product" formName={<ProductForm />} />
            <ProductList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
