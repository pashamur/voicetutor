$(function(){
  $("#search-text").keypress(function(e){
    if(e.keyCode == 13){
      history.pushState({query:$('#search-text').val()}, "search", '?query='+$('#search-text').val());
      search($('#search-text').val());
      $('.typeahead').typeahead('close');
    }
  });

  $('.typeahead').bind('typeahead:select', function(ev, suggestion) {
    history.pushState({query:$('#search-text').val()}, "search", '?query='+$('#search-text').val());
    search($('#search-text').val());
  });    

  $('#search-icon').click(function(){
    history.pushState({query:$('#search-text').val()}, "search", '?query='+$('#search-text').val());
    search($('#search-text').val());
    $('.typeahead').typeahead('close');
  });

  window.onpopstate = function(event){
    if(event.state == null){
      $('#search-text').val('');
      $('#search-results').hide();
      return;
    }

    $('#search-text').val(event.state.query);
    search(event.state.query);
  }

  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      if(q==''){
        return cb(['What is Love', 'Uptown Funk', 'Take Me To Church']);
      }

      var matches, substringRegex;
   
      // an array that will be populated with substring matches
      matches = [];
   
      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');
   
      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });
   
      cb(matches);
    };
  };
   
  Songs = [];

  // Source: http://stackoverflow.com/questions/10191941/jquery-unique-on-an-array-of-strings
  uniq = function(array){
      return array.filter(function(el, index, arr) {
          return index === arr.indexOf(el);
      });
  }

  $.get('text/songs.txt', function(data) {
    songs = data.split('\n');
    titles = [];
    artists = [];

    for(i = 0; i<songs.length; i++){
      var title = songs[i].split(' - ')[0];
      var artist = songs[i].split(' - ')[1];

      Songs.push({id: i, title: title, artist: artist});
      titles.push(title);
      artists.push(artist);
    }

    autocomplete_data = titles.concat(uniq(artists));
    setup_typeahead();

    // Reload current state if we've gone back after searching
    var currentState = history.state;

    if(currentState != null){
      $('#search-text').val(currentState.query);
      search(currentState.query);
    }
  });

  setup_typeahead = function(){
     
    $('#search-text').typeahead({
      hint: true,
      highlight: true,
      minLength: 0
    },
    {
      name: 'songs',
      source: substringMatcher(autocomplete_data)
    });

  };

  var options = {
    keys: ['artist', 'title'],   // keys to search in
    maxPatternLength: 200
  }

  f = new Fuse(Songs, options);

  var source   = $("#search-result-template").html();
  var template = Handlebars.compile(source);

  search = function(query, offset){
    var offset = typeof offset !== 'undefined' ? offset : 0;

    var results = f.search(query);

    $('#search-results>tbody').html('');

    var limit = (results.length > offset + 20) ? offset + 20 : results.length;

    for(i = offset; i<limit; i++){
      var mins = Math.floor((Math.random() * 6) + 2);
      var secs = Math.floor((Math.random() * 49) + 11);
      var length = mins + ":" + secs;

      var context = {title: results[i].title, artist: results[i].artist, length: length, source: (results[i].artist == 'Haddaway' ? 'haddaway.jpg' : 'person.gif')};
      var html    = template(context);

      $('#search-results>tbody').append(html);
    }

    if(offset > 0){ $("#prevPageLink").show(); } else { $("#prevPageLink").hide(); }
    if(results.length > offset + 20) { $("#nextPageLink").show(); } else { $("#nextPageLink").hide(); }

    $('#search-results').show();
    $('#search-results thead').show();
  };


  $('body').on('click', '.search-result', function(){
    window.location.href='karaoke.html';
  });

  $('body').on('click', '#nextPageLink', function(){
    var currentState = history.state;

    if(currentState != null){
      var offset = typeof currentState.offset !== 'undefined' ? currentState.offset : 0;
      var nextOffset = offset + 20;

      history.pushState({query: currentState.query, offset: nextOffset}, "search", '?query='+$('#search-text').val()+"&offset="+nextOffset);
      search(currentState.query, nextOffset);
    }  
  });

  $('body').on('click', '#prevPageLink', function(){
    var currentState = history.state;

    if(currentState != null){
      var offset = typeof currentState.offset !== 'undefined' ? currentState.offset : 0;
      var nextOffset = (offset - 20 < 0) ? 0 : offset - 20;

      history.pushState({query: currentState.query, offset: nextOffset}, "search", '?query='+$('#search-text').val()+"&offset="+nextOffset);
      search(currentState.query, nextOffset);
    }
  });


});