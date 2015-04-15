$(function(){    
    // taken from http://stackoverflow.com/questions/4413590/javascript-get-array-of-dates-between-2-dates
    Date.prototype.addDays = function(days) {
        var dat = new Date(this.valueOf())
        dat.setDate(dat.getDate() + days);
        return dat;
    }

    function getDates(startDate, stopDate) {
        var dateArray = new Array();
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            var dateString = currentDate.toISOString().slice(0,10);
            dateArray.push(dateString);
            currentDate = currentDate.addDays(7);
        }
        return dateArray;
    }
    
    function setupMIQ(){
        // setup dates
        var start = new Date("2014-01-01");
        var end = new Date();
        var range = getDates(start, end);

        // randomize MIQ scores with positive trend
        var miq = [];
        var current_miq = 0;
        for (var i=0; i<range.length;i++) {
            miq.push(current_miq);
            current_miq = Math.max(current_miq + Math.round(Math.random()*20 - 9), 0);
        }

        // setup c3 graph
        var chart = c3.generate({
            bindto: '#miq_chart',
            data: {
                x: 'x',
                columns: [
                    ['x'].concat(range),
                    ['MIQ'].concat(miq)
                ]
            },
            color: {
                pattern: ['#8E8CA3']
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d',
                        count: 10
                    },
                    label: {
                        text:"Date",
                        position: 'center'
                    }
                },
                y: {
                    label:{
                        text:"Musical IQ",
                        position: 'middle'
                    }
                }
            },
            legend:{
                position: 'inset'
            }
        });

        // update MIQ label
        $('#miq_value').html(miq[miq.length-1]);
    }


    // run setup stuff
    setupMIQ();
});
