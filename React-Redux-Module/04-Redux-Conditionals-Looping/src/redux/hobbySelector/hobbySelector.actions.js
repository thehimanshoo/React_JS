export const CHECK_EATING = 'CHECK_EATING';
export const CHECK_CODING = 'CHECK_CODING';
export const CHECK_SLEEPING = 'CHECK_SLEEPING';

export const checkEating = () => {
    return {
        type : CHECK_EATING,
        payload : 'check Eating'
    }
};

export const checkCoding = () => {
    return {
        type : CHECK_CODING,
        payload : 'check Coding'
    }
};

export const checkSleeping = () => {
    return {
        type : CHECK_SLEEPING,
        payload : 'check Sleeping'
    }
};
