import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Grid, Typography } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import Spinner from '../Spinner';
import { CATEGORY_QUERY } from '../../graphql/Category';
import { categoryInterface } from '../../interface/interfaces';
import Popup from '../Popup';
import Button from '../Button';

export const CategoryList = () => {
    const [openPopup,setOpenPopup] =useState(false);
    const  [openCofirmPopup,setOpenConfirimPopup]=useState(false);
    const {loading,error,data} = useQuery(CATEGORY_QUERY);
   
    if(loading) return <Spinner/>
    if (error) return <p>{error.message}</p>
    
    const columns = [
        {
          name: "#Id",
          options: {
            filter: true,
          }
        },
        {
          label: "Name",
          name: "Title",
          options: {
            filter: true,
          }
        },
      ];
const row = data.categories.map((row:categoryInterface)=>(
        [row.id,row.name]
    ))
      return (
        <Grid>
             <MUIDataTable
               title="Checkup"
              data={row}
               columns={columns}
               options={{
                 filterType: "checkbox",
               }}
             />
               <Popup
                    title="Patient Edit Form"
                    openPopup={openCofirmPopup}
                    setOpenPopup={setOpenConfirimPopup}
                >
                  <Grid>
    <Typography>Are you sure you want to delete this post?</Typography>
    <Grid>
    <Button
     //onClick={handleDelete(newData[0])}
            text="Yes" />
    <Button
            type="submit"
            text="No" />
    </Grid>
    
    
    
                  </Grid>
       
         </Popup>
        <Popup
                    title="Patient Edit Form"
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                >
     Category 
         </Popup>
        </Grid>
      )
}



