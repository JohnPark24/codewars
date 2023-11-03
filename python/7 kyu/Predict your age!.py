# My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

# In honor of my grandfather's memory we will write a function using his formula!

# Take a list of ages when each of your great-grandparent died.
# Multiply each number by itself.
# Add them all together.
# Take the square root of the result.
# Divide by two.
# Example
# predict_age(65, 60, 75, 55, 60, 63, 64, 45) == 86
# Note: the result should be rounded down to the nearest integer.

# Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

def predict_age(age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8):
    ages = [age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8]

    squared = [age ** 2 for age in ages]

    add = sum(squared)

    sqroot = add ** 0.5
    
    divide = sqroot / 2

    return int(divide)



import math

def predict_age(age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8):
    result = math.sqrt(sum(age ** 2 for age in [age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8])) / 2
    return int(result)



def predict_age(*ages):
    return sum(a*a for a in ages)**.5//2