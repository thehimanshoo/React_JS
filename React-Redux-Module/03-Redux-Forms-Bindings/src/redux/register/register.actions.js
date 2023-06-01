export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = (user) => {
    return {
        type : REGISTER_USER,
        payload : user
    }
};

