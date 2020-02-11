export const initPolyfills = () => {
    if (!Array.prototype.findIndex) {
        require('array.prototype.findindex')
    }
}