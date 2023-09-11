async function addUser() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const phone = document.getElementById("phone").value;
    const budget = parseFloat(document.getElementById("budget").value);

    const data = {
        name: name,
        surname: surname,
        phone: phone,
        budget: budget
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/post_add_users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Üye kaydınız başarıyla oluşturuldu.');
            // Burada isterseniz başka bir işlem yapabilirsiniz.
        } else {
            alert('Üye kaydı sırasında bir hata oluştu.');
        }
    } catch (error) {
        console.error('Bir hata oluştu: ', error);
    }
}