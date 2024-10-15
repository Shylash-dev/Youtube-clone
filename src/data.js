export const API_KEY = 'AIzaSyCW-MJjpwB-h44D3r1aeCIdsGHgkPZSR_0';

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    }
    else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    }
    else {
        return value;
    }
}