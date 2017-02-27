// wait for the DOM to finish loading
$(document).ready(function() {

var board =[[],[],[]]
var state = false
var counter = 0;

function populateBoard(el,i){ // helper function for filtering
  if(el.hasChildNodes()){
      if(i == 0 || i == 1 || i == 2){
        board[0].push(el);
      } else if (i == 3 || i == 4 || i == 5){
        board[1].push(el);
      }else if (i == 6 || i == 7 || i == 8){
        board[2].push(el);
      }
   }
}

function filterX(x){
 x.forEach(function(e,i){
  console.log(e[i].childNodes[0].data)
})
}

function checker(){ //checks for winner
  board =[[],[],[]];
  var arr = $('.box').toArray();
  arr.forEach(populateBoard);
  board.forEach(filterX)
}

$('.box').on('click',function(){
  if(this.hasChildNodes()){ //deny change if symbol exists
    return false;
  }else{
    if(state){ //checking for state (X or O)
        $(this).text("O");
    }else{
        $(this).text("X");
      this.symbol = true;
    }
    state = !state; //toggle between states
    counter++
    if(counter >= 5){ //runing array checker after 5 clicks
      checker();
    }
  }

});
$('#reload').click(function() { location.reload(); })
});
