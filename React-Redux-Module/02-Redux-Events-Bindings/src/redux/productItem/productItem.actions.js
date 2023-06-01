export const INCR_QTY = 'INCR_QTY';
export const DECR_QTY = 'DECR_QTY';

export let incrQty = () => {
    return {
        type : INCR_QTY
    }
};

export let decrQty = () => {
    return {
        type : DECR_QTY
    }
};

