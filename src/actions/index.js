export const onSwitch = (userId) => {
    return {
        type: 'SWITCH',
        payload: userId
    }
}
