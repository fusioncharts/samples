$(window).load(function(){FusionCharts.ready(function(){
    var myChart = new FusionCharts({
        type: 'scrollarea2d',
        dataFormat: 'json',
        renderAt: 'chart-container',
        width: '550',
        height: '350',
        dataSource: {
            "chart": {
                "caption": "Sales Trends",
                "subCaption": "(FY 2012 to FY 2013)",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "xAxisname": "Month",
                "pYAxisName": "Amount",
                "labelDisplay": "AUTO",
                "sYAxisName": "Employees",
                "numberPrefix": "$",
                "paletteColors": "#0075c2",
                "bgcolor": "#ffffff",
                "showBorder": "0",
                "showCanvasBorder": "0",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "showAxisLines": "0",
                "valueBgColor":"#FFFFFF",
                "valueBgAlpha":"50",
                "showAlternateHGridColor": "0",
                "divlineThickness": "1",
                "divLineIsDashed": "1",
                "divLineDashLen": "1",
                "divLineGapLen": "1",
                "numVisiblePlot": "8",
                "flatScrollBars": "1",
                "scrollheight": "10"
            },
            "categories": [
                {
                    "category": [
                        { "label": "Jan 2012" },
                        { "label": "Feb 2012" },
                        { "label": "Mar 2012" },
                        { "label": "Apr 2012" },
                        { "label": "May 2012" },
                        { "label": "Jun 2012" },
                        { "label": "Jul 2012" },
                        { "label": "Aug 2012" },
                        { "label": "Sep 2012" },
                        { "label": "Oct 2012" },
                        { "label": "Nov 2012" },
                        { "label": "Dec 2012" },
                        { "label": "Jan 2013" }, 
                        { "label": "Feb 2013" }, 
                        { "label": "Mar 2013" }, 
                        { "label": "Apr 2013" }, 
                        { "label": "May 2013" }, 
                        { "label": "Jun 2013" }, 
                        { "label": "Jul 2013" }, 
                        { "label": "Aug 2013" }, 
                        { "label": "Sep 2013" }, 
                        { "label": "Oct 2013" }, 
                        { "label": "Nov 2013" }, 
                        { "label": "Dec 2013" }
                    ]
                }],
            "dataset": [
                {
                    "data": [
                        { "value": "27400" },
                        { "value": "29800" },
                        { "value": "25800" },
                        { "value": "26800" },
                        { "value": "29600" },
                        { "value": "32600" },
                        { "value": "31800" },
                        { "value": "36700" },
                        { "value": "29700" },
                        { "value": "31900" },
                        { "value": "34800" },
                        { "value": "24800" },
                        { "value": "26300" },
                        { "value": "31800" },
                        { "value": "30900" },
                        { "value": "33000" },
                        { "value": "36200" },
                        { "value": "32100" },
                        { "value": "37500" },
                        { "value": "38500" },
                        { "value": "35400" },
                        { "value": "38200" },
                        { "value": "33300" },
                        { "value": "38300" }
                    ]
                }
            ]
        }
    }).render();
});});