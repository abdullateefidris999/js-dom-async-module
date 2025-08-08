listItem=document.getElementsByTagName('li');
Tick=document.getElementsByTagName('span');
for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('click', function() {
        listItem[i].classList.toggle('completed');
        listItem[i].classList.toggle('incompleted');
        Tick[i].classList.toggle('active');
        Tick[i].classList.toggle('inactive');
    });
}