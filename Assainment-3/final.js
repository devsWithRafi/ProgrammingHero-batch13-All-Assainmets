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

// Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    // You have to write your code here
    if (typeof otp !== 'string') {
        return 'Invalid';
    } else if (
        !otp.startsWith('ph-') ||
        otp.trim().replaceAll(' ', '').length < 8
    ) {
        return false;
    } else {
        return true;
    }
}

// Problem-03: BCS Final Score Calculator
function finalScore(omr) {
    //write your code here
    if (typeof omr !== 'object') return 'Invalid'

    const { right, wrong, skip } = omr;
    const validateType = [right, wrong, skip].every((e) => typeof e === 'number')

    if(!validateType) return 'Invalid';
    const validateSum = [right, wrong, skip].reduce((s, e) => s + e, 0)
    
    if(validateSum !== 100) return 'Invalid';

    return Math.round(right - (wrong * 0.5))
}

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

// Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
    // You have to write your code here
    if (typeof str !== 'string' || str.replaceAll(' ', '').length < 1) {
        return 'Invalid';
    }

    const token = str.trim().replaceAll(' ', '').length;
    const words = str.split(' ');
    let longwords = words[0];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longwords.length) {
            longwords = words[i];
        }
    }

    return { longwords, token };
}
