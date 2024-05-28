document.getElementById('keisti').addEventListener('click', function() {
    var naujasTurinys = document.getElementById('ivestis').value;
    document.getElementById('turinys').textContent = naujasTurinys;
});