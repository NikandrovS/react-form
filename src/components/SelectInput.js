import React from "react";
import { FormControl, FormHelperText, InputBase, InputLabel, Select } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    select: {
        width: '100%',
        '& label': {
            color: '#C2C2C2',
            fontSize: 14,
            padding: '0 5px',
            backgroundColor: 'white'
        },
        '& label.Mui-focused': {
            color: '#1EAAFC',
        },
    },
}));

const BootstrapInput = withStyles(() => ({
    root: {
        '& .MuiSvgIcon-root': {
            color: '#C3C3C3',
            top: 'calc(50% - 13px)'
        },
        '&.Mui-error .MuiSelect-select': {
            border: '1px solid #f44336',
        },
    },
    input: {
        borderRadius: 0,
        border: '1px solid #EFEFEF',
        fontSize: 14,
        padding: '17.500px 14px 17.500px 19px',
        '&:hover': {
            border: '1px solid #1EAAFC',
        },
        '&:focus': {
            background: 'white',
            border: '1px solid #1EAAFC',
        },
    },
}))(InputBase);

export default function SelectInput ({ state, error, handler }) {
    const classes = useStyles();
    return (
        <FormControl
            variant="outlined"
            className={classes.select}
            {...(error && {error: true})}>
            <InputLabel htmlFor="select-amount">Amount to invest</InputLabel>
            <Select
                native
                value={state}
                onChange={handler}
                label="Amount to invest"
                input={<BootstrapInput />}
                inputProps={{
                    name: 'amountTier',
                    id: 'select-amount',
                }}
            >
                <option aria-label="None" value="" />
                <option value={1}>1000</option>
                <option value={2}>2500</option>
                <option value={3}>5000</option>
                <option value={4}>10000</option>
            </Select>

            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
