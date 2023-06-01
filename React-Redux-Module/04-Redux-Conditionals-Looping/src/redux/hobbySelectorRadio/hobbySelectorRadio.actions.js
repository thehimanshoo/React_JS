export const SELECT_EATING = 'SELECT_EATING';
export const SELECT_CODING = 'SELECT_CODING';
export const SELECT_SLEEPING = 'SELECT_SLEEPING';

export const selectEating = (value) => {
    return {
        type : SELECT_EATING,
        payload : value
    }
};

export const selectCoding = (value) => {
    return {
        type : SELECT_CODING,
        payload : value
    }
};

export const selectSleeping = (value) => {
    return {
        type : SELECT_SLEEPING,
        payload : value
    }
};
