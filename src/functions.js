function colour_mix(rgb_colour1, rgb_colour2) {
    const validColours = ["red", "green", "blue"];
    const c1 = rgb_colour1.toLowerCase();
    const c2 = rgb_colour2.toLowerCase();

    if (!validColours.includes(c1) || !validColours.includes(c2)) {
        return "Error";
    }

    if (c1 === c2) return c1;

    const combo = new Set([c1, c2]);

    if (combo.has("red") && combo.has("blue")) return "fuchsia";
    if (combo.has("red") && combo.has("green")) return "yellow";
    if (combo.has("green") && combo.has("blue")) return "aqua";

    return "Error";
}

function largest_product(val1, val2, val3) {
    const values = [val1, val2, val3].sort((a, b) => b - a);
    return values[0] * values[1];
}

function day_of_the_week(day_num) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (day_num < 1 || day_num > 7) {
        return "Error";
    }
    return days[day_num - 1];
}

function pay_raise(status, years, salary) {
    const s = status.toUpperCase();
    let raiseRate = 0;

    if (s === 'F') {
        if (years >= 10) raiseRate = 0.05;
        else if (years < 4) raiseRate = 0.015;
        else raiseRate = 0.02;
    } else if (s === 'P') {
        if (years > 10) raiseRate = 0.03;
        else if (years < 4) raiseRate = 0.01;
        else raiseRate = 0.02;
    } else {
        return "Error";
    }

    return parseFloat((salary + salary * raiseRate).toFixed(2));
}

function is_leap(year) {
    if (year <= 0) return false;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}

export {
    colour_mix,
    largest_product,
    day_of_the_week,
    pay_raise,
    is_leap
};
