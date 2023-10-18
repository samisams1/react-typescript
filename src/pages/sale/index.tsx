import React, { useContext, useState } from 'react';
import { Alert, Box, Container, Grid } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import { useMutation } from '@apollo/client';
import { SALE_QUERY, CREATE_SALE_MUTATION } from '../../graphql/Sale';
import Popup from '../../components/Popup';
import Spinner from '../../components/Spinner';
import { Helmet } from 'react-helmet';
import SaleProductForm from '../../components/pageComponents/sale/SaleProductForm';
import PrintSale from '../../components/pageComponents/sale/pritnSale';
import { UserContext } from '../../auth/UserContext';
interface Product {
  productId: string;
  quantity: string;
  price: number;
  amount: number;
}
const Sale = () => {
  const [successMessage,setSuccessMessage] = useState('');
  const [errorMessage,setErrorMessage] = useState('');
  const [createOrder, { data }] = useMutation(CREATE_SALE_MUTATION, {
    refetchQueries: [{ query: SALE_QUERY }],
  });
  const [saleValue, setSaleValue] = useState<any>('');
  const [openPopup, setOpenPopup] = useState(false);
  const [message, setMessage] = useState('');

 const {currentUser} = useContext(UserContext);
 if(!currentUser){
  return <Spinner/>
 }
 
 setMessage("sams")
 console.log(data)
  const handleSubmit = async (updatedProducts: Product[]) => {
    const formattedProducts = updatedProducts.map((product) => ({
      productId: parseInt(product.productId.toString(), 10),
      price: parseInt(product.price.toString(), 10),
      amount: parseInt(product.price.toString(), 10) * parseInt(product.quantity.toString(), 10),
      quantity: parseInt(product.quantity.toString(), 10),
    }));

    const saleNetAmount = formattedProducts.reduce((acc, product) => acc + product.amount, 0);
    const saleVat = saleNetAmount * 0.15; // Assuming 15% VAT rate, you can adjust this value based on your requirements
    const saleGrossAmount = saleNetAmount + saleVat;

    const input = {
      sellerId: currentUser.id,
      net: saleNetAmount,
      vat: saleVat,
      grossAmount: saleGrossAmount,
      status: "paid",
      saleDetail: formattedProducts,
    };

    try {
      await createOrder({ variables: { input } });
      console.log(input);
      setSaleValue(input);
      setOpenPopup(true);
      setSuccessMessage("request Sent success fully")
    } catch (error: any) {
      console.error('Error submitting products:', error);
      setErrorMessage(error.message);
    }
  };

  return (
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
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
           <PageHeader
      title = {"Sale"}
      subTitle ={"Welcome to the sales page, where you have the opportunity to showcase and offer your products for sale!"}
      icon={<MonetizationOnTwoToneIcon fontSize='large'/>}
      />
      <h1>{message}</h1>
      {successMessage && (
              <Alert variant="outlined" severity="info" sx={{ mx: 'auto', mb: 2, width: '50%', textAlign: 'center' }}>
                {successMessage}
              </Alert>
            )}
            {errorMessage && (
              <Alert variant="outlined" severity="error" sx={{ mx: 'auto', mb: 2, width: '50%', textAlign: 'center' }}>
                {errorMessage}
              </Alert>
            )}
        <SaleProductForm onSubmit={handleSubmit} />
          </Grid>
        </Grid>
      </Container>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <PrintSale input={saleValue} />
        </Popup>
    </Box>
  </>
  );
};

export default Sale;