document.getElementById('rasti').addEventListener('click', function() {
    var elementai = document.getElementsByClassName('special');
    for (var i = 0; i < elementai.length; i++) {
        console.log(elementai[i]);
    }
});