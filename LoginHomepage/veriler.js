
document.getElementById('Roman').addEventListener('click', function() {
    // Kategoriye tıkladığınızda burada veriyi çekme işlemini başlatın.
    fetch('http://127.0.0.1:8000/get_books/roman')  // FastAPI URL'sini buraya ekleyin
        .then(response => response.json())
        .then(data => {
            // Verileri ekrana yazdırmak için DOM'u kullanın
            const veriAlani = document.getElementById('veri-alani');
            veriAlani.innerHTML = ''; // Önceki içeriği temizleyin

            // Verileri ekrana ekleyin
            data.forEach(kitap => {
                const kitapAdi = kitap.kitap_ad; // Verilerinize göre uygun alanları kullanın
                const kitapKategori = kitap.kitap_kategori;
                
                const kitapBilgisi = document.createElement('p');
                kitapBilgisi.textContent = `Kitap Adı: ${kitapAdi}, Kategori: ${kitapKategori}`;
                
                veriAlani.appendChild(kitapBilgisi);
            });
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
            // Verileri ekrana yazdırmak için DOM'u kullanın
            const veriAlani = document.getElementById('veri-alani');
            veriAlani.innerHTML = ''; // Önceki içeriği temizleyin

            // Verileri ekrana ekleyin
            data.forEach(kitap => {
                const kitapAdi = kitap.kitap_ad; // Verilerinize göre uygun alanları kullanın
                const kitapKategori = kitap.kitap_kategori;
                
                const kitapBilgisi = document.createElement('p');
                kitapBilgisi.textContent = `Kitap Adı: ${kitapAdi}, Kategori: ${kitapKategori}`;
                
                veriAlani.appendChild(kitapBilgisi);
            });
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
            // Verileri ekrana yazdırmak için DOM'u kullanın
            const veriAlani = document.getElementById('veri-alani');
            veriAlani.innerHTML = ''; // Önceki içeriği temizleyin

            // Verileri ekrana ekleyin
            data.forEach(kitap => {
                const kitapAdi = kitap.kitap_ad; // Verilerinize göre uygun alanları kullanın
                const kitapKategori = kitap.kitap_kategori;
                
                const kitapBilgisi = document.createElement('p');
                kitapBilgisi.textContent = `Kitap Adı: ${kitapAdi}, Kategori: ${kitapKategori}`;
                
                veriAlani.appendChild(kitapBilgisi);
            });
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
            // Verileri ekrana yazdırmak için DOM'u kullanın
            const veriAlani = document.getElementById('veri-alani');
            veriAlani.innerHTML = ''; // Önceki içeriği temizleyin

            // Verileri ekrana ekleyin
            data.forEach(kitap => {
                const kitapAdi = kitap.kitap_ad; // Verilerinize göre uygun alanları kullanın
                const kitapKategori = kitap.kitap_kategori;
                
                const kitapBilgisi = document.createElement('p');
                kitapBilgisi.textContent = `Kitap Adı: ${kitapAdi}, Kategori: ${kitapKategori}`;
                
                veriAlani.appendChild(kitapBilgisi);
            });
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
            // Verileri ekrana yazdırmak için DOM'u kullanın
            const veriAlani = document.getElementById('veri-alani');
            veriAlani.innerHTML = ''; // Önceki içeriği temizleyin

            // Verileri ekrana ekleyin
            data.forEach(kitap => {
                const kitapAdi = kitap.kitap_ad; // Verilerinize göre uygun alanları kullanın
                const kitapKategori = kitap.kitap_kategori;
                
                const kitapBilgisi = document.createElement('p');
                kitapBilgisi.textContent = `Kitap Adı: ${kitapAdi}, Kategori: ${kitapKategori}`;
                
                veriAlani.appendChild(kitapBilgisi);
            });
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});