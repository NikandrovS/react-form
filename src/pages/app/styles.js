import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        padding: "34px 218px 34px 32px",
        margin: "0 auto 44px",
        maxWidth: 668,
        border: "1px solid #1EAAFC",
    },
    box: {
        alignSelf: "flex-start",
        display: "flex",
        flexDirection: "column",
        marginBottom: 20,
        '& p': {
            fontSize: 30,
            lineHeight: "36px",
            letterSpacing: 0.75,
        }
    },
    userName: {
        color: "#909090",
        margin: "0 0 50px",
    },
    userPosition: {
        margin: 0,
        color: "#747474",
        marginBottom: 15,
    },
    avatar: {
        backgroundColor: "#D8D8D8",
        border: "1px solid #979797",
        marginRight: 80,
        width: 160,
        height: 160,
    },
    icon: {
        fontSize: 130,
    },
    label: {
        color: "#747474",
        fontSize: 16,
        lineHeight: "16px",
        '& .MuiFormControlLabel-label': {
            marginLeft: 8,
        },
    },
});
