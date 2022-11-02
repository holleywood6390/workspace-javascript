// event

$('#message').keyup(showKey);
document.addEventListener('mouseover',showPosition);

// event handler
function showKey(e) {
    console.log(e.key);
    document.getElementById('lastKey').textContent="The key is " + e.key;
}

function showPosition(em) {
    console.log("The position is " + em.pageX + "," + em.pageY+ " ");
    $('#positionkey').text("The position is " + em.pageX + "," + em.pageY+ " ");
}

const canvas = document.getElementById("playground");
const ctx = canvas.getContext("2d")

ctx.fillStyle = "green";
ctx.fillRect(10,10,150,100);