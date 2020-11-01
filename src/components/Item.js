import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onSwitch } from "../actions"
import { Card, Avatar, Box, Switch, FormControlLabel } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import useStyles from "../pages/app/styles"

const PurpleSwitch = withStyles({
    switchBase: {
        color: "#979797",
        '& + $track': {
            borderRadius: 5,
            backgroundColor: "rgba(151, 151, 151, 0.3)",
        },
        '&$checked': {
            color: "#1EAAFC",
        },
        '&$checked + $track': {
            borderRadius: 5,
            backgroundColor: "rgba(30, 170, 252, 0.3)",
        },
    },
    checked: {},
    track: {},
})(Switch);

export default function Item ({ user }) {
    const classes = useStyles();
    const [state, setState] = useState(user.vacation);

    const dispatch = useDispatch()
    const handleChange = event => {
        setState(event.target.checked)
        dispatch(onSwitch(user.id))
    }
    return (
        <Card className={classes.root} variant="outlined">
            <Avatar className={classes.avatar} alt="user_avatar">
                <AccountCircleIcon className={classes.icon} htmlColor='#80868B'/>
            </Avatar>
            <Box className={classes.box}>
                <p className={classes.userName}>{user.name}</p>
                <p className={classes.userPosition}>{user.position}</p>
                <FormControlLabel
                    control={<PurpleSwitch  checked={state} name="checked" onChange={handleChange} />}
                    className={classes.label}
                    label="On vacation"
                />
            </Box>
        </Card>
    )
}
