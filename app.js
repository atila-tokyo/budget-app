//  BUDGET CONTROLLER
let budgetController = (function() {
    //CODE
})();

//  UI CONTROLLER
let UIController = (function() {

/* Object to save shortcuts to the DOM classes into variables
Making it easier to dynamically change and work around them */

    let DOMVariables = {
        typeInput: '.add__type',
        descriptionInput: '.add__description',
        valueInput: '.add__value',
        buttonInput: '.add__btn'
    };
    
    return {
        getInput: () => {
            return {
            type: document.querySelector(DOMVariables.typeInput).value,
            description: document.querySelector(DOMVariables.descriptionInput).value,
            value: document.querySelector(DOMVariables.valueInput).value
            };
        },
        /*Create an object with a function that turns the DOMVariables object
        accessible from within other closures in the code */
        getDOMVariables: () => {
            return DOMVariables;
        }
    }
})();


//  GLOBAL APP CONTROLLER
let controller = (function(budgetControl, UIControl) {

    //Create a variable that will evoke the method that makes the DOMVariables accessible
    let DOM = UIControl.getDOMVariables();

    let addItemControl = () => {
         // 1. GET THE FIELD INPUT DATA
         let input = UIControl.getInput();
         console.log(input);
        // 2. ADD THE ITEM TO THE BUDGET CONTROLLER
        // 3. ADD ITEM TO THE UI
        // 4. CALCULATE THE BUDGET
        // 5. DISPLAY THE BUDGET IN THE UI
    }

    document.querySelector(DOM.buttonInput).addEventListener('click', addItemControl);

    document.addEventListener('keypress', addItemControl);
})(budgetController, UIController);