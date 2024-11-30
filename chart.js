// map.js
am5.ready(function () {
    // Create root element
    let root = am5.Root.new("chartdiv2");

    // Set a theme
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
            panX: true,
            panY: false,
            wheelX: "none",
            wheelY: "none",
            layout: root.verticalLayout
        })
    );

    // Add Y-axis (categories)
    let yAxis = chart.yAxes.push(
        am5xy.CategoryAxis.new(root, {
            categoryField: "category",
            renderer: am5xy.AxisRendererY.new(root, {
                inversed: true, // Bars grow from the top
                minGridDistance: 20
            })
        })
    );

    // Add X-axis (values)
    let xAxis = chart.xAxes.push(
        am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererX.new(root, {}),
            min: 0
        })
    );

    // Add series (bars)
    let series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
            xAxis: xAxis,
            yAxis: yAxis,
            valueXField: "value",
            categoryYField: "category"
        })
    );

    // Add colorful bars
    series.columns.template.setAll({
        cornerRadiusTL: 5,
        cornerRadiusTR: 5,
        strokeOpacity: 0,
        tooltipText: "{category}: [bold]{valueX}[/]"
    });

    // Set colors for each bar
    series.columns.template.adapters.add("fill", function (fill, target) {
        return chart.get("colors").getIndex(series.dataItems.indexOf(target.dataItem));
    });

    // Sample dataset
    let presidentDataset = [
        { year: 1917, data: [{ category: "Wilson", value: 1 }] },
        { year: 1918, data: [{ category: "Wilson", value: 1 }] },
        { year: 1919, data: [{ category: "Wilson", value: 1 }] },
        { year: 1920, data: [{ category: "Wilson", value: 1 }] },
        { year: 1921, data: [{ category: "Wilson", value: 1 }] },
        { year: 1922, data: [{ category: "Wilson", value: 1 }] },
        { year: 1923, data: [{ category: "Wilson", value: 1 }] },
        { year: 1924, data: [{ category: "Wilson", value: 1 }] },
        { year: 1925, data: [{ category: "Wilson", value: 1 }] },
        { year: 1926, data: [{ category: "Wilson", value: 1 }] },
        { year: 1927, data: [{ category: "Wilson", value: 1 }] },
        { year: 1928, data: [{ category: "Wilson", value: 1 }] },
        { year: 1929, data: [{ category: "Wilson", value: 1 }] },
        { year: 1930, data: [{ category: "Wilson", value: 1 }] },
        { year: 1931, data: [{ category: "Wilson", value: 1 }] },
        { year: 1932, data: [{ category: "Wilson", value: 1 }] },
        { year: 1933, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 1 }] },
        { year: 1934, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 1 }] },
        { year: 1935, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 1 }] },
        { year: 1936, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 1 }] },
        { year: 1937, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 1 }] },
        { year: 1938, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 1 }] },
        { year: 1939, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 2 }] },
        { year: 1940, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 2 }] },
        { year: 1941, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }] },
        { year: 1942, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }] },
        { year: 1943, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }] },
        { year: 1944, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }] },
        { year: 1945, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }] },
        { year: 1946, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }] },
        { year: 1947, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }] },
        { year: 1948, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }] },
        { year: 1949, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }] },
        { year: 1950, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1950, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1951, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1952, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1953, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1954, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1955, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1956, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1957, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1958, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1959, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1960, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1961, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1962, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1963, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1964, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1965, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1966, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1967, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1968, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1969, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }] },
        { year: 1970, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 1 }] },
        { year: 1971, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }] },
        { year: 1972, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }] },
        { year: 1973, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }] },
        { year: 1974, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }] },
        { year: 1975, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }] },
        { year: 1976, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }] },
        { year: 1977, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }] },
        { year: 1978, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }] },
        { year: 1979, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 1 }] },
        { year: 1980, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }] },
        { year: 1981, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }] },
        { year: 1982, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }] },
        { year: 1983, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 1 }] },
        { year: 1984, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 2 }] },
        { year: 1985, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 4 }] },
        { year: 1986, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 5 }] },
        { year: 1987, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 5 }] },
        { year: 1988, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }] },
        { year: 1990, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 3 }] },
        { year: 1991, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 4 }] },
        { year: 1992, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }] },
        { year: 1993, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 2 }] },
        { year: 1994, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 7 }] },
        { year: 1995, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 10 }] },
        { year: 1996, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 11 }] },
        { year: 1997, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 13 }] },
        { year: 1998, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 14 }] },
        { year: 1999, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 15 }] },
        { year: 2000, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 16 }] },
        { year: 2001, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 4 }] },
        { year: 2002, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 4 }] },
        { year: 2003, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 6 }] },
        { year: 2004, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 8 }] },
        { year: 2005, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 8 }] },
        { year: 2006, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 11 }] },
        { year: 2007, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 12 }] },
        { year: 2008, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }] },
        { year: 2009, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 1 }] },
        { year: 2010, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 2 }] },
        { year: 2011, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 4 }] },
        { year: 2012, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 6 }] },
        { year: 2013, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 6 }] },
        { year: 2014, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 9 }] },
        { year: 2015, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 12 }] },
        { year: 2016, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 12 }] },
        { year: 2017, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 12 }, { category: "Trump", value: 1 }] },
        { year: 2018, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 12 }, { category: "Trump", value: 2 }] },
        { year: 2019, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 12 }, { category: "Trump", value: 5 }] },
        { year: 2020, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 12 }, { category: "Trump", value: 9 }] },
        { year: 2021, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 12 }, { category: "Trump", value: 9 }, { category: "Biden", value: 4 }] },
        { year: 2022, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 12 }, { category: "Trump", value: 9 }, { category: "Biden", value: 7 }] },
        { year: 2023, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 12 }, { category: "Trump", value: 9 }, { category: "Biden", value: 8 }] },
        { year: 2024, data: [{ category: "Wilson", value: 1 }, { category: "Franklin Roosevelt", value: 3 }, { category: "Truman", value: 1 }, { category: "Nixon", value: 2 }, { category: "Carter", value: 2 }, { category: "Reagan", value: 6 }, { category: "Bush (H.W.)", value: 5 }, { category: "Clinton", value: 17 }, { category: "Bush", value: 13 }, { category: "Obama", value: 12 }, { category: "Trump", value: 9 }, { category: "Biden", value: 9 }] }
    ];

    // Label for the year
    let yearLabel = chart.plotContainer.children.push(
        am5.Label.new(root, {
            text: "Year",
            fontSize: 24,
            fontWeight: "bold",
            x: am5.p50,
            centerX: am5.p50,
            y: -20
        })
    );

    // Animation variables
    let currentIndex = 0;
    let interval;

    // Function to update the chart with data from the current year
    function updateChart() {
        if (currentIndex >= presidentDataset.length) {
            clearInterval(interval); // Stop the interval when data runs out
            return;
        }

        let currentData = presidentDataset[currentIndex];

        // Update the year label
        yearLabel.set("text", "As of: " + String(currentData.year));

        // Update the chart data
        series.data.setAll(currentData.data);
        yAxis.data.setAll(currentData.data);

        currentIndex++;
    }

    // Initialize the chart with the first year's data
    updateChart();

    // Make chart responsive
    chart.appear(100, 0);

    // Function to start or restart the chart animation
    function startChart() {
        currentIndex = 0; // Reset the index to 0
        clearInterval(interval); // Clear any existing interval
        interval = setInterval(updateChart, 500); // Restart the animation
    }

    // Add replay button functionality
    document.getElementById("replayButton").addEventListener("click", startChart);

    // Start the chart animation initially
    interval = setInterval(updateChart, 100);
});