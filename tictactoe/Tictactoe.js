
let a1 = $("#A1");
let a2 = $("#A2");
let a3 = $("#A3");
let b1 = $("#B1");
let b2 = $("#B2");
let b3 = $("#B3");
let c1 = $("#C1");
let c2 = $("#C2");
let c3 = $("#C3");
let h2 = $("h2");

let amount = 0;
let cross = 'X';
let winner = "false";
let circle = 'O';
let player = 2;
let symbol;
let control = document.querySelectorAll(".playButton");
let clicked;
let roundCount = 1;

    for (let i = 0; i < control.length; i++) {
        control[i].addEventListener("click", playerTurn);
  }


function playerTurn(e) {

    if(winner !== "true") {
        clicked = e.target;
        if(clicked.value !=="X" && clicked.value !=="O") {

            if (player===1) {
            clicked.value = circle;
            symbol = cross;
            player = 2;
            amount++;
            }

            else if (player===2) {
                clicked.value = cross;
                symbol = circle;
                player = 1;
                amount++;
            }
        }
        winner = ditto()
    }
}


function ditto(){

    if(symbol === "O" || symbol === "X"){

        if (symbol === a3.val() && a3.val() === a2.val() && a2.val() === a1.val()) {
            h2.text("The winner is player" +" " + symbol + "!");


                if (amount === 5 || amount === 6) {
                    h2.text("The winner is player "+" " + symbol + "!");
                }

            return("true");
        }

        else if (symbol === b3.val() && b3.val() ===  b2.val() && b2.val() === b1.val()) {
            h2.text("The winner is player" +" " + symbol + "!");

                if (amount === 5 || amount === 6) {
                    h2.text("The winner is player "+" " + symbol + "!");
                }

            return("true");
        }

        else if (symbol === c3.val() && c3.val() === c2.val() && c2.val() === c1.val()) {
            h2.text("The winner is player" +" " + symbol + "!");

                if (amount === 5 || amount === 6) {
                    h2.text("The winner is player "+" " + symbol + "!");
                }

            return("true");
        }
        else if (symbol === a1.val() && a1.val() === b1.val() && c1.val() === b1.val()) {
            h2.text("The winner is player" +" " + symbol + "!");

                if (amount === 5 || amount === 6) {
                    h2.text("The winner is player "+" " + symbol + "!");
                }

            return("true");
        }
        else if (symbol === a2.val() && a2.val() === b2.val() && b2.val() === c2.val()) {
            h2.text("The winner is player" +" " + symbol + "!");

                if (amount === 5 || amount === 6) {
                    h2.text("The winner is player "+" " + symbol + "!");
                }

            return("true");
        }
        else if (symbol === a3.val() && b3.val() === a3.val() && c3.val() === b3.val()) {
            h2.text("The winner is player" +" " + symbol + "!");

                if (amount === 5 || amount === 6) {
                    h2.text("The winner is player "+" " + symbol + "!");
                }

            return("true");
        }
        else if (symbol === a1.val() && b2.val() === a1.val() && c3.val() === b2.val()){
            h2.text("The winner is player" +" " + symbol + "!");

                if (amount === 5 || amount === 6) {
                    h2.text("The winner is player "+" " + symbol + "!");
                }

            return("true");
        }
        else if (symbol === a3.val() && b2.val() === a3.val() && c1.val() === b2.val()) {
            h2.text("The winner is player" +" " + symbol + "!");

                if (amount === 5 || amount === 6) {
                    h2.text("The winner is player "+" " + symbol + "!");
                }

            return("true");
        }
        else if (amount === 9) {
            h2.text("draw");
        }
    }
}

$("#restart").click(function() {
    a1.val("");
    a2.val("");
    a3.val("");
    b1.val("");
    b2.val("");
    b3.val("");
    c1.val("");
    c2.val("");
    c3.val("")
    amount = 0;
    winner ="false";
    player=2;
    roundCount++;
    h2.text("Game "+ roundCount);
});
