// for hotel registration

var test={
    hotelname: "marriot",
    room: 350,
    booked: 120,
    display: function () {
        return this.hotelname;
    }
}

console.log(test.hotelname);
console.log(test.room);

// event
$(function(){
    $('#submit').click(reservation);
    $('#lists').click(displayR);
});

var guestgroup = new Array();
function reservation(){
    var guest={
        name: $('#name').val(),
        numberOfGuest: $('#nums').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val(),

        
    }
    $("p:first").html("Thank you for your reservation!");
    guestgroup.push(guest);  // Store data in array
    console.log(guest);
}

function displayR(){
    $("form").append("<table>");
    for (var i in guestgroup){
        var theguest = guestgroup[i];
        var row = "<tr><td>" + theguest.name + "</td><td>" + theguest.checkin + "</td><td>" + theguest.checkout + "</td><td>" + theguest.numberOfGuest + "</td></tr>";
        $("table").append(row);
    }
}