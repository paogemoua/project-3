import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material/core/RadioGroup';
import FormHelperText from '@material/core/FormHelperText';
import FormControlLabel from '@material/core/FormControlLabel';
import FormControl from '@material/core/FormControl';
import FormLabel from '@material/core/FormLabel';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

const publicPrivate = [
    {
        value: 'Public',
        label: 'public',
    },
    {
        value: 'Private',
        label: 'private',
    },
];

const sports = [
    {
        value: 'Baseball',
        label: 'Baseball',
    },
    {
        value: 'Basketball',
        label: 'Basketball',
    },
    {
        value: 'Football',
        label: 'Football',
    },
    {
        value: 'Golf',
        label: 'Golf',
    },
    {
        value: 'Hockey',
        label: 'Hockey',
    },
    {
        value: 'Volleyball',
        label: 'Volleyball',
    },
    {
        value: 'Soccer',
        label: 'Soccer',
    },
    {
        value: 'Softball',
        label: 'Softball',
    },
    {
        value: 'Tennis',
        label: 'Tennis',
    },
    {
        value: 'Rugby',
        label: 'Rugby',
    },
    {
        value: 'Ultimate',
        label: 'Ultimate',
    },
];

class TextFields extends React.Component {
    state = {
        name: 'Central Park',
        location: '',
        addresss: '',
        time: '',
        info: '',
        players: '',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                id="standard-required"
                label="EventName"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
                />

                <TextField
                id="standard-required"
                label="Location"
                className={classes.textField}
                value={this.state.location}
                onChange={this.handleChange('location')}
                margin="normal"
                />

                <TextField
                id="standard-required"
                label="Address"
                className={classes.textField}
                value={this.state.addresss}
                onChange={this.handleChange('address')}
                margin="normal"
                />

                <TextField
                id="standard-required"
                label="Time"
                className={classes.textField}
                value={this.state.time}
                onChange={this.handleChange('time')}
                margin="normal"
                />

                <TextField
                id="standard-required"
                label="Info"
                className={classes.textField}
                value={this.state.info}
                onChange={this.handleChange('info')}
                margin="normal"
                />

                <TextField
                id="standard-select-sports"
                select
                label="Select"
                className={classes.textField}
                value={this.state.sports}
                onChange={this.handleChange('sports')}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                helperText="Please select your sport."
                margin="normal"
            >
                {sports.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>