import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const ColorButton = withStyles({
    root: {
        backgroundColor: "#1EAAFC",
        '&:hover': {
            backgroundColor: "#50b7fc",
        },
        alignSelf: "center",
        fontWeight: "700",
        letterSpacing: "3px",
        boxShadow: "none",
        borderRadius: 0,
        padding: "10px 15px",
    },
})(Button);

export default function ButtonSubmit () {
    return (
        <ColorButton type={'submit'} variant="contained" color="primary" >
            Create Account
        </ColorButton>
    )
}
