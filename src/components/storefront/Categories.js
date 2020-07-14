import React from 'react';
import { connect } from 'react-redux'; //this lib to connect the component wit the reducer 
import { activate } from '../../store/categories';
// import products from '../../store/products';

import { Breadcrumbs } from '@material-ui/core';
import { Link } from '@material-ui/core';

const Categories = props => {
    return (
        <div className='links'>
        <h3>Browse Our Categories</h3>
        <Breadcrumbs aria-label="breadcrumb">
            {props.categories.categories.map((category, idx) =>
                <Link color="primary" onClick={() => props.activate(category.name)} key={idx}>
                    {category.displayName}
                </Link>
            )}
        </Breadcrumbs>
        </div>

    )
}

//here we get access to the state of the store so we can grap stuff from the state to use  
const mapStateToProps = state => ({
    categories: state.categories, //this obj represent the differenrt properties we want to pass it to the props  
});
// then we pass it to the connect fun

//here we duspatch the action we want to use in this components from the store 
const mapDispatchToProps = { activate };
// then we pass it to the connect fun


//the connect will return  a higer order component the the h o component is rappenig the component 
export default connect(mapStateToProps, mapDispatchToProps)(Categories);