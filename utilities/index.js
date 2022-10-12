export const toggleStateValue = (value, fn) => {
    fn((add) => (add === value ? "" : value));
};


export const range = (value) => (
    [...new Array(value).keys()]
)