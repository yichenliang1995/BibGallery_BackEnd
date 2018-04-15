import React from 'react';
import ReactAux from '../../hoc/ReactAux/ReactAux'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Input from 'material-ui/Input';
import IconButton from 'material-ui/IconButton'

//import Card, {CardContent} from 'material-ui/Card';
//import Typography from 'material-ui/Typography';
//import SearchButton from './SearchButton';
function doSomething(event) {
    // eslint-disable-next-line no-console
    console.log(event.currentTarget.getAttribute('data-something'));
}

const styles = theme => ({

    container: {
        margin: "10px 100px 10px 10px",
        display: 'flex',
        flexWrap: 'wrap',
        color: 'transparent',
    },

    QueryInput: {
        margin: theme.spacing.unit,
        width: '1',
        textAlign: 'center',
        marginLeft: 100,
        marginRight: 0,
    },

    content: {
        margin: 'auto',
    },

    button: {
        //margin: theme.spacing.unit,
        marginLeft: 10,
        marginRight: 10,
        width: '10px'
    },
});


function SearchBar(props) {
    const {classes} = props;
    return (
    <ReactAux>
    <Input
        placeholder="Name, Year, Journal"
        id="from-date"
        className={classes.QueryInput}
        inputProps={{
            'aria-label': 'Description',
        }}
    />
    <IconButton  className={classes.button} onClick={doSomething} data-something="here I am">
        <i className="material-icons">search</i>
    </IconButton>
    </ReactAux>


    );
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);
