import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginBottom: theme.spacing(4),
    },
    label: {
        margin: 0,
        '& p': {
            fontSize: 14,
            margin: 0,
            marginBottom: theme.spacing(1)
        },
        '& .link': {
            fontWeight: 700,
            color: "#1EAAFC"
        },
        '& .link:hover': {
            fontWeight: 700,
            color: "#50b7fc"
        },
        '.Mui-error + &': {
            '& .MuiIconButton-label span': {
                border: "1px solid red",
            }
        },
    },
    checkbox: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
        padding: 0,
        paddingRight: 10,
        alignSelf: 'flex-start',
    },
    icon: {
        width: 17,
        height: 17,
        backgroundColor: 'white',
        border: "1px solid #EFEFEF",
    },
    checkedIcon: {
        backgroundColor: "#1EAAFC",
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 17,
            height: 17,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
    },
}));
function StyledCheckbox(props) {
    const classes = useStyles();

    return (
        <Checkbox
            className={classes.checkbox}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            inputProps={{ 'aria-label': 'decorative checkbox' }}
            {...props}
        />
    )
}

export default function Checkboxes ({ agreement, subscription, name, label, state, errors, handler }) {
    const classes = useStyles();
    return (
        <FormControl component="fieldset" className={ classes.formControl } {...(errors[name] && {error: true})}>
            <FormGroup>
                {errors[name] && <FormHelperText>{errors[name]}</FormHelperText>}
                <FormControlLabel
                    className={classes.label}
                    control={<StyledCheckbox checked={agreement} onChange={handler} name="agreement" />}
                    label={<p>I certify that I am 18 years of age or older, and
                        I agree to the <span className="link">Terms of Service</span> and <span className="link">Privacy Policy</span>.</p>}
                />
                <FormControlLabel
                    className={classes.label}
                    control={<StyledCheckbox checked={subscription} onChange={handler} name="subscription" />}
                    label={<p>I would like to receive important information and periodic news updates.</p>}
                />
            </FormGroup>
        </FormControl>
    )
}
