import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/storelogo.png'; 
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles(); 
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="store" height="25px" className={classes.image} /> 
                E. Commerce Store 
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                <IconButton aria-label="Show cart items" color="inherit">
                    <Badge overlap="rectangular" badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                    </IconButton>
                    </div>
            </Toolbar>
        </AppBar>
     </>
    )
}

export default Navbar
