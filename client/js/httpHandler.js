// (function() {
  const serverUrl = 'http://127.0.0.1:3000';
  const serverUrl2 = 'http://127.0.0.1:8080';
  
  //
  // TODO: build the swim command fetcher here
  //
  const ajaxFetcher = () => {
    $.ajax({
      type: 'GET',
      data: null,
      url: serverUrl, //I EDITED THIS
      cache: false,
      contentType: false,
      processData: false,
      success: (data) => {
        if(data){
          SwimTeam.move(data);
          setTimeout(function(){ajaxFetcher()}, 20);
        }

        // window.location = window.location.href;
      }
    });
    
  }
  $('#GET').click(function(){ajaxFetcher()});
  
  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////
  
  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl, //I EDITED THIS
      cache: false,
      contentType: false,
      processData: false,
      success: (data) => {
        // reload the page
        console.log(data);
        window.location = window.location.href;
      }
    });
  };
  
  $('form').on('submit', function(e) {
    e.preventDefault();
    
    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }
    
    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }
    
    ajaxFileUplaod(file);
  });
  
  // })();
  $('#backgroundify').click(function(){console.log('asuhhhh')});
  
  