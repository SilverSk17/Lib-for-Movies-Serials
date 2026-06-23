function searchItems() {
    var query = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('.item').forEach(function(item) {
        var searchData = item.getAttribute('data-search').toLowerCase();
        var altName = item.getAttribute('data-search') || '';
        if (searchData.includes(query) || altName.includes(query)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

const submitButton = document.querySelector('input[type="submit"]');
if (submitButton) {
    submitButton.onclick = function() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        if (!name || !email || !message) {
            alert('Prosím, vyplňte všetky polia.');}
            else {
                alert('Dakujeme, ' + name + ', za odoslanie správy. Odpovieme Vám na email: ' + email);
            }
        };
}


const h1 = document.querySelector('h1');
h1.onclick = function() {
    if (h1.style.opacity === '0') {
        h1.style.opacity = '1';
    } else {
        h1.style.opacity = '0';
    }
};

const clearBtn = document.getElementById('clearBtn');
clearBtn.onclick = function() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}