 // Sukuriame mygtuką
 var button = document.createElement('button');
 button.textContent = 'Spausk mane';

 // Pridedame įvykio klausiklį mygtukui
 button.addEventListener('click', function() {
     alert('Sveiki atvykę į JavaScript pasaulį!');
 });

 // Pridedame mygtuką į div su id 'button-container'
 document.getElementById('button-container').appendChild(button);