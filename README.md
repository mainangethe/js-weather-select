# Weather Select
This is a MDN project to help get more experience in using conditionals in JS.  
The objective of the project is to avail options to the user and based on their selection;
the page should display different content.

> [Visit Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

## Documentation
The project took me a total of: **2 Hours 30 Mins** to complete.

### HTML Overview
Here we've got an HTML `<select>` element allowing us to make different weather choices,
and a simple title and paragraph for response.  


### CSS Overview
Here we position the `<body>` element to be at the center of the page both vertically and horizontally.  We also add a background gradient.  



### JS Overview
In the JavaScript, we are storing a reference to:  

1. `<body>` element to manage the background and foreground color changes.
2. `<select>` element to monitor user selection
3. `<p>` element to update users based on selection.  

We have an event listener to the <select> element so that when its value is changed, the weatherSelect() function is run.  When this function is run, we first set a variable called 'user_choice' to the current value selected in the <select> element.  We then use a conditional statement to show different text inside the paragraph depending on what the value of choice is.  Notice how all the conditions are tested in `else if() {...}` blocks, except for the first one, which is tested in an `if() {...}` block.  The very last choice, inside the `else {...}` block, is basically a "last resort" option — the code inside it will be run if none of the conditions are true. In this case, it serves to empty the text out of the paragraph if nothing is selected, for example, if a user decides to re-select the "--Make a choice--" placeholder option shown at the beginning.
