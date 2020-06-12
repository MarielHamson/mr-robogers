# _Project Robot Translator_

#### _Web app that translates numbers to Mr. Roboger's native language, 6.12.2020_

#### By _**Mariel Hamson**_

## Description

_This project will take user submitted numbers and return a list of all numbers from zero to that number (inclusive, integers only) and also employ a substition code based on replacing certain numbers with robot-sounding words. This project was completed for Epicodus code camp to showcase Arrays and Looping. Here are the specs:_

| Behavior | Input | Output|
|----------|-------|-------|
| The user enters a number and receives back a list of numbers ranging from 0 to the number inputted | 4 | 0, 1, 2, 3, 4 |
| The user is asked for their name before being asked for a number and the name is inserted in the response | Mars | "Dear Mars: [coded response] |
| The user enters a number that is or contains the number 1, the entire number will be replaced by "Beep!". | 1 | 0, Beep!
| The user enters a number that is or contains the number 2, the entire number will be replaced by "Boop!".| 2 | 0, Beep!, Boop! |
| The user enters a number that is or contains the number 3, the entire number will be replaced by "Won't you be my neighbor?".| 3 | 0, Beep!, Boop!, Won't you be my neighbor? |
| The user enters a number which contains multiple digits above, the larger number's rule will supercede all others | 13 | 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor? |
| The user enters a number and clicks "Reverse it" | 5 | 5, 4, Won't you be my neighbor?, Boop!, Beep!, 0 |
---



## Setup/Installation Requirements

### Via GitHub (preferred method for viewing raw code)
* _Navigate to Mariel Hamson's GitHub page at: www.github.com/MarielHamson_
* _click on Repositories_
* _Find or search for the repository called mr-robogers_
* _Click Clone or Download_
* _if you are familiar with cloning repositories, feel free to do so. Otherwise, click Download to Desktop_
* Open the file on your desktop, and open the index.html file with your browser to see it rendered, or open any of the files you wish to view with a code editor of your choice. 

### Via Browser 
* _Navigate to https://MarielHamson.github.io/mr-robogers to see the web app in browser_
* _You can right-click anywhere on the page, choose Inspect and open the Elements tab in order to view the code._


## Known Bugs

_Page rendering issue: If the user enters a large number, all content may not fit on the viewport and the user is not able to scroll to see it. Likely CSS property overriding overflow control_

_Possible workaround: resize screen to allow all content to fit on screen (closing any panes such as DevTools)_

## Support and contact details

_Please reach out to me at mariel.hamson@gmail.com if you have any questions, comments, or suggestions_

## Technologies Used

_HTML, CSS (Bootstrap), Javascript(jQuery)_

### License

*MIT License*

Copyright (c) 2020 **_Mariel Hamson_**