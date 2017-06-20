export default(state = [], payload) => {
    switch (payload.type) {
        case 'addAccount':
            return [...state, { balance: payload.balance }];
        default:
            return state;
    }
};