// app.js
am5.ready(function() {
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

    // Sample data
    let bubbleData = [
        { name: "China", points: 4, longitude: 104.1954, latitude: 35.8617, details: "My mouth hasn't shut up about you since you kissed it. The idea that you may kiss it again is stuck in my brain, which hasn't stopped thinking about you since, well, before any kiss. And now the prospect of those kisses seems to wind me like when you slip on the stairs and one of the steps hits you in the middle of the back. The notion of them continuing for what is traditionally terrifying forever excites me to an unfamiliar degree. My mouth hasn't shut up about you since you kissed it. The idea that you may kiss it again is stuck in my brain, which hasn't stopped thinking about you since, well, before any kiss. And now the prospect of those kisses seems to wind me like when you slip on the stairs and one of the steps hits you in the middle of the back. The notion of them continuing for what is traditionally terrifying forever excites me to an unfamiliar degree. My mouth hasn't shut up about you since you kissed it. The idea that you may kiss it again is stuck in my brain, which hasn't stopped thinking about you since, well, before any kiss. And now the prospect of those kisses seems to wind me like when you slip on the stairs and one of the steps hits you in the middle of the back. The notion of them continuing for what is traditionally terrifying forever excites me to an unfamiliar degree. My mouth hasn't shut up about you since you kissed it. The idea that you may kiss it again is stuck in my brain, which hasn't stopped thinking about you since, well, before any kiss. And now the prospect of those kisses seems to wind me like when you slip on the stairs and one of the steps hits you in the middle of the back. The notion of them continuing for what is traditionally terrifying forever excites me to an unfamiliar degree. My mouth hasn't shut up about you since you kissed it. The idea that you may kiss it again is stuck in my brain, which hasn't stopped thinking about you since, well, before any kiss. And now the prospect of those kisses seems to wind me like when you slip on the stairs and one of the steps hits you in the middle of the back. The notion of them continuing for what is traditionally terrifying forever excites me to an unfamiliar degree. And we can keep going here and see how long it'll take us." },
        { name: "USA", points: 23, longitude: -95.7129, latitude: 37.0902, details: "some cute info" },
        { name: "Nicaragua", points: 2, longitude:-85.2072, latitude: 12.8654, details: "we'll see"}
    ];


    // Add data to bubble series
    bubbleData.forEach(data => {
        bubbleSeries.data.push({
            geometry: { type: "Point", coordinates: [data.longitude, data.latitude] },
            value: data.points,
            name: data.name,
            details: `${data.details}`
        });
    });

    // Create bubbles
    bubbleSeries.bullets.push(function(root, series, dataItem) {
        let container = am5.Container.new(root, {});

        // Add bubble circle
        let circle = container.children.push(
            am5.Circle.new(root, {
                radius: Math.log(dataItem.dataContext.value) * 5, // Scale bubble size
                tooltipText: `{name}: {value}`,
                fill: am5.color(0xc80815), // red for bubbles
                cursorOverStyle: "pointer"
            })
        );

        // Add interaction
        circle.events.on("click", function(ev) {
            let data = dataItem.dataContext;

            // Update the info box with details
            let infoBox = document.getElementById("infoBox");
            let infoContent = document.getElementById("infoContent");
            infoContent.innerHTML = `<strong>${data.name}</strong><br>${data.details}`;
            infoBox.style.display = "block"; // Show the info box
            document.getElementById("chartdiv").style.opacity = 0.5; // Reduce opacity of the map
        });


        return am5.Bullet.new(root, { sprite: container });
    });

    // Add zoom controls
    chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
    
    // Close button functionality
    document.getElementById("closeBtn").addEventListener("click", function() {
        document.getElementById("infoBox").style.display = "none"; // Hide the info box when close button is clicked
        document.getElementById("chartdiv").style.opacity = 1; // Reset map opacity
    });
});