# uploads

I have a HTML, JavaScript, and css file that enables a user to upload CSV/Excel files and display their information in a table of my Homepage.

                 HTML
I have used HTML to collect the file with the use of an input tag and a button to detect/trigger the uploading of a file. I also implemented the div tag to display my message when the file is incorrect. Lastly on the HTML I used the table tag to display my excel content.

                     JavaScript
In JavaScript, I used a function getFileExtension that takes an argument as a filename. This function receive the file name and splits the splits the extension away from the original file name and returns the extension of the file.

My second function, I called it handleFiles because it handles the uploaded file. I have collected all the needed variables I needed first gets the selected file's name and extension, then checks if the extension is one of the supported types (CSV or Excel formats).
If the file extension is supported, it creates a new FileReader object and sets up an event listener for the onload event. When the file is loaded, it checks the extension again and either parses the file as CSV or uses the SheetJS library to parse Excel files.
The displayTable function is defined to display the parsed data in a table on the webpage.
Finally, an event listener is added to the upload button to trigger the display function when clicked.
In summary, this code provides a simple interface for users to upload CSV or Excel files and displays their contents in a table on the webpage. The SheetJS library is used to handle Excel files, while CSV files are parsed using built-in JavaScript functions.


