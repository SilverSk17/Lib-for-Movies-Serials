function searchItems() {
    var query = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('.item').forEach(function(item) {

        var badges = item.querySelectorAll('.badge');
        var badgeText = '';
        badges.forEach(function(badge) {
            badgeText += badge.textContent.toLowerCase() + ' ';
        });

        var searchData = item.getAttribute('data-search').toLowerCase();
        var altName = item.getAttribute('data-search') || '';
        if (searchData.includes(query) || altName.includes(query) || badgeText.includes(query)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function showPopup(message) {
    document.getElementById('popMessage').textContent = message;
    document.getElementById('pop').style.display = 'flex';
}

const submitButton = document.querySelector('input[type="submit"]');
if (submitButton) {
    submitButton.onclick = function() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        if (!name || !email || !message) {
            showPopup('Prosím, vyplňte všetky polia.');
        } else {
            showPopup('Dakujeme, ' + name + ', za odoslanie správy. Odpovieme Vám na email: ' + email);
        }
        return false;
    };
}

const clearBtn = document.getElementById('clearBtn');
clearBtn.onclick = function() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}