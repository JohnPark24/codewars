// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

function getOrder(input) {
    let capitalArray = input
    .replace(/burger/g, "Burger ")
    .replace(/fries/g, "Fries ")
    .replace(/chicken/g, "Chicken ")
    .replace(/pizza/g, "Pizza ")
    .replace(/sandwich/g, "Sandwich ")
    .replace(/onionrings/g, "Onionrings ")
    .replace(/milkshake/g, "Milkshake ")
    .replace(/coke/g, "Coke ")
    .trim()
    .split(" ")

    const order = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];

    function compareItems(item1, item2){
        const index1 = order.indexOf(item1)
        const index2 = order.indexOf(item2)
        return index1 - index2
    }

    return capitalArray.sort(compareItems).join(" ")
}