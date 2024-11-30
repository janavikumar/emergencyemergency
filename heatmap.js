am5.ready(function () {
    // Create root element
    let root = am5.Root.new("chartdiv3");

    // Set themes
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    // Create chart
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        paddingLeft: 0,
        layout: root.verticalLayout
    }));

    // Create axes and their renderers
    var yRenderer = am5xy.AxisRendererY.new(root, {
        visible: false,
        minGridDistance: 20,
        inversed: true,
        minorGridEnabled: true
    });

    yRenderer.grid.template.set("visible", false);

    var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        renderer: yRenderer,
        categoryField: "type"
    }));

    var xRenderer = am5xy.AxisRendererX.new(root, {
        visible: false,
        minGridDistance: 30,
        opposite: true,
        minorGridEnabled: true
    });

    xRenderer.labels.template.set("rotation", -45); // Rotate labels by -45 degrees for better readability
    xRenderer.grid.template.set("visible", false);

    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        renderer: xRenderer,
        categoryField: "year"
    }));

    // Create series
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        calculateAggregates: true,
        stroke: am5.color(0xffffff),
        clustered: false,
        xAxis: xAxis,
        yAxis: yAxis,
        categoryXField: "year",
        categoryYField: "type",
        valueField: "value"
    }));

    series.columns.template.setAll({
        tooltipText: "{value}",
        strokeOpacity: 1,
        strokeWidth: 2,
        width: am5.percent(100),
        height: am5.percent(100)
    });

    series.columns.template.events.on("pointerover", function (event) {
        var di = event.target.dataItem;
        if (di) {
            heatLegend.showValue(di.get("value", 0));
        }
    });

    series.events.on("datavalidated", function () {
        heatLegend.set("startValue", series.getPrivate("valueHigh"));
        heatLegend.set("endValue", series.getPrivate("valueLow"));
    });

    // Set up heat rules
    series.set("heatRules", [{
        target: series.columns.template,
        min: am5.color(0xfffb77),
        max: am5.color(0xfe131a),
        dataField: "value",
        key: "fill"
    }]);

    // Add heat legend
    var heatLegend = chart.bottomAxesContainer.children.push(am5.HeatLegend.new(root, {
        orientation: "horizontal",
        endColor: am5.color(0xfffb77),
        startColor: am5.color(0xfe131a)
    }));

    // Set data
    var data = [{
        year: "1917",
        type: "Maritime",
        value: 49
    }, {
        year: "1933",
        type: "Economic",
        value: 546
    }, {
        year: "1939",
        type: "Military",
        value: 151
    }, {
        year: "1941",
        type: "Military",
        value: 131
    }, {
        year: "1950",
        type: "Military",
        value: 332
    }, {
        year: "1970",
        type: "Economic",
        value: 101
    }, {
        year: "1971",
        type: "Trade",
        value: 84
    }, {
        year: "1979",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "1980",
        type: "Sanctions",
        value: 12
    }, {
        year: "1983",
        type: "Trade",
        value: 2
    }, {
        year: "1984",
        type: "Trade",
        value: 15
    }, {
        year: "1985",
        type: "Sanctions",
        value: 58
    }, {
        year: "1985",
        type: "Sanctions",
        value: 74
    }, {
        year: "1986",
        type: "Sanctions",
        value: 224
    }, {
        year: "1988",
        type: "Sanctions",
        value: 28
    }, {
        year: "1990",
        type: "Trade",
        value: 36
    }, {
        year: "1990",
        type: "Arms",
        value: 48
    }, {
        year: "1991",
        type: "Sanctions",
        value: 36
    }, {
        year: "1992",
        type: "Sanctions",
        value: 132
    }, {
        year: "1993",
        type: "Sanctions",
        value: 116
    }, {
        year: "1993",
        type: "Arms",
        value: 12
    }, {
        year: "1994",
        type: "Trade",
        value: 2
    }, {
        year: "1994",
        type: "Trade",
        value: 80
    }, {
        year: "1994",
        type: "Sanctions",
        value: 2
    }, {
        year: "1994",
        type: "Sanctions",
        value: 103
    }, {
        year: "1994",
        type: "Arms",
        value: "Ongoing"
    }, {
        year: "1995",
        type: "Sanctions",
        value: 295
    }, {
        year: "1995",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "1996",
        type: "Maritime",
        value: "Ongoing"
    }, {
        year: "1997",
        type: "Sanctions",
        value: 232
    }, {
        year: "1997",
        type: "Sanctions",
        value: "Ongoing" 
    }, {
        year: "1998",
        type: "Sanctions",
        value: 59
    }, {
        year: "2000",
        type: "Sanctions",
        value: 144
    }, {
        year: "2001",
        type: "Trade",
        value: 36
    }, {
        year: "2001",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2001",
        type: "Trade",
        value: "Ongoing"
    }, {
        year: "2001",
        type: "Military",
        value: "Ongoing"
    }, {
        year: "2003",
        type: "Sanctions",
        value: 12
    }, {
        year: "2003",
        type: "Legal",
        value: 36
    }, {
        year: "2004",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2004",
        type: "Sanctions",
        value: 124
    }, {
        year: "2006",
        type: "Sanctions",
        value: 127
    }, {
        year: "2006",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2006",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2007",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2008",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2009",
        type: "Public Health",
        value: 12
    }, {
        year: "2010",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2011",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2011",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2012",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2012",
        type: "Sanctions",
        value: 35
    }, {
        year: "2014",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2014",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2014",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2015",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2015",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2015",
        type: "Sanctions",
        value: 84
    }, {
        year: "2017",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2018",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2018",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2019",
        type: "Military",
        value: 23
    }, {
        year: "2019",
        type: "Sanctions",
        value: "Ongoing"
    },{
        year: "2019",
        type: "Sanctions",
        value: "Ongoing"
    },{
        year: "2019",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2020",
        type: "Public Health",
        value: 36
    }, {
        year: "2020",
        type: "Sanctions",
        value: 9
    }, {
        year: "2020",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2020",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2021",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2021",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2021",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2021",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2007",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2022",
        type: "Seizure",
        value: "Ongoing"
    }, {
        year: "2022",
        type: "Security",
        value: "Ongoing"
    }, {
        year: "2022",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2023",
        type: "Sanctions",
        value: "Ongoing"
    }, {
        year: "2024",
        type: "Sanctions",
        value: "Ongoing"
    }
    ]

    series.data.setAll(data);

    // Auto-populate X and Y axis category data
    var types = [];
    var years = [];
    am5.array.each(data, function (row) {
        if (types.indexOf(row.type) == -1) {
            types.push(row.type);
        }
        if (years.indexOf(row.year) == -1) {
            years.push(row.year);
        }
    });

    yAxis.data.setAll(types.map(function (item) {
        return { type: item }
    }));

    xAxis.data.setAll(years.map(function (item) {
        return { year: item }
    }));

    chart.appear(1000, 100);
});