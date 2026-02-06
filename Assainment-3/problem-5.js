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
