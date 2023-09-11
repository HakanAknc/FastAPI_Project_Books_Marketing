document.addEventListener('DOMContentLoaded', function () {
    // Formu bulun
    const form = document.getElementById('myForm');

    // Form gönderildiğinde işlem yapın
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Sayfanın yeniden yüklenmesini önler

        // Formdaki verileri alın
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const phone = document.getElementById('phone').value;
        const budget = parseFloat(document.getElementById('budget').value);

        // Verileri bir nesne olarak oluşturun
        const data = {
            name: name,
            surname: surname,
            phone: phone,
            budget: budget
        };

        // POST isteği yapın
        fetch('http://127.0.0.1:8000/post_add_users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.message) {
                alert(result.message);
                // Başka bir işlem yapmak isterseniz burada yapabilirsiniz
            } else if (result.error) {
                alert(result.error);
            }
        })
        .catch(error => {
            console.error('Hata:', error);
        });
    });
});