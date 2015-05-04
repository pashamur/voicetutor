$(function(){

    var numDisplayLines = 2; // Number of lines to do the karaoke with
    var timings = [
        [1.35,3.07,[[0,"What "],[0.07,"is "],[0.28,"love"]]],
        [3.07,5.26,[[0,"Baby, "],[0.18,"don't "],[0.4,"hurt "],[0.79,"me"]]],
        [5.26,6.94,[[0,"Don't "],[0.16,"hurt "],[0.65,"me"]]],
        [7.14,8.35,[[0,"no "],[0.22,"more"]]],
        [10.53,12.99,[[0,"Baby, "],[0.46,"don't "],[0.74,"hurt "],[1.22,"me"]]],
        [12.99,14.83,[[0,"Don't "],[0.2,"hurt "],[0.71,"me"]]],
        [14.83,16.11,[[0,"no "],[0.3,"more"]]],
        [24.34,26.19,[[0,"What "],[0.21,"is "],[0.45,"love"]]],
        [32.63,33.59,[[0,"Ye"],[0.18,"-eah"]]],
        [41.53,43.28,[[0,"I "],[0.24,"don't "],[0.72,"know"]]],
        [43.47,45.21,[[0,"you're "],[0.26,"not "],[0.73,"there"]]],
        [45.45,46.86,[[0,"I "],[0.21,"give "],[0.3,"you "],[0.45,"my "],[0.69,"love"]]],
        [46.86,48.85,[[0,"but "],[0.12,"you "],[1.02,"don't "],[1.26,"care"]]],
        [49.09,50.78,[[0,"So "],[0.23,"what "],[0.5,"is "],[0.98,"right"]]],
        [51.28,53,[[0,"what "],[0.23,"is "],[0.72,"wrong"]]],
        [53.2,55.31,[[0,"Give "],[0.26,"me "],[0.5,"a "],[0.74,"sign"]]],
        [55.39,56.62,[[0,"What "],[0.24,"is "],[0.5,"love"]]],
        [57.08,58.78,[[0,"Baby, "],[0.49,"don't "],[0.74,"hurt "],[1.22,"me"]]],
        [59.51,60.72,[[0,"Don't "],[0.24,"hurt "],[0.72,"me"]]],
        [61.43,62.41,[[0,"no "],[0.26,"more"]]],
        [63.15,64.59,[[0,"What "],[0.22,"is "],[0.47,"love"]]],
        [64.83,66.53,[[0,"Baby, "],[0.48,"don't "],[0.74,"hurt "],[1.19,"me"]]],
        [67.27,68.69,[[0,"Don't "],[0.25,"hurt "],[0.72,"me"]]],
        [69.18,70.15,[[0,"no "],[0.24,"more"]]],
        [103.59,105.02,[[0,"I "],[0.24,"don't "],[0.71,"know"]]],
        [105.18,106.97,[[0,"What "],[0.33,"can "],[0.6,"I "],[1.07,"do"]]],
        [107.34,108.92,[[0,"What "],[0.11,"else "],[0.37,"can "],[0.61,"I "],[0.85,"say"]]],
        [108.92,110.85,[[0,"it's "],[0.25,"up "],[0.97,"to "],[1.21,"you"]]],
        [111.31,112.78,[[0,"I "],[0.11,"know "],[0.27,"we're "],[0.73,"one"]]],
        [113.03,114.72,[[0,"just "],[0.24,"me "],[0.45,"and "],[0.98,"you"]]],
        [115.09,117.38,[[0,"I "],[0.12,"can't "],[0.6,"go "],[0.86,"on"]]],
        [117.39,118.82,[[0,"What "],[0.25,"is "],[0.49,"love"]]],
        [119.07,121.02,[[0,"Baby, "],[0.49,"don't "],[0.74,"hurt "],[1.23,"me"]]],
        [121.52,122.71,[[0,"Don't "],[0.22,"hurt "],[0.47,"me"]]],
        [123.45,124.41,[[0,"no "],[0.24,"more"]]],
        [125.12,126.72,[[0,"What "],[0.25,"is "],[0.52,"love"]]],
        [126.83,128.65,[[0,"Baby, "],[0.47,"don't "],[0.74,"hurt "],[1.2,"me"]]],
        [129.25,130.59,[[0,"Don't "],[0.25,"hurt "],[0.76,"me"]]],
        [131.2,132.17,[[0,"no "],[0.23,"more"]]],
        [148.39,149.96,[[0,"What "],[0.26,"is "],[0.48,"love"]]],
        [156.14,157.72,[[0,"What "],[0.23,"is "],[0.49,"love"]]],
        [163.89,165.59,[[0,"What "],[0.25,"is "],[0.49,"love"]]],
        [165.59,167.82,[[0,"Baby, "],[0.49,"don't "],[0.69,"hurt "],[1.17,"me"]]],
        [168,169.97,[[0,"Don't "],[0.24,"hurt "],[0.64,"me"]]],
        [169.97,171.09,[[0,"no "],[0.24,"more"]]],
        [181.8,183.26,[[0,"Don't "],[0.26,"hurt "],[0.73,"me"]]],
        [185.67,187.15,[[0,"Don't "],[0.26,"hurt "],[0.74,"me"]]],
        [188.82,190.76,[[0,"I "],[0.13,"want "],[0.49,"no "],[0.75,"other"]]],
        [190.76,192.58,[[0,"no "],[0.25,"other "],[0.74,"lover"]]],
        [192.96,194.53,[[0,"This "],[0.23,"is "],[0.49,"your "],[0.97,"life"]]],
        [194.9,196.09,[[0,"our "],[0.48,"time"]]],
        [196.45,198.41,[[0,"When "],[0.14,"we "],[0.41,"are "],[0.86,"together,"]]],
        [198.41,200.45,[[0,"I "],[0.12,"need "],[0.36,"you "],[0.59,"forever"]]],
        [200.71,202.63,[[0,"Is "],[0.22,"it "],[0.6,"love?"]]],
        [202.63,204.22,[[0,"What "],[0.26,"is "],[0.49,"love"]]],
        [204.32,206.51,[[0,"Baby, "],[0.49,"don't "],[0.75,"hurt "],[1.24,"me"]]],
        [206.76,208.46,[[0,"Don't "],[0.24,"hurt "],[0.73,"me"]]],
        [208.69,209.66,[[0,"no "],[0.24,"more"]]],
        [210.38,212.08,[[0,"What "],[0.25,"is "],[0.49,"love"]]],
        [212.08,214.02,[[0,"Baby, "],[0.48,"don't "],[0.72,"hurt "],[1.23,"me"]]],
        [214.49,215.84,[[0,"Don't "],[0.27,"hurt "],[0.74,"me"]]],
        [216.45,217.41,[[0,"no "],[0.24,"more"]]],
        [218.38,219.35,[[0,"Ye"],[0.35,"-eah"]]],
        [233.63,235.21,[[0,"What "],[0.24,"is "],[0.5,"love"]]],
        [235.33,237.15,[[0,"Baby, "],[0.5,"don't "],[0.74,"hurt "],[1.17,"me"]]],
        [237.75,239.09,[[0,"Don't "],[0.28,"hurt "],[0.69,"me"]]],
        [239.7,240.67,[[0,"no "],[0.24,"more"]]],
        [241.39,243.08,[[0,"What "],[0.25,"is "],[0.48,"love"]]],
        [243.08,245.01,[[0,"Baby, "],[0.5,"don't "],[0.73,"hurt "],[1.18,"me"]]],
        [245.5,246.86,[[0,"Don't "],[0.24,"hurt "],[0.67,"me"]]],
        [247.45,248.41,[[0,"no "],[0.23,"more"]]],
        [250.82,252.66,[[0,"Baby, "],[0.51,"don't "],[0.75,"hurt "],[1.2,"me"]]],
        [253.26,254.96,[[0,"Don't "],[0.26,"hurt "],[0.66,"me"]]],
        [255.19,256.18,[[0,"no "],[0.25,"more"]]],
        [258.57,260.76,[[0,"Baby, "],[0.49,"don't "],[0.76,"hurt "],[1.23,"me"]]],
        [260.99,262.7,[[0,"Don't "],[0.27,"hurt "],[0.68,"me"]]],
        [262.95,263.9,[[0,"no "],[0.25,"more"]]],
        [264.65,268,[[0,"What "],[0.22,"is "],[0.47,"love?"]]]
    ];
    var musicFilename = 'what_is_love';
    var musicPath = 'sounds/' + musicFilename + '.mp3';

    var isScrubbing = false;
    var wasPaused = false;
    var show = null;
    var player = null;
    var scrubber = null;
    var lastPosition = 0;
    var isSongSetup = false;
    var isRecording = false;
    var score = 60;

    function updateScoreBar() {
    	var change = Math.floor((Math.random() * 5) - 2);
    	var up = Math.floor((Math.random() * 6) + 1);
    	if (up == 1) {
            score += change;
    		$('.progress-bar').css('width', score+'%').attr('aria-valuenow', score);
    		$('#score').html(score + "%");
    	}
    }

    function getTimeString(t) {
        var min = Math.floor(t / 60);
        var secs = Math.floor(t % 60);
        return min + ':' + (secs < 10 ? '0' : '') + secs;
    }

    function changePosition(percent) {
        if (player != null) {
            var duration = player.loaded ? player.duration : player.durationEstimate;
            var position = duration * percent / 100;
            player.setPosition(position);
        }
    }

    function updateControls() {
        if (isScrubbing) {
            $('#play-button-icon').attr('disabled', 'disabled');
        } else {
            $('#play-button-icon').removeAttr('disabled');
        }

        updateStatus();
    }

    function updateStatus() {
        var duration = player.loaded ? player.duration : player.durationEstimate;
        $('#status').text(getTimeString(player.position / 1000) + ' / ' + 
            getTimeString(duration / 1000));
    }

    function setup() {
        $('#loading-dialog').hide();
        $('#player').show();
        $('#play-button').click(function(e) {
            player.togglePause();
            if (!isRecording) {
                $("#play-button").html('<span id="play-button-icon" class="glyphicon glyphicon-stop" aria-hidden="true"></span>&nbsp;Stop recording');
                $("#recording-signal").css("display", "inline-block");
                canvasPlay();
                isRecording = true;
            } else {   
                canvasPause();
                $('#song_modal').modal('show');
                $('#play-button').html('<span id="play-button-icon" class="recording-icon" aria-hidden="true"></span>&nbsp;&nbsp;Start recording!');
            }
        });
        updateControls();
    }

    function init() {
        // Create the karaoke engine and get a show instance
        var karaoke = new RiceKaraoke(RiceKaraoke.simpleTimingToTiming(timings));
        var renderer = new SimpleKaraokeDisplayEngine('karaoke-display', numDisplayLines);
        show = karaoke.createShow(renderer, numDisplayLines);

        $('#loading-message').text("Initial buffering, please wait...");

        // Create the scrubber
        scrubber = $("#scrubber").slider({
            max: 100,
            min: 0,
            step: .001,
            start: function(event, ui) {
                isScrubbing = true;
                wasPaused = player.paused;
                player.pause();
            },
            stop: function(event, ui) {
                changePosition(ui.value);
                isScrubbing = false;
                if (!wasPaused) {
                    player.resume();
                }
            },
            slide: function(event, ui) {
                changePosition(ui.value);
            }
        });

        // Create sound player
        player = soundManager.createSound({
            id: 'karaokeSound',
            url: musicPath,
            volume: 100,
            stream: true,
            autoPlay: false,
            onload: function(success) {
                if (this.readyState == 2) {
                    alert('Failed to play the music file!');
                }
            },
            onstop: function() {
                //updateControls();
                console.log("stop");
            },
            onpause: function() {
                //updateControls();
                console.log("pause");
    		},
            onresume: function() {
                updateControls();
            },
            onfinish: function() {
                console.log("finish");
                this.play();
                this.pause();
                this.setPosition(0);
                updateControls();
            },
            whileplaying: function(e, p) {
                if (this.position < lastPosition) {
                    show.reset();
                }
                
                if (!isScrubbing) {
                    var duration = this.loaded ? this.duration : this.durationEstimate;
                    scrubber.slider('value', this.position / duration * 100);
                }
                
                show.render(this.position / 1000, isScrubbing);
                updateStatus();
                lastPosition = this.position;

                updateScoreBar();
            }
        });
    	player.paused = true;

        setup();
    }

    $('#loading-message').text("Loading, please wait...");

    // Start up the music
    soundManager.setup({
        url: '3rdparty/swf/',
        flashVersion: 9,
        onerror: function() {
        alert('SoundManager failed to load!');
        },
        onready: function() {
            init();
        }    
    });

    // ================================== Real time feedback =====================================


    var currentTime, canvasPlaying;
    var updateInterval;
    var pitch = 12, TOTAL_PITCH = 24, HPP;
    var width, height;
    var LEFT_PAD = 100, TOP_PAD = 30, FEEDBACK_MS = 30, PITCH_WIDTH = 2, LYRICS_WIDTH, LYRICS_LENGTH = 5000;

    // Change format of lyrics time stamp
    // lyrics[i] = {start, end, word}
    function nextRandomPitch(pitch) {
        var r = Math.floor(Math.random() * 100);
        var step = Math.floor(Math.random() * 3) + 1;
        var nxt = pitch;
        
        if (nxt < TOTAL_PITCH / 2) {
            if (r < 35) nxt -= step;
            else nxt += step;
        }
        else {
            if (r < 35) nxt += step;
            else nxt -= step;
        }

        nxt = Math.max(5, Math.min(nxt, TOTAL_PITCH - 5));

        if (nxt < 5 || nxt > TOTAL_PITCH - 5)
            nxt = Math.floor(Math.random() * TOTAL_PITCH);
        return nxt;
    }

    var lyrics = [], cnt = 0, pitch = 12;
    for (var i in timings) {
        var st = timings[i][0], ed = timings[i][1];
        var line = timings[i][2];
        for (var j = 0; j < line.length; j++) {
            pitch = nextRandomPitch(pitch);
            lyrics[cnt++] = {
                start: st + line[j][0],
                end: st + line[j][0] + (((j == line.length - 1) ? ed : st + line[j + 1][0]) - st - line[j][0]) * 0.9,
                word: line[j][1],
                pitch: pitch// Random pitch
            };
        }
    }
    //console.log(lyrics);

    function canvasInit() {
        // initialize canvas
        canvas = document.getElementById("feedback");
        canvas.width = $("#feedback_box").width();
        canvas.height = 300;
        context = canvas.getContext("2d");
        currentTime = 0;
        width = canvas.width;
        height = canvas.height;
        canvasPlaying = false;
        PITCH_HEIGHT = height - 2 * TOP_PAD;
        HPP = PITCH_HEIGHT / TOTAL_PITCH;
        LYRICS_WIDTH = width - LEFT_PAD;
    }

    function pitchCoor(pitch) {
        return TOP_PAD + (TOTAL_PITCH - pitch) * HPP;
    }

    // animates canvas per FEEDBACK_MS
    function canvasUpdates() {
        context.clearRect(0, 0, width, height);
        // Draw background lines
        context.fillSytle = "rgba(100, 100, 100, 0.5)";
        for (var i = 0; i < TOTAL_PITCH; i++)
            context.fillRect(0, i * HPP + TOP_PAD, width, 0.2);

        // Update lyrics
        var from = currentTime - (LEFT_PAD/LYRICS_WIDTH) * LYRICS_LENGTH;
        var to = currentTime + LYRICS_LENGTH;
        var lastPitch = 12;

        for (var i in lyrics) {
            var start = Math.floor(lyrics[i].start * 1000), end = Math.floor(lyrics[i].end * 1000);
            if (!(to < start || end < from))
                drawWord(start, end, lyrics[i].word, lyrics[i].pitch);
        }

        // Update pitch tracker
        if (cnt % 15 == 0) {
            pitch = nextRandomPitch(pitch);
            cnt = 0;
        }
        cnt = cnt + 1;
        context.fillStyle = "blue";
        context.fillRect(LEFT_PAD, TOP_PAD, PITCH_WIDTH, PITCH_HEIGHT - HPP);

        context.beginPath();
        context.arc(LEFT_PAD + PITCH_WIDTH / 2, pitchCoor(pitch) + HPP/2, 5, 0, Math.PI * 2, false);
        context.fill();

        // Update currentTime
        currentTime = currentTime + FEEDBACK_MS;
        if (Math.abs(player.position - currentTime) < FEEDBACK_MS)
            currentTime = player.position;
    }

    function drawWord(start, end, word, pitch) {
        context.fillStyle = "#a8a8a8";
        context.beginPath();
        var lx = LEFT_PAD + (start - currentTime) * LYRICS_WIDTH / LYRICS_LENGTH;
        var rx = LEFT_PAD + (end - currentTime) * LYRICS_WIDTH / LYRICS_LENGTH;
        var y = pitchCoor(pitch);
        var radius = HPP/2;
        var x = lx, width = rx - lx, height = HPP;

        context.beginPath();
        context.moveTo(x,y+radius);
        context.lineTo(x,y+height-radius);
        context.quadraticCurveTo(x,y+height,x+radius,y+height);
        context.lineTo(x+width-radius,y+height);
        context.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
        context.lineTo(x+width,y+radius);
        context.quadraticCurveTo(x+width,y,x+width-radius,y);
        context.lineTo(x+radius,y);
        context.quadraticCurveTo(x,y,x,y+radius);
        context.fill();

        context.fillStyle = "#000000";
        context.font = "10px sans-serif";
        var textWidth = context.measureText(word).width;
        context.fillText(word, x + (width - textWidth) / 2, 290);

    }

    function canvasPause() {
        clearInterval(updateInterval);
        canvasPlaying = false;
    }

    function canvasPlay() {
        updateInterval = setInterval(canvasUpdates, FEEDBACK_MS);
        canvasPlaying = true;
    }

    canvasInit();


    $("#stop_canvas").click(function(e) {
        if (canvasPlaying) canvasPause();
        else canvasPlay();
    })

});