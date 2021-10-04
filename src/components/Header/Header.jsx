import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons';

const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar className={mergeClasses.toolBar}>
                <Typography variant='h5' className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box>
                    <Typography variant='h6' className={classes.title}>
                        Explore new places
                    </Typography>  
                    <Autocomplete>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;