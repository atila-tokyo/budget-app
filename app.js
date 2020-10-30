// const e = require("express");

//  BUDGET CONTROLLER
let budgetController = (() => {

    class Expense {
        constructor(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        }
    }    

    class Income {
        constructor(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        }
    }
    
    let expensesCollection = [];
    let incomesCollection = [];
    let summedExpenses = 0;

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    return {
        addItem: (type, des, val) => {
            let newItem, ID;

            //Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length-1].id + 1;
            } else  {
                ID = 0;
            }    
            //Create new item based on being income or expense
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            //Push into the specified data array
            data.allItems[type].push(newItem);
            //return it
            return newItem;
        }
    }
})();


/*******************************************************************************************************/
//  UI CONTROLLER
let UIController = (() => {

/* Object to save shortcuts to the DOM classes into variables
Making it easier to dynamically change and work around them */

    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

    return {
        getInput: () => {
            return {
            type: document.querySelector(DOMStrings.inputType).value,
            description: document.querySelector(DOMStrings.inputDescription).value,
            value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        addListItem: (obj, type) => {
            let html, newHtml, element;

        //Create an HTML string with placeholder text
        if (type = 'incomes') {

            element = DOMStrings.incomeContainer;

            html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        } else  if (type = 'expenses') {

            element = DOMStrings.expensesContainer;

            html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }

        //Replace the placeholder with real data
        newHtml = html.replace('%id%', obj.id);
        //since html was replaced for newHtml with new id, the next replace should be made in the newHtml
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', obj.value);

        //insert the HTML into the DOM
        
        document.querySelector(element).insertAdjacentElement('beforeend', newHtml);

        /*Create an object with a function that turns the DOMVariables object
        accessible from within other closures in the code */
        getDOMVariables: () => {
            return DOMStrings;
            }
        }
    }
})();


/*******************************************************************************************************/
//  GLOBAL APP CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {
    let eventListenersBox = () => {

        let DOM = UICtrl.getDOMVariables();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', ctrlAddItem);
    };
    //Create a variable that will evoke the method that makes the DOMVariables accessible


    let ctrlAddItem = () => {
     let input, newItem;
        // 1. GET THE FIELD INPUT DATA
        input = UICtrl.getInput();
     // 2. ADD THE ITEM TO THE BUDGET CONTROLLER
        newItem = budgetCtrl.addItem(input.type, input.des, input.val);  
     // 3. ADD ITEM TO THE UI
     // 4. CALCULATE THE BUDGET
     // 5. DISPLAY THE BUDGET IN THE UI
    };

    return {
// Create an initialization function to start the event listeners        
        init : () => {
            eventListenersBox();
        }
    };
})(budgetController, UIController);

// invoke the initialization function in the global scope to get the event listeners started
controller.init();