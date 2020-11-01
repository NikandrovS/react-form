import React from "react";
import { useHistory  } from "react-router-dom";
import { Grid } from '@material-ui/core';

import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import PasswordInput from "../../components/PasswordInput";
import Checkboxes from "../../components/Checkboxes";
import ButtonSubmit from "../../components/ButtonSubmit";

export default function Form () {
    const history = useHistory();
    const [state, setState] = React.useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        amountTier: '',
        password: '',
        passwordConfirm: '',
        email: '',
        emailConfirm: '',
        agreement: false,
        subscription: false,
    });

    const [errors, setErrors] = React.useState(false)

    const onSubmit = e => {
        e.preventDefault()
        if (validate()) {
            history.push("/app");
        }
    }
    const validate = () => {
        let temp = {}
        temp.firstName = !state.firstName ? "This filed is required." : state.firstName.length < 2 ? "At least 2 chars." : state.firstName.length > 12 ? "Max 12 chars." : "";
        temp.lastName = !state.lastName ? "This filed is required." : state.lastName.length < 2 ? "At least 2 chars." : state.lastName.length > 12 ? "Max 12 chars." : "";
        temp.phoneNumber = !state.phoneNumber ? "This filed is required." : state.phoneNumber.length < 2 ? "At least 2 chars." : state.phoneNumber.length > 12 ? "Max 12 chars." : "";
        temp.amountTier = !state.amountTier ? "This filed is required." : "";
        temp.password = !state.password ? "This filed is required." : state.password.length < 8 ? "At least 8 chars." : "";
        temp.passwordConfirm = state.password !== state.passwordConfirm ? "Password fields do not match." : "";
        temp.email = !state.email ? "This filed is required." : state.email.length < 2 ? "At least 2 chars." : state.email.length > 12 ? "Max 12 chars." : "";
        temp.emailConfirm = state.email !== state.emailConfirm ? "Email fields do not match." : "";
        temp.agreement = !state.agreement ? "You didn't admit." : "";
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x === "")
    }
    const handleChange = (event) => {
        if (event.target.type === 'checkbox') {
            setState({ ...state, [event.target.name]: event.target.checked });
        } else {
            setState({ ...state, [event.target.name]: event.target.value });
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <h1><span>Sign</span> up</h1>
            <Grid container spacing={0}>
                <Grid item xs style={{ marginRight: "10px"}}>
                    <TextInput name={"firstName"} label={"First Name"} state={state} errors={errors} handler={handleChange} />
                </Grid>
                <Grid item xs>
                    <TextInput name={"lastName"} label={"Last Name"} state={state} errors={errors} handler={handleChange} />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs style={{ marginRight: "10px"}}>
                    <TextInput name={"phoneNumber"} label={"Phone Number"} state={state} errors={errors} handler={handleChange} />
                </Grid>
                <Grid item xs>
                    <SelectInput state={state.amountTier} error={errors.amountTier} handler={handleChange}/>
                </Grid>
            </Grid>

            <TextInput name={"email"} label={"Email Address"} state={state} errors={errors} handler={handleChange} />
            <TextInput name={"emailConfirm"} label={"Confirm Email Address"} state={state} errors={errors} handler={handleChange} />

            <PasswordInput name={"password"} state={state} errors={errors} handler={handleChange} />
            <PasswordInput name={"passwordConfirm"} state={state} errors={errors} handler={handleChange} />

            <Checkboxes
                agreement={state.agreement}
                subscription={state.subscription}
                name={"agreement"}
                label={"Confirm Email Address"}
                state={state}
                errors={errors}
                handler={handleChange}
            />
            <ButtonSubmit />
        </form>
    )
}
