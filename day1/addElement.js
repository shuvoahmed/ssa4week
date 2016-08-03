function domPrompt(msg)
{
	//create a div element
	//set content of the div element to the msg
	//append div to the body
  var div = document.createElement('div');
  div.innerHTML = msg;
  div.onclick = function(evt) {
    alert('click');
  };

  document.body.appendChild(div);
}

//domPrompt("test dom prompt");

function domAlert(msg)
{

var div = document.createElement('div');
div.innerHTML = msg;
div.setAttribute('class','alert_class');

document.body.appendChild(div);

}

var promptInput = document.getElementById('promptInput');

promptInput.onkeydown = function(evt) {
	if(evt.key === "Enter")
	{
      var human = promptInput.value;
      if(human === 'r' || human === 's' || human === 'p')
      {
        computeWinner(human);
      }
	}
};

function computeWinner(human)
{
    var computer = ['r', 'p', 's'][Math.floor(Math.random() * 3)];

    if (human === computer) {
        domAlert('tie: both players picked ' + computer);
    }

    if (human === 'r') {
        if (computer === 'p') {
            domAlert('Computer wins!');
        } else if (computer === 's') {
            domAlert('Human wins!');
        }
    } else if (human === 'p') {
        if (computer === 'r') {
            domAlert('Human wins!');
        } else if (computer === 's') {
            domAlert('comptuer wins!')
        }
    } else { // human === 's'
        if (computer === 'r') {
            domAlert('Computer wins!');
        } else if (computer === 'p') {
            domAlert('Human wins!');
        }
    }

}