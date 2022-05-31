//Test.assertEquals(feast("great blue heron", "garlic naan"), true)
//Test.assertEquals(feast("chickadee", "chocolate cake"), true)
//Test.assertEquals(feast("brown bear", "bear claw"), false)

function feast(beast, dish) {
    return beast.slice(0,1) === dish.slice(0,1) && beast.slice(-1) === dish.slice(-1)
}