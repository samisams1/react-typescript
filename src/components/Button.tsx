import React from 'react'
import { Button as MuiButton,  } from '@mui/material';


export default function Button(props:any) {

    const { text, size, color, variant, onClick, ...other } = props
   

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            classes={{}}>
            {text}
        </MuiButton>
    )
}
