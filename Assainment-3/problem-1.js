// Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    // You have to write your code here
    const validateNumType = [currentPrice, discount].every(
        (n) => typeof n === 'number' || Number.isNaN(n),
    );
    if (!validateNumType) {
        return 'Invalid';
    } else if (discount < 0 || discount > 100) {
        return 'Invalid';
    } else {
        return (currentPrice - (currentPrice * discount) / 100).toFixed(3);
    }
}