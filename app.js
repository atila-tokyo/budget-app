//  BUDGET CONTROLLER
let budgetController = (function() {
    //CODE
})();

//  UI CONTROLLER
let UIControler = (function() {
    return {
        getInput: () => {
            return {
            type: document.querySelector('.add__type').value,
            description: document.querySelector('.add__description').value,
            value: document.querySelector('.add__value')
            }
        }
    }
})();


//  GLOBAL APP CONTROLLER
let controller = (function(budgetControl, UIControl) {

    let addItemControl = () => {
         // 1. GET THE FIELD INPUT DATA
         let input = UIControl.getInput();
        // 2. ADD THE ITEM TO THE BUDGET CONTROLLER
        // 3. ADD ITEM TO THE UI
        // 4. CALCULATE THE BUDGET
        // 5. DISPLAY THE BUDGET IN THE UI
    }

    document.getElementsByClassName('add__btn').addEventListener('click', addItemControl);

    document.addEventListener('keypress', addItemControl);
})(budgetController, UIControler);