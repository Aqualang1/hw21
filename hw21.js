function Boo() {
    const result = {
        value: 0,
        done: false
    }

    let n = 0;

    return {
        next() {
            ++n;
            if (n == 1) {
                console.log('start');
                result.value = n;
            } else if (n == 4) {
                console.log('finish');
                result.value = undefined;
                result.done = true;
            } else if (n >= 0 && n <= 3) {
                result.value = n;
            } else {
                result.value = undefined;
            }
            return result;
        }
    }
}

const iterator = Boo();