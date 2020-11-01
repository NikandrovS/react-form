import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

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
}));
const CssTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root ': {
            paddingLeft: 5,
            fontSize: 14,
        },
        '& label': {
            color: '#C2C2C2',
            fontSize: 14,
        },
        '& label.Mui-focused': {
            color: '#1EAAFC',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: 0,
                borderColor: '#EFEFEF',
            },
            '&:hover fieldset': {
                borderColor: '#1EAAFC',
            },
            '&.Mui-focused fieldset': {
                border: '1px solid',
                borderColor: '#1EAAFC',
            },
        },
    },
})(TextField);

export default function TextInput ({ name, label, state, errors, handler }) {
    const classes = useStyles();
    return (
        <CssTextField
            onChange={handler}
            className={classes.input}
            label={label}
            id={name}
            name={name}
            defaultValue={state[name]}
            variant="outlined"
            {...(errors[name] && {error: true, helperText: errors[name]})}
        />
    )
}
