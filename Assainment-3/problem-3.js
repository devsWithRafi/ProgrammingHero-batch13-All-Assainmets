// Problem-03: BCS Final Score Calculator
function finalScore(omr) {
    //write your code here
    if (typeof omr !== 'object') return 'Invalid'

    const { right, wrong, skip } = omr;
    const validateType = [right, wrong, skip].every((e) => typeof e === 'number')

    if(!validateType) return 'Invalid';
    const validateSum = [right, wrong, skip].reduce((s,e) => s+e,0)
    
    if(validateSum !== 100) return 'Invalid';

    return Math.round(right - (wrong * 0.5))
}
