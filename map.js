// map.js
am5.ready(function () {
    // Root element
    let root = am5.Root.new("chartdiv");

    // Set a theme
    root.setThemes([am5themes_Animated.new(root)]);

    // Create the map chart
    let chart = root.container.children.push(
        am5map.MapChart.new(root, {
            projection: am5map.geoMercator()
        })
    );

    // Add polygon series (map background)
    let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldLow,
            fill: am5.color(0x1b1b1b),
            stroke: am5.color(0xfcc200),
            strokeWidth: 5 // Thicker border lines
        })
    );

    // Add bubble series
    let bubbleSeries = chart.series.push(
        am5map.MapPointSeries.new(root, {
            calculateAggregates: true,
        })
    );

    loadCSVData("emergencydata.csv", function (bubbleData) {
        bubbleData.forEach(data => {
            bubbleSeries.data.push({
                geometry: {
                    type: "Point",
                    coordinates: [parseFloat(data.Longitude), parseFloat(data.Latitude)]
                },
                value: parseFloat(data.Count),
                name: data.Country,
                baseInfo: data.BaseInfo,
                headers: String(data.Headers).split("!"),
                details: String(data.MoreInfo).split("!")
            });
        });

        // Create bubbles
        bubbleSeries.bullets.push(function (root, series, dataItem) {
            let container = am5.Container.new(root, {});
            let bubbleSize = Math.log(dataItem.dataContext.value) * 7;
            bubbleSize = bubbleSize < 1 ? 3 : bubbleSize;  // Ensure that bubbles are at least visible

            // Add bubble circle
            let circle = container.children.push(
                am5.Circle.new(root, {
                    radius: bubbleSize, // Scale bubble size
                    tooltipText: `{name}: {value}`,
                    fill: am5.color(0xc80815), // red for bubbles
                    cursorOverStyle: "pointer"
                })
            );

            // Add interaction
            circle.events.on("click", function (ev) {
                let data = dataItem.dataContext;

                // Arrays of headers and details
                let headers = data.headers; // Array of headers
                let details = data.details; // Array of corresponding details

                // Update the info box
                let infoBox = document.getElementById("infoBox");
                let infoTitle = document.getElementById("infoTitle");
                infoTitle.innerHTML = `<strong>${data.name}</strong>`;
                let infoContent = document.getElementById("infoContent");

                // Generate expandable headers with corresponding details
                let expandableContent = headers.map((header, index) => {
                    return `
                    <div style="margin-bottom: 10px;">
                        <h3 class="expandHeader" 
                            data-index="${index}" 
                            style="cursor: pointer; color: white; text-decoration: underline;">
                            ${header}
                        </h3>
                        <p class="detailsContent" 
                           id="details-${index}" 
                           style="display: none; margin-left: 20px;">
                           ${details[index]}
                        </p>
                    </div>
                    `;
                }).join("");

                // Add the generated content to the info box
                infoContent.innerHTML = `
                    <div>
                        ${data.baseInfo}
                        ${expandableContent}
                    </div>
                `;

                // Add click handlers for each header
                document.querySelectorAll(".expandHeader").forEach(headerElement => {
                    headerElement.addEventListener("click", function () {
                        let index = this.getAttribute("data-index"); // Get the index
                        let detailsElement = document.getElementById(`details-${index}`); // Corresponding details

                        // Toggle visibility of the details
                        if (detailsElement.style.display === "none") {
                            detailsElement.style.display = "block"; // Show the details
                            this.innerText = `${headers[index]} (Click to collapse)`; // Update header text
                        } else {
                            detailsElement.style.display = "none"; // Hide the details
                            this.innerText = headers[index]; // Reset header text
                        }
                    });
                });

                // Show the info box and adjust map opacity
                infoBox.style.display = "block";
                document.getElementById("chartdiv").style.opacity = 0.5; // Reduce opacity of the map
            });
            return am5.Bullet.new(root, { sprite: container });
        });
    });

    // Add zoom controls
    chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
    // })

    // Close button functionality
    document.getElementById("closeBtn").addEventListener("click", function () {
        document.getElementById("infoBox").style.display = "none"; // Hide the info box when close button is clicked
        document.getElementById("chartdiv").style.opacity = 1; // Reset map opacity
    });
});