import React from 'react';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { PeopleOutlineTwoTone } from '@mui/icons-material';
import { Toolbar } from '../../components/toolbar';
import PageHeader from '../../components/PageHeader';
import { UserList } from '../../components/pageComponents/user/UserTable';
export const User = () => (
  <>
    <Helmet>
      <title>
        User | Seblewongale
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
            title="New USer"
            subTitle="This is user can be add or edit  "
            icon={<PeopleOutlineTwoTone fontSize="large" />}
        /> 
            <Toolbar name="USER" addName ="Create New User" formName={<User/>}/>
            <UserList/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);