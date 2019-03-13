module.exports = function getZerosCount(number, base) {
    let x = 0;
    const nBase = [];
    const step = [];
    for (let i = 2; i <= base; i++) {
        if (base % i === 0) {
            base /= i;
            nBase.push(i);
            step.push(1);
            while (base % i === 0) {
                step[x] += 1;
                base /= i;
            }
            x++;
        }
    }
    let zero = 0;
    for (let i = 0; i < nBase.length; i++) {
        let tmp_div = 0;
        for (let a = nBase[i]; a < number; a *= nBase[i]) {
            tmp_div += Math.floor(number / a);
        }
        tmp_div = Math.floor(tmp_div / step[i]);
        zero = zero === 0 ? tmp_div : zero > tmp_div ? tmp_div : zero ;
    }
    return zero;
}