# uploads

I have a HTML, JavaScript, and css file that enables a user to upload CSV/Excel files and display their information in a table of my Homepage.

                 HTML
I have used HTML to collect the file with the use of an input tag and a button to detect/trigger the uploading of a file. I also implemented the div tag to display my message when the file is incorrect. Lastly on the HTML I used the table tag to display my excel content.

                     JavaScript
In JavaScript, I used a function getFileExtension that takes an argument as a filename. This function receive the file name and splits the splits the extension away from the original file name and returns the extension of the file.

My second function, I called it handleFiles because it handles the uploaded file. I have collected all the needed variables I needed so i can be able to check if the file has the mandatory extension that is required, I have used the collected variable which is the extension from the first function and the array with the required extensions to compare whether the user has the required format of an extension, Excel/CSV extension. If the condition is true then we collect the file and create a fileReader object and an event for onload to prechecks if the condition is true. If true, then it parses the file as CSV or uses the SheetJS library to parse it to Excel files so it can be read.

Third fuction i called it display becuase it displays data to my home page table. I used the parsed information to display the content of the files on my home page.

I had to create a variable for the button so we can manipulate actions of what must be done after clicking this button. I have used the event listner so when the button is clicked it calls  the handleFiles function to perform the whole concept of the goal I aimed to portray.

             CSS
I have used some of CSS properties to make up and the interface of my home page.

            jQuery
Well in my jQuery I have used the Data Table 
