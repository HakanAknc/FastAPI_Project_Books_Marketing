// document.addEventListener("DOMContentLoaded", function() {
//     // Kategori bağlantılarını al
//     const kategoriler = document.querySelectorAll(".category");

//     // Her kategori bağlantısını dinle
//     kategoriler.forEach(kategori => {
//         kategori.addEventListener("click", function(event) {
//             event.preventDefault(); // Bağlantıyı tıklamayı engelle

//             // Tıklanan kategoriyi al
//             const secilenKategori = kategori.id;

//             // FastAPI'den veri çekmek için Fetch API kullan
//             fetch(`/get_books/${secilenKategori}`)
//                 .then(response => response.json())
//                 .then(veri => {
//                     // Sonuçları ekranda göster
//                     const sonuclarDiv = document.getElementById("kategori-sonuclari");
//                     sonuclarDiv.innerHTML = "";

//                     if (veri.error) {
//                         sonuclarDiv.innerHTML = `<p>${veri.error}</p>`;
//                     } else {
//                         veri.forEach(kitap => {
//                             sonuclarDiv.innerHTML += `<p>${kitap.kitap_ad}</p>`;
//                         });
//                     }
//                 })
//                 .catch(error => {
//                     console.error("Veri çekme hatası:", error);
//                 });
//         });
//     });
// });


// JavaScript dosyanızda
document.getElementById('Roman').addEventListener('click', function() {
    // Kategoriye tıkladığınızda burada veriyi çekme işlemini başlatın.
    fetch('http://127.0.0.1:8000/get_books/roman')  // FastAPI URL'sini buraya ekleyin
        .then(response => response.json())
        .then(data => {
            // Verileri kullanmak için burada işlem yapabilirsiniz
            console.log(data);
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});

document.getElementById('Masal').addEventListener('click', function() {
    // Kategoriye tıkladığınızda burada veriyi çekme işlemini başlatın.
    fetch('http://127.0.0.1:8000/get_books/masal')  // FastAPI URL'sini buraya ekleyin
        .then(response => response.json())
        .then(data => {
            // Verileri kullanmak için burada işlem yapabilirsiniz
            console.log(data);
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});

document.getElementById('Öykü').addEventListener('click', function() {
    // Kategoriye tıkladığınızda burada veriyi çekme işlemini başlatın.
    fetch('http://127.0.0.1:8000/get_books/öykü')  // FastAPI URL'sini buraya ekleyin
        .then(response => response.json())
        .then(data => {
            // Verileri kullanmak için burada işlem yapabilirsiniz
            console.log(data);
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});

document.getElementById('Klasik').addEventListener('click', function() {
    // Kategoriye tıkladığınızda burada veriyi çekme işlemini başlatın.
    fetch('http://127.0.0.1:8000/get_books/klasik')  // FastAPI URL'sini buraya ekleyin
        .then(response => response.json())
        .then(data => {
            // Verileri kullanmak için burada işlem yapabilirsiniz
            console.log(data);
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});

document.getElementById('Polisiye').addEventListener('click', function() {
    // Kategoriye tıkladığınızda burada veriyi çekme işlemini başlatın.
    fetch('http://127.0.0.1:8000/get_books/polisiye')  // FastAPI URL'sini buraya ekleyin
        .then(response => response.json())
        .then(data => {
            // Verileri kullanmak için burada işlem yapabilirsiniz
            console.log(data);
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});
