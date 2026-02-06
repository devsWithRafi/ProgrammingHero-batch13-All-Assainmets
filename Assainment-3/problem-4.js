// Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    //write your code here
    if (!Array.isArray(array) || array.length < 1) return 'Invalid';

    const ha = array.reduce(
        (s, e) => (e.toLowerCase() === 'ha' ? s + 1 : s + 0), 0);
        
    const na = array.reduce(
        (s, e) => (e.toLowerCase() === 'na' ? s + 1 : s + 0), 0);

    if (ha > na) return true;
    else if (ha === na) return 'equal';
    else return false;
}
