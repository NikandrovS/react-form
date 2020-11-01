import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    input: {
        marginBottom: "15px",
        '& label': {
            marginLeft: 5,
            fontSize: 14,
        },
        '& label.MuiFormLabel-filled': {
            marginLeft: 0,
        },
        '& label.Mui-focused': {
            marginLeft: 0,
        },

    },
    password: {
        borderRadius: 0,
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#EFEFEF',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1EAAFC',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #1EAAFC',
        },
    },
    passwordLabel: {
        color: '#C2C2C2',
        '&.Mui-focused': {
            color: '#1EAAFC',
        },
    },
}));
const CssPassword = withStyles({
    root: {
        border: 'none',
        outline: 'none',
        paddingLeft: 5,
        fontSize: 14,
        '&:hover': {
            borderRadius: 0,
            borderColor: '#1EAAFC',
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 0,
        },
    },
})(OutlinedInput);

export default function PasswordInput ({ name, state, errors, handler }) {
    const classes = useStyles();
    const [visible, setVisible] = useState({})

    const handleClickShowPassword = prop => {
        setVisible({ ...visible, [prop]: !visible[prop] });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl variant="outlined" className={ classes.input } {...(errors[name] && {error: true})}>
            <InputLabel className={ classes.passwordLabel } htmlFor={ name }>Password</InputLabel>
            <CssPassword
                id={ name }
                type={ visible[name] ? 'text' : 'password' }
                value={ state[name] }
                onChange={ handler }
                name={ name }
                className={ classes.password }
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={ () => handleClickShowPassword(name) }
                            onMouseDown={ handleMouseDownPassword }
                            edge="end"
                        >
                            { visible[name] ? <Visibility htmlColor='#EFEFEF'/> : <VisibilityOff htmlColor='#EFEFEF'/> }
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={65}
            />
            { errors[name] && <FormHelperText>{ errors[name] }</FormHelperText> }
        </FormControl>
    )
}
