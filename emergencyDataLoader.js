// Function to load CSV data and return it as an array of objects
function loadCSVData(url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(csvData => {
            const parsedData = parseCSV(csvData);
            const formattedParsedData = formatMoreInfo(parsedData);
            console.log(formattedParsedData);  // Log parsed data to the console

            callback(formattedParsedData);
        });
}

function parseCSV(csv) {
    // Split CSV into lines and remove empty lines
    const lines = csv.split('\n').filter(line => line.trim() !== "");

    const result = [];
    const headers = lines[0].split(',').map(header => header.trim()); // Extract headers

    // Parse each line, considering quoted strings
    lines.slice(1).forEach((line, index) => {

        const values = [];
        let inQuotes = false;
        let currentField = "";

        for (let i = 0; i < line.length; i++) {
            let char = line[i];

            if (char === '"' && inQuotes) {
                inQuotes = false; // Closing quote
            } else if (char === '"' && !inQuotes) {
                inQuotes = true; // Opening quote
            } else if (char === ',' && !inQuotes) {
                // End of a field
                values.push(currentField.trim());
                currentField = "";
            } else {
                currentField += char; // Append character to the current field
            }
        }

        // Push the last field
        if (currentField) {
            values.push(currentField.trim());
        }

        // Map headers to values and create an entry
        const entry = {};
        headers.forEach((header, i) => {
            entry[header] = values[i] || ""; // If there's no value, use an empty string
        });

        result.push(entry);
    });

    return result;
}

function formatMoreInfo(parsedData) {
    if(!parsedData) return;
    parsedData.forEach((row) => {
        row.MoreInfo = row.MoreInfo.replace(/\\n\\n/g, "\n\n").split("\n\n");
    });

    return parsedData;
}