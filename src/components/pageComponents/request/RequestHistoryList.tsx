import React, { useContext, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Button from '../../Button';
import Popup from '../../Popup';
import { Chip, Grid, Stack } from '@mui/material';
import { orderInteface } from '../../../interface/interfaces';
import Spinner from '../../Spinner';
import { UserContext } from '../../../auth/UserContext';
import MUIDataTable from 'mui-datatables';
import RequestHistoryDetail from './RequestHistoryDetail';
const ORDER_QUERY1 = gql`
query{
  orders{
    id
    status
    sellerId
    createdAt
    totalQuantity
    orderDetails{
      quantity
      product{
        name
        
      }
      
    }
    
  }
}
`;
const RequestHistoryList = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [newData, setNewData] = useState<any>('');
  const { currentUser } = useContext(UserContext);
  const { loading, error, data } = useQuery(ORDER_QUERY1);
   if(!currentUser){
    return <Spinner/>
   }
  if (loading) return <Spinner/>;
  if (error) return <p>{error.message}</p>;

  const productList = data.orders.map((row: orderInteface) => [
    row.id,
    row.sellerId,
    row.totalQuantity,
    row.createdAt, 
    row.status,
  ]);
  console.log(productList);
  const columns = [
    {
      name: '#Order Id',
      options: {
        filter: true,
      },
    },
    {
      name: 'Seller',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      label: 'Total Quantity',
      name: 'Name',
      options: {
        filter: true,
      },
    },
    {
      name: 'Date',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Status',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          return (
    <Stack direction="row" spacing={1}>
  {value === "approved" ? (
    <Chip label={value} color="primary" />
  ) : value === "accepet" ? (
    <Chip label={value} style={{ backgroundColor: '#9ac96f', color: 'white' }} />
  ) : (
    <Chip label={value} color="secondary" />
  )}
</Stack>
          )
        }
      },
    },
    {
      name: 'Invoice',
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
          return (
            <Button
              text="ShowDetail"
              variant="outlined"
              onClick={() => {
                setOpenPopup(true);
                setNewData(tableMeta.rowData);
              }}
            />
          );
        },
      },
    },
  ];



  return (
    <Grid>
      <MUIDataTable
        title="Order from shope"
        data={productList}
        columns={columns}
      />
      <Popup
        title="Order Detail  From Shope "
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <RequestHistoryDetail
       id = {newData[0]} 
        />
      </Popup>
    </Grid>
  );
};


export default RequestHistoryList;