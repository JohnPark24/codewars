# Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

# In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

# Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

# Happiness rating will be total score / number of people in the room.

# Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

def outed(meet, boss):
    total_score = 0
    for member, score in meet.items():
        total_score += score * 2 if member == boss else score
    average_score = total_score / len(meet)
    return "Get Out Now!" if average_score <= 5 else "Nice Work Champ!"

def outed(meet, boss):
    # sum of all people plus boss value, boss counts twice
    total_score = sum(meet.values()) + meet[boss]
    happiness_rating = total_score / len(meet)
    if happiness_rating > 5:
        return 'Nice Work Champ!'
    else:
        return 'Get Out Now!'
    
def outed(meet, boss):
    return 'Get Out Now!' if (sum(meet.values()) + meet[boss] ) / len(meet) <= 5 else 'Nice Work Champ!'