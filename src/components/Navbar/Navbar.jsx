import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import React from 'react'
import logo from '../../assests/images/logo.png'

import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    
    return (
        <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt='E-Commerce' height='25px' className={classes.image} />
                    E-Commerce
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}/>
                <IconButton aria-label='Show cart items' color='inherit'>
                    <Badge badgeContent= {totalItems} color='secondary'>
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
            
        </>
    )
}

export default Navbar
