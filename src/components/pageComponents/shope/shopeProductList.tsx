import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, Container, Grid} from '@mui/material';
import MUIDataTable from 'mui-datatables';
import { SaleInterface } from '../../../interface/interfaces';
import { SHOPE_PRODUCTS } from '../../../graphql/shopeProduct';
import Spinner from '../../Spinner';
export const ShopeProductList = () => {
    const {loading,error,data} = useQuery(SHOPE_PRODUCTS);
    if(loading) return <Spinner/>
    if (error) return <p>{error.message}</p>
    console.log(data)
    const patientVital = data.shopeProducts.map((row:SaleInterface)=>(
        [row.id,row.product.name,row.product.price,row.quantity]
    ))
    const styles = {
      coloredCell: {
        backgroundColor: "red",
        color: "black",
        borderRadius: "50%",
        padding: "10px", // Adjust the padding as needed
      },
    };
    const columns = [
        {
          name: "#Id",
          options: {
            filter: true,
          }
        },
        {
          name: "Product Name",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Price",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Quantity",
          options: {
            filter: true,
            sort: false,
            customBodyRender: (value: number) => {
              if (value < 10) {
                return <span style={styles.coloredCell}>{value}</span>;
              } else {
                return value;
              }
            },
          },
        }, 
      ];
      return (
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
            <MUIDataTable
               title="shope Product"
               data={patientVital}
               columns={columns}
               options={{
                 filterType: "checkbox",
               }}
             />
          </Grid>
        </Grid>
      </Container>
    </Box>
      )
}
