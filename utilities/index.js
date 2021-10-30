export const toggleStateValue = (value, fn) => {
    fn((add) => (add === value ? "" : value));
};
