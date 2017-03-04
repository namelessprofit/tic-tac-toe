// wait for the DOM to finish loading
$(document).ready(function() {

    var board = [
        [],
        [],
        []
    ];
    var state = false;
    var counter = 0;


    function populateBoard(el, i) { // helper function for filtering
        if (el.hasChildNodes()) {
            if (i == 0 || i == 1 || i == 2) {
                board[0].push(el);
            } else if (i == 3 || i == 4 || i == 5) {
                board[1].push(el);
            } else if (i == 6 || i == 7 || i == 8) {
                board[2].push(el);
            }
        }
    }

    function winner(arr) { //checks arr for winning solutions
        for (var i = 0; i < arr.length; i++) {
            for (var x = 0; x < arr[i].length; x++) {
                if (arr[0][0].childNodes[0].data == "X" && arr[0][1].childNodes[0].data == "X" && arr[0][2].childNodes[0].data == "X") {
                    alert('X is the winner!')
                    return false;
                }
            }
        }
    }

    function filterX(x) { //filtering out the positions of x inside board
        x.forEach(function(e, i) {
            if (e.childNodes[0].data == 'X') {
                return e.childNodes[0].data
            }
        })
    }

    function filterO(o) { //filtering out the positions of o inside board
        o.forEach(function(e, i) {
            if (e.childNodes[0].data == 'O') {
                return e.childNodes[0].data
            }
        })
    }

    function checker() { //checks for winner
        board = [
            [],
            [],
            []
        ];
        var arr = $('.box').toArray();
        arr.forEach(populateBoard);
        winner(board);
        // var x = board.filter(filterX);
        // var o = board.filter(filterO);
        // console.log(x);
    }

    $('.box').on('click', function() {
        if (this.hasChildNodes()) { //deny change if symbol
            console.log(this.hasChildNodes);
            return false;
        } else {
            if (state) { //checking for state (X or O)
                $(this).text("O");
            } else {
                $(this).text("X");
            }
            state = !state; //toggle between states
            counter++
            if (counter >= 5) { //runing array checker after 5 clicks
                checker();
                if (counter >= 9) {
                    alert("Draw!");
                }
            }
        }


    });
    $('#reload').click(function() {
        location.reload();
    })
});
