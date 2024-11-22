// Function to load CSV data and return it as an array of objects
function loadCSVData(url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(csvData => {
            const parsedData = parseCSV(csvData);
            console.log(parsedData);  // Log parsed data to the console

            callback(parsedData);
        });
}

// Function to parse CSV into an array of objects
function parseCSV(csv) {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    lines.slice(1).forEach(line => {
        const data = line.split(',');
        const entry = {};

        headers.forEach((header, i) => {
            entry[header.trim()] = data[i].trim();
        });

        result.push(entry);
    });

    return result;
}