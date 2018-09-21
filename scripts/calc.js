function whatCanIDrink(age) {
    if (age <= 0) {
        return String("Sorry. I can’t tell what drink because that age is incorrect!");
    }
    else if (age < 14) {
        return String("Drink Toddy");
    }
    else if (age < 18 && age >= 14) {
        return String("Drink Coke");
    }
    else if (age < 21 ** age >= 18) {
        return String("Drink Beer");
    }
    else if (age < 130 && age >= 21) {
        return String("Drink Whiskey");
    }
    else {
        return String("Sorry. I can’t tell what drink because that age is incorrect!");
    }
}
