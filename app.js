// const adres = "http://127.0.0.1:8000/get_users/";

// fetch(adres)                                 // ? ---Bu satır, belirtilen URL'ye bir HTTP isteği yapmak için fetch fonksiyonunu kullanır. adres değişkeni, isteğin gideceği adresi belirtir.
//     .then((response) => response.json())    // ? ---Bu satır, fetch işleminin sonucu olan response nesnesini alır ve bu yanıtı JSON formatında çözümlemek için bir .then() zinciri başlatır.
//     .then((data) => console.log(data))     // ? ---Bu satır, JSON çözümlenmiş veriyi alır ve bu veriyi konsola yazdırmak için bir .then() zinciri daha ekler. data burada çözümlenmiş JSON veriyi temsil eder.
//     .catch((err) => console.log(err))     // ? ---Bu satır, önceki .then() zincirlerinde herhangi bir hata oluşursa bu hatayı yakalamak ve konsola yazdırmak için bir .catch() bloğu ekler. err hatayı temsil eder.



// YEDEK
document.getElementById('Roman').addEventListener('click', function() {
    // Kategoriye tıkladığınızda veriyi çekme işlemini başlatın.
    fetch('http://127.0.0.1:8000/get_books/roman')  // FastAPI URL'sini buraya ekleyin
        .then(response => response.json())
        .then(data => {
            // Verileri ekranda göstermek için bir konteyner oluşturun
            const veriAlani = document.getElementById('veri-alani');
            veriAlani.innerHTML = ''; // Önceki içeriği temizleyin

            // Verileri kutular içinde ekrana ekleyin
            data.forEach(kitap => {
                const kitapAdi = kitap.kitap_ad; // Verilerinize göre uygun alanları kullanın
                const kitapKategori = kitap.kitap_kategori;
                
                // Yeni bir kutu oluşturun
                const kitapBilgisi = document.createElement('div');
                kitapBilgisi.classList.add('kitap-kutusu'); // Stillemek için bir sınıf ekleyin

                // Kutunun içeriğini ayarlayın
                kitapBilgisi.innerHTML = `
                    <p>Kitap Adı: ${kitapAdi}</p>
                    <p>Kategori: ${kitapKategori}</p>
                `;
                
                veriAlani.appendChild(kitapBilgisi);
            });
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});


document.getElementById('Masal').addEventListener('click', function() {
    // Kategoriye tıkladığınızda veriyi çekme işlemini başlatın.
    fetch('http://127.0.0.1:8000/get_books/masal')  // FastAPI URL'sini buraya ekleyin
        .then(response => response.json())
        .then(data => {
            // Verileri ekranda göstermek için bir konteyner oluşturun
            const veriAlani = document.getElementById('veri-alani');
            veriAlani.innerHTML = ''; // Önceki içeriği temizleyin

            // Verileri kutular içinde ekrana ekleyin
            data.forEach(kitap => {
                const kitapAdi = kitap.kitap_ad; // Verilerinize göre uygun alanları kullanın
                const kitapKategori = kitap.kitap_kategori;
                
                // Yeni bir kutu oluşturun
                const kitapBilgisi = document.createElement('div');
                kitapBilgisi.classList.add('kitap-kutusu'); // Stillemek için bir sınıf ekleyin

                // Kutunun içeriğini ayarlayın
                kitapBilgisi.innerHTML = `
                    <p>Kitap Adı: ${kitapAdi}</p>
                    <p>Kategori: ${kitapKategori}</p>
                `;
                
                veriAlani.appendChild(kitapBilgisi);
            });
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});


document.getElementById('Öykü').addEventListener('click', function() {
    // Kategoriye tıkladığınızda veriyi çekme işlemini başlatın.
    fetch('http://127.0.0.1:8000/get_books/öykü')  // FastAPI URL'sini buraya ekleyin
        .then(response => response.json())
        .then(data => {
            // Verileri ekranda göstermek için bir konteyner oluşturun
            const veriAlani = document.getElementById('veri-alani');
            veriAlani.innerHTML = ''; // Önceki içeriği temizleyin

            // Verileri kutular içinde ekrana ekleyin
            data.forEach(kitap => {
                const kitapAdi = kitap.kitap_ad; // Verilerinize göre uygun alanları kullanın
                const kitapKategori = kitap.kitap_kategori;
                
                // Yeni bir kutu oluşturun
                const kitapBilgisi = document.createElement('div');
                kitapBilgisi.classList.add('kitap-kutusu'); // Stillemek için bir sınıf ekleyin

                // Kutunun içeriğini ayarlayın
                kitapBilgisi.innerHTML = `
                    <p>Kitap Adı: ${kitapAdi}</p>
                    <p>Kategori: ${kitapKategori}</p>
                `;
                
                veriAlani.appendChild(kitapBilgisi);
            });
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});


document.getElementById('Klasik').addEventListener('click', function() {
    // Kategoriye tıkladığınızda veriyi çekme işlemini başlatın.
    fetch('http://127.0.0.1:8000/get_books/klasik')  // FastAPI URL'sini buraya ekleyin
        .then(response => response.json())
        .then(data => {
            // Verileri ekranda göstermek için bir konteyner oluşturun
            const veriAlani = document.getElementById('veri-alani');
            veriAlani.innerHTML = ''; // Önceki içeriği temizleyin

            // Verileri kutular içinde ekrana ekleyin
            data.forEach(kitap => {
                const kitapAdi = kitap.kitap_ad; // Verilerinize göre uygun alanları kullanın
                const kitapKategori = kitap.kitap_kategori;
                
                // Yeni bir kutu oluşturun
                const kitapBilgisi = document.createElement('div');
                kitapBilgisi.classList.add('kitap-kutusu'); // Stillemek için bir sınıf ekleyin

                // Kutunun içeriğini ayarlayın
                kitapBilgisi.innerHTML = `
                    <p>Kitap Adı: ${kitapAdi}</p>
                    <p>Kategori: ${kitapKategori}</p>
                `;
                
                veriAlani.appendChild(kitapBilgisi);
            });
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});



document.getElementById('Polisiye').addEventListener('click', function() {
    // Kategoriye tıkladığınızda veriyi çekme işlemini başlatın.
    fetch('http://127.0.0.1:8000/get_books/polisiye')  // FastAPI URL'sini buraya ekleyin
        .then(response => response.json())
        .then(data => {
            // Verileri ekranda göstermek için bir konteyner oluşturun
            const veriAlani = document.getElementById('veri-alani');
            veriAlani.innerHTML = ''; // Önceki içeriği temizleyin

            // Verileri kutular içinde ekrana ekleyin
            data.forEach(kitap => {
                const kitapAdi = kitap.kitap_ad; // Verilerinize göre uygun alanları kullanın
                const kitapKategori = kitap.kitap_kategori;
                
                // Yeni bir kutu oluşturun
                const kitapBilgisi = document.createElement('div');
                kitapBilgisi.classList.add('kitap-kutusu'); // Stillemek için bir sınıf ekleyin

                // Kutunun içeriğini ayarlayın
                kitapBilgisi.innerHTML = `
                    <p>Kitap Adı: ${kitapAdi}</p>
                    <p>Kategori: ${kitapKategori}</p>
                `;
                
                veriAlani.appendChild(kitapBilgisi);
            });
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});


