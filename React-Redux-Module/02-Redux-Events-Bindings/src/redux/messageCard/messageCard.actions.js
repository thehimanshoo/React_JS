export const GOOD_MORNING = 'GOOD_MORNING';
export const GOOD_AFTERNOON = 'GOOD_AFTERNOON';
export const GOOD_EVENING = 'GOOD_EVENING';

export let sayGoodMorning = () => {
    return {
        type : GOOD_MORNING,
        payload : 'Good Morning'
    }
};

export let sayGoodAfternoon = () => {
    return {
        type : GOOD_AFTERNOON,
        payload : 'Good Afternoon'
    }
};

export let sayGoodEvening = () => {
    return {
        type : GOOD_EVENING,
        payload : 'Good Evening'
    }
};
