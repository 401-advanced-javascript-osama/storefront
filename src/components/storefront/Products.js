import React from 'react';
import { connect } from 'react-redux';
import { activate } from '../../store/products';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Products = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>{props.categories.activeCategory === ''? 'choose category' : props.categories.activeCategory}</Paper>
                    <Paper className={classes.paper}>description</Paper>
                </Grid>
                {props.categories.products.map((product, idx) => {
                    if (product.category === props.categories.activeCategory) {
                        return (
                            <Grid item xs={4}>
                                <Paper key={idx} className={classes.paper}>
                                    <img src='https://colorlib.com/sparkling/wp-content/uploads/sites/5/2013/03/image-alignment-150x150.jpg' alt='just 150*150' />
                                    <h4>{product.name}</h4>
                                    <p>{product.description}</p>
                                    <a href='!#' >ADD TO CART</a>
                                    <a href='!#' >VIEW DETAILS</a>
                                </Paper>
                            </Grid>

                        )

                    }
                })}
            </Grid>
        </div>
    );
}


const mapStateToProps = state => ({
    categories: state.categories

});

export default connect(mapStateToProps)(Products);