const initialState = [
    {
        id: 0,
        name: "Phil Schiller",
        position: "Senior Vice President, Worldwide Marketing",
        vacation: true,
    },
    {
        id: 1,
        name: "Craig Federighi",
        position: "Senior Vice President, Software Engineering",
        vacation: false,
    },
    {
        id: 2,
        name: "Eddy Cue",
        position: "Senior Vice President, Internet Software and Services",
        vacation: false,
    },
]

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH':
            state[action.payload].vacation = !state[action.payload].vacation
            return state
        default: return state
    }
}

export default userReducer
