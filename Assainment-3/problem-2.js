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
