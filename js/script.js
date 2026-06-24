function searchItems() {
    const query = document.getElementById('search').value.toLowerCase();

    document.querySelectorAll('.item').forEach(function(item) {
        const badges = item.querySelectorAll('.badge');
        let badgeText = '';

        badges.forEach(function(badge) {
            badgeText += badge.textContent.toLowerCase() + ' ';
        });

        const searchData = (item.getAttribute('data-search') || '').toLowerCase();
        const altName = (item.getAttribute('data-alt') || '').toLowerCase();

        if (
            searchData.includes(query) ||
            altName.includes(query) ||
            badgeText.includes(query)
        ) {
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
    submitButton.onclick = function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            showPopup('Prosím, vyplňte všetky polia.');
        } else {
            showPopup('Ďakujeme, ' + name + ', za odoslanie správy. Odpovieme Vám na email: ' + email);
        }
    };
}

const clearBtn = document.getElementById('clearBtn');

if (clearBtn) {
    clearBtn.onclick = function() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    };
}