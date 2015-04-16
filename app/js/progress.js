$(function(){    
    var interval;
    var isSongSetup = false;
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

    function setupBars() {
        // generate random scores
        var scores = [];
        for (var i=0; i<4; i++) {
            scores.push(Math.round(Math.random()* (100 - 10) + 10));
        }
        
        var width = $('.score_bar_container').width();
        // update display
        for (var i=0; i<4; i++) {
            $('#score_bar_'+(i+1)).html(scores[i] + "%");
            $('#score_bar_'+(i+1)).animate({width: Math.round(scores[i]*width/100)+"px"}, 1000);
        }
    }
    
    function setupSong() {
        // setup audio files using audiojs
        audiojs.events.ready(function() {
            var as = audiojs.createAll();
        });


        // seutp song results chart using c3js
        var data = [];
        currentValue = Math.round(Math.random()*(75 - 25) + 25);
        for (var i=0; i<=100; i++) {
            data.push(currentValue);
            var rand = Math.random();
            if (rand>0.75){
                currentValue += Math.round(Math.random()*5)*5;
            } else if (rand < 0.25) {
                currentValue = Math.max(0, currentValue-Math.round(Math.random()*5)*5);
            }
        }
        
        var chart = c3.generate({
            bindto: '#song_chart',
            data: {
                columns: [
                    ['data1'].concat(data)
                    //['data2', 130, 100, 140, 200, 150, 50]
                ],
                types: {
                    data1: 'step',
                }
            }, 
            axis:{
                x: {
                    tick: {
                        count: 5
                    }
                }
            },
            color: {
                pattern: ['#8E8CA3']
            },
            legend: {
                position: 'inset'
            },
            interaction: {
                enabled: false
            },
            size: {
                width:$('.scrubber').width() + 50
            }
        });
    }

    // run setup stuff
    setupMIQ();
    setupBars();

    $('#songs_list > li').on('click', function() {
        $('#song_modal').modal('show');
    });

    $('#song_modal').on('shown.bs.modal', function (e) {
        if (!isSongSetup) {
            setupSong();
            isSongSetup = true;
        }
    });
    
    $('body').on('click','.play', function() {
        interval = setInterval(function(){
            var progressWidth = $('.progress').width();
            var offset = $('.progress').offset().left - $('.modal-body').offset().left;
            $("#song_line").css("left", (progressWidth+offset)+"px");
            $("#song_line").show();
        }, 100);
        
    });

    $('body').on('click', '.pause', function() {
        clearInterval(interval);
    });
});
