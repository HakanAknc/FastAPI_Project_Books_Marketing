// function addUser() {
//     const name = document.getElementById("name").value;
//     const surname = document.getElementById("surname").value;
//     const phone = document.getElementById("phone").value;
//     const budget = document.getElementById("budget").value;

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("surname", surname);
//     formData.append("phone", phone);
//     formData.append("budget", budget);

//     fetch(`http:127.0.0.1:8000/post_add_users/?name=${name}&surname=${surname}&phone=${phone}&budget=${budget}`, {
//         method: 'POST',
//         body: formData
//     })
//         .then(response => response.json())
//         .then(data => {
//             // İşlem sonucunu kullanıcıya göstermek için gerekli kodları burada ekleyebilirsiniz.
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('Hata:', error);
//         });
// }


function addUser() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const phone = document.getElementById("phone").value;
    const budget = document.getElementById("budget").value;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("phone", phone);
    formData.append("budget", budget);

    fetch(`http://127.0.0.1:8000/post_add_users/?name=${name}&surname=${surname}&phone=${phone}&budget=${budget}`, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // İşlem sonucunu kontrol et
            if (data.message === "Veriler CSV dosyanıza başarıyla kaydedildi.") {
                alert("Üye kaydınız başarıyla oluşturuldu.");
            } else {
                alert("Üye kaydı sırasında bir hata oluştu.");
            }
        })
        .catch(error => {
            console.error('Hata:', error);
            alert("Üye kaydı sırasında bir hata oluştu.");
        });
}
