import {
    colour_mix,
    largest_product,
    day_of_the_week,
    pay_raise,
    is_leap
} from './functions.js';

function Question1() {
    return (
        <section>
           <h2> 1. Write a function that takes two RGB colours and returns the mixed secondary colour.</h2>
            <h3>results</h3>
            <p>colour_mix(red, green) == {colour_mix("red", "green")}</p>
            <p>colour_mix(blue, red) == {colour_mix("blue", "red")}</p>
            <p>colour_mix(blue, blue) == {colour_mix("blue", "blue")}</p>
            <p>colour_mix(yellow, blue) == {colour_mix("yellow", "blue")}</p>
        </section>
    );
}

function Question2() {
    return (
        <section>
           <h2> 2. Write a function that returns the product of the two largest values from three numbers.</h2>
            <h3>results</h3>
            <p>largest_product(-8, 12, 20) == {largest_product(-8, 12, 20)}</p>
            <p>largest_product(5, 7, 3) == {largest_product(5, 7, 3)}</p>
            <p>largest_product(100, 1, 100) == {largest_product(100, 1, 100)}</p>
        </section>
    );
}

function Question3() {
    return (
        <section>
            <h2>3. Write a function that returns the name of the day for a number between 1 and 7.</h2>
            <h3>results</h3>
            <p>day_of_the_week(1) == {day_of_the_week(1)}</p>
            <p>day_of_the_week(4) == {day_of_the_week(4)}</p>
            <p>day_of_the_week(7) == {day_of_the_week(7)}</p>
            <p>day_of_the_week(9) == {day_of_the_week(9)}</p>
        </section>
    );
}

function Question4() {
    return (
        <section>
          <h2>  4. Write a function that calculates a new salary based on employment status and years of service.</h2>
            <h3>results</h3>
            <p>pay_raise(F, 2, 25000) == {pay_raise("F", 2, 25000)}</p>
            <p>pay_raise(F, 11, 50000) == {pay_raise("F", 11, 50000)}</p>
            <p>pay_raise(P, 3, 40000) == {pay_raise("P", 3, 40000)}</p>
            <p>pay_raise(P, 12, 60000) == {pay_raise("P", 12, 60000)}</p>
        </section>
    );
}

function Question5() {
    return (
        <section>
            <h2>5. Write a function that determines if a year is a leap year.</h2>
            <h3>results</h3>
            <p>is_leap(1999) == {is_leap(1999).toString()}</p>
            <p>is_leap(2000) == {is_leap(2000).toString()}</p>
            <p>is_leap(1900) == {is_leap(1900).toString()}</p>
            <p>is_leap(2024) == {is_leap(2024).toString()}</p>
        </section>
    );
}

export {
    Question1,
    Question2,
    Question3,
    Question4,
    Question5
};

