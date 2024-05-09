
        $(document).ready(function() {
            $("body").addClass("hinge");
            $("h1").addClass("fadeout");
        });
        // Function to get file extension
        function getFileExtension(filename) {
            return filename.split(".").pop().toLowerCase();
        }

        // Function to display file contents
        function display() {
            let viewer = document.getElementById('portrayer');
            let table = document.getElementById('table');
            let fileName = document.getElementById("file").value;
            let extension = ["csv","xlsx","xlsm","xlsb","xltx","xltm","xlt","xls","xla","xlw","xlr"];
            let userExtension = getFileExtension(fileName);

            if(extension.includes(userExtension)) {
                const file = document.getElementById('file').files[0];
                const reader = new FileReader();

                reader.onload = function(event) {
                    const result = event.target.result;
                    // Logic to display file contents in a table
                    if (userExtension === 'csv') {
                        const rows = result.split('\n').map(row => row.split(','));
                        displayTable(rows);
                    } else {
                        // Handle Excel file using SheetJS library
                        const workbook = XLSX.read(result, { type: 'binary' });
                        const sheetName = workbook.SheetNames[0];
                        const sheet = workbook.Sheets[sheetName];
                        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                        displayTable(rows);
                    }
                };

                if (userExtension === 'csv') {
                    reader.readAsText(file);
                } else {
                    reader.readAsBinaryString(file);
                }
            } else {
                     viewer.textContent = "Incorrect file '" + userExtension + "' file is given, only EXCEL files are allowed"; 
            }

        }

        // Function to display table
        function displayTable(rows) 
        {
            let table = document.getElementById('table');
            table.innerHTML = "";

            rows.forEach(row => {
                const tr = document.createElement('tr');
                row.forEach(cell => {
                    const td = document.createElement('td');
                    td.textContent = cell.trim();
                    tr.appendChild(td);
                });
                table.appendChild(tr);
            });
        }
         let butt = document.getElementById("submit");
         butt.addEventListener("click",display);
   