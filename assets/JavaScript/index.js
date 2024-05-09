
        
            $(document).ready(function() {
                $('#table').DataTable({
                paging: true, // Enable pagination
                searching: false,  // Enable search functionality
                   ordering: true,

                });

            });

       
        function getFileExtension(filename) {
            return filename.split(".").pop().toLowerCase();
        }

        
        function handleFiles() {
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
                        display(rows);
                    } else {
                        // Handle Excel file using SheetJS library
                        const workbook = XLSX.read(result, { type: 'binary' });
                        const sheetName = workbook.SheetNames[0];
                        const sheet = workbook.Sheets[sheetName];
                        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                        display(rows);
                    }
                };

                if (userExtension === 'csv') {
                    reader.readAsText(file);
                } else {
                    reader.readAsBinaryString(file);
                }
            } else {
                     viewer.textContent = "Incorrect file .'" + userExtension + "' file is given, only EXCEL files are allowed"; 
            }

        }

        function display(rows) 
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
         butt.addEventListener("click",handleFiles);
   