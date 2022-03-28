# Work Day Scheduler Starter Code

Main Goal: This site should display a work day calender (9am - 5pm) with the ability to click each hour slot and add tasks that save to the users local storage. 

Feature Breakdown

1. Displaying current date
    Implementing this feature was easy since moment.js was already linked to the project stater code. Displaying the date was one simple line of code 
    consisting of a moment.js method call and a format() moment.js call chained to it. 

2. Displaying time blocks for standard buisness hours
    I wanted to challenge myself with this assignment and dynamically create all the timeblocks on the page. This was a good test of my 
    jquery knowledge, as well as how to use for loops, to iterate through and create html elements. 

3. Color coded timeblocks
    Okay so going into this assingment I wasn't worried about this feature at all. After all, its as easy as checking whether or not a certain time
    has passed or not, then changeing the elements color. Well let me tell you about how I spent 4 hours stubbornly trying to figure out how to get 
    regular time, saved as a string, in a jquery dynamically created element, without an id, to compare to in an if statement to check that logic. 
    Granted the whole time I knew that just adding id's to the time elements would have made this trivial, or just switching to full military time, or implementing 
    military time only on the back end, the list of solutions goes on. But I was commited to doing it my way. And after beating my head agaisnt the wall to figure 
    it out, the missing ingredient that I found was a js method called includes(). 

4. Clicking time blocks to change the text
    This was simple enough since this weeks lessons did almost exactly the same thing. I did have issues with the click listeners not firing correctly
    but this was remedied by making the declaration of the listener more lax, which was okay in this context since there were only so many elements with 
    the targeted class. 

5. Save tasks to local storage
    This was the one feature I was most worried about so I choose to tackle it first. Saving was easy enough once I understood how to save data with different key value pairs. 
    Using a structure where each time slot was the key to its task as a value made it much easier to sort through the data when it came time to load. Loading was actually one part
    that took me longer than most. But I figured out how to use fancy for loop syntax to loop through jquery elements and alter data which was the catylst
    of my aha moment with jquery. 


