function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        document.body.style.backgroundImage = 'url(' + e.target.result + ')';
        document.body.style.backgroundSize = 'cover';
      };
      reader.readAsDataURL(input.files[0]);
      
  }
}




$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

console.log('Client is running in the browser!');
