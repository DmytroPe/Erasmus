function IsValidField(sender) {
    var text = sender.value;
    var reg = /[^a-zA-ZА-Яа-яі]/gi;
    if (reg.test(text) === false) {
        console.log(sender.id + ' Введено вірно');
    } else {
        document.getElementById(sender.id).value = '';
        alert('Введено не допустимі символи');
    }
}

document.getElementById('btnSubmit').addEventListener('click',
    function() {
        if (document.getElementById('first_name').value !== '' && document.getElementById('last_name').value !== '') {
            alert('Ім*я: ' +
                document.getElementById('first_name').value +
                '; Прізвище: ' +
                document.getElementById('last_name').value);
        } else {
            alert('Дані не введено!');
        }
    });

document.getElementById('btnSubmit').addEventListener('mouseover',
    function() {
        document.getElementById('btnSubmit').style.backgroundColor = 'red';
    });

document.getElementById('btnSubmit').addEventListener('mouseout',
    function() {
        document.getElementById('btnSubmit').style.backgroundColor = 'white';
    });

document.getElementById('first_name').addEventListener('mouseover',
    function() {
        document.getElementById('first_name').style.backgroundColor = 'greenyellow';
    });

document.getElementById('email').addEventListener('mouseover',
    function () {
        document.getElementById('email').style.backgroundColor = 'greenyellow';
    });

document.getElementById('last_name').addEventListener('mouseover',
    function() {
        document.getElementById('last_name').style.backgroundColor = 'greenyellow';
    });

document.getElementById('first_name').addEventListener('mouseout',
    function() {
        document.getElementById('first_name').style.backgroundColor = 'white';
    });

document.getElementById('last_name').addEventListener('mouseout', function () {
    document.getElementById('last_name').style.backgroundColor = 'white';
});

document.getElementById('email').addEventListener('mouseout',
    function () {
        document.getElementById('email').style.backgroundColor = 'white';
    });

document.getElementById('btnStyle').addEventListener('click', function() {
    var btn = document.getElementById('btnStyle');
    if (btn.value === '0') {
        btn.value = '1';
        btn.style.float = 'right';
        document.getElementsByClassName('container')[0].style.backgroundImage = 'url(dark_girl.png)';
        document.getElementsByClassName('stattia')[0].style.backgroundColor = 'yellow';
        document.getElementsByClassName('stattia')[0].style.color = 'black';
        document.getElementsByClassName('tablychka')[0].style.backgroundColor = 'yellow';
        document.getElementsByClassName('tablychka')[0].style.color = 'black';
        document.getElementById('commentForm').style.backgroundColor = 'yellow';
        document.getElementById('commentForm').style.color = 'black';
        document.getElementsByTagName('footer')[0].style.color = 'yellow';
    } else {
        btn.value = '0';
        btn.style.float = 'left';
        document.getElementsByClassName('container')[0].style.backgroundImage = 'url(image2.png)';
        document.getElementsByClassName('stattia')[0].style.backgroundColor = 'black';
        document.getElementsByClassName('stattia')[0].style.color = 'white';
        document.getElementsByClassName('tablychka')[0].style.backgroundColor = 'black';
        document.getElementsByClassName('tablychka')[0].style.color = 'white';
        document.getElementById('commentForm').style.backgroundColor = 'black';
        document.getElementById('commentForm').style.color = 'white';
        document.getElementsByTagName('footer')[0].style.color = 'white';
    }
});