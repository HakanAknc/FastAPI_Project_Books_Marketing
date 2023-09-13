// Her kategoriye tıklanınca ilgili kategorinin kitaplarını getir
document.getElementById('Roman').addEventListener('click', () => fetchBooksByCategory('roman'));
document.getElementById('Masal').addEventListener('click', () => fetchBooksByCategory('masal'));
document.getElementById('Öykü').addEventListener('click', () => fetchBooksByCategory('öykü'));
document.getElementById('Klasik').addEventListener('click', () => fetchBooksByCategory('klasik'));
document.getElementById('Polisiye').addEventListener('click', () => fetchBooksByCategory('polisiye'));

// Kategoriye tıkladığınızda veriyi çekme işlemini başlatan bir fonksiyon
function fetchBooksByCategory(category) {
    fetch(`http://127.0.0.1:8000/get_books/${category}`)
        .then(response => response.json())
        .then(data => {
            const veriAlani = document.getElementById('veri-alani');
            veriAlani.innerHTML = '';

            data.forEach(kitap => {
                const kitapresim = kitap.kitap_resim;
                const kitapAdi = kitap.kitap_ad;
                const kitapKategori = kitap.kitap_kategori;
                const kitapfiyat = kitap.kitap_ücret;

                const kitapBilgisi = document.createElement('div');
                kitapBilgisi.classList.add('kitap-kutusu');

                kitapBilgisi.innerHTML = `
                    <img src="${kitapresim}" alt="Kitap Resmi">
                    <p>Kitap Adı: ${kitapAdi}</p>
                    <p>Kategori: ${kitapKategori}</p>
                    <p>Kitap Fiyatı : ${kitapfiyat} TL</p>
                `;

                veriAlani.appendChild(kitapBilgisi);
            });
        })
        .catch(error => {
            console.error('Hata:', error);
        });
}


document.addEventListener('DOMContentLoaded', function () {
    const temizleButton = document.getElementById('Temizle');
    
    // Sayfa yüklendiğinde ve "Temizle" butonuna tıkladığınızda API'yi çağıran işlev
    temizleButton.addEventListener('click', function () {
        fetch('http://127.0.0.1:8000/get_books/')
            .then(response => response.json())
            .then(data => {
                // Verileri ekranda göstermek için bir konteyner oluşturun
                const veriAlani = document.getElementById('veri-alani');
                veriAlani.innerHTML = ''; // Önceki içeriği temizleyin

                // Verileri kutular içinde ekrana ekleyin
                data.forEach(kitap => {
                    const kitapResim = kitap.kitap_resim;
                    const kitapAdi = kitap.kitap_ad;
                    const kitapKategori = kitap.kitap_kategori;
                    const kitapFiyat = kitap.kitap_ücret;

                    // Yeni bir kutu oluşturun
                    const kitapBilgisi = document.createElement('div');
                    kitapBilgisi.classList.add('kitap-kutusu'); // Stillemek için bir sınıf ekleyin

                    // Kutunun içeriğini ayarlayın, burada resim URL'sini src özelliğine ekleyin
                    kitapBilgisi.innerHTML = `
                        <img src="${kitapResim}" alt="Kitap Resmi">
                        <p>Kitap Adı: ${kitapAdi}</p>
                        <p>Kategori: ${kitapKategori}</p>
                        <p>Kitap Fiyatı: ${kitapFiyat} TL</p>
                    `;

                    // Kitap bilgisini HTML sayfasına ekleyin
                    veriAlani.appendChild(kitapBilgisi);
                });
            })
            .catch(error => {
                console.error('Hata:', error);
            });
    });
});


// tüm verileri ekrana yazdrıma
document.addEventListener('DOMContentLoaded', function () {
    // Sayfa yüklendiğinde veriyi çekme işlemini başlatıyorum.
    fetch('http://127.0.0.1:8000/get_books/') // API URL'sini buraya ekleyin
        .then(response => response.json())
        .then(data => {
            // Verileri ekranda göstermek için bir konteyner oluşturun
            const veriAlani = document.getElementById('veri-alani');
            veriAlani.innerHTML = ''; // Önceki içeriği temizleyin

            // Verileri kutular içinde ekrana ekleyin
            data.forEach(kitap => {
                const kitapresim = kitap.kitap_resim;
                const kitapAdi = kitap.kitap_ad; // Verilerinize göre uygun alanları kullanın
                const kitapKategori = kitap.kitap_kategori;
                const kitapfiyat = kitap.kitap_ücret;

                // Yeni bir kutu oluşturun
                const kitapBilgisi = document.createElement('div');
                kitapBilgisi.classList.add('kitap-kutusu'); // Stillemek için bir sınıf ekleyin
                
                // Kutunun içeriğini ayarlayın, burada resim URL'sini src özelliğine ekleyin
                kitapBilgisi.innerHTML = `
                    <img src="${kitapresim}" alt="Kitap Resmi">
                    <p>Kitap Adı: ${kitapAdi}</p>
                    <p>Kategori: ${kitapKategori}</p>
                    <p>Kitap Fiyatı: ${kitapfiyat} TL</p>
                `;
                
                // Kitap bilgisini HTML sayfasına ekleyin
                document.body.appendChild(kitapBilgisi);
                
            

                veriAlani.appendChild(kitapBilgisi);
            });
        })
        .catch(error => {
            console.error('Hata:', error);
        });
});



document.addEventListener('DOMContentLoaded', function () {
    // Arama çubuğunu ve arama simgesini bulun
    const aramaCubugu = document.getElementById('arama-cubugu');
    const aramaSimgesi = document.getElementById('arama-simgesi');

    // Arama simgesine tıklanınca işlem yapın
    aramaSimgesi.addEventListener('click', function () {
        // Arama çubuğundaki değeri alın
        const aramaKelimesi = aramaCubugu.value.toLowerCase(); // Küçük harfle işlem yapmak için

        // Sayfa yüklendiğinde veriyi çekme işlemini başlatıyorum.
        fetch(`http://127.0.0.1:8000/get_books/${aramaKelimesi}`) // API URL'sini buraya ekleyin
            .then(response => response.json())
            .then(data => {
                // Verileri ekranda göstermek için bir konteyner oluşturun
                const veriAlani = document.getElementById('veri-alani');
                veriAlani.innerHTML = ''; // Önceki içeriği temizleyin

                // Verileri kutular içinde ekrana ekleyin
                data.forEach(kitap => {
                    const kitapresim = kitap.kitap_resim;
                    const kitapAdi = kitap.kitap_ad; // Verilerinize göre uygun alanları kullanın
                    const kitapKategori = kitap.kitap_kategori;
                    const kitapFiyat = kitap.kitap_ücret;

                    // Yeni bir kutu oluşturun
                    const kitapBilgisi = document.createElement('div');
                    kitapBilgisi.classList.add('kitap-kutusu'); // Stillemek için bir sınıf ekleyin

                    // Kutunun içeriğini ayarlayın
                    kitapBilgisi.innerHTML = `
                        <img src="${kitapresim}" alt="Kitap Resmi">
                        <p>Kitap Adı: ${kitapAdi}</p>
                        <p>Kategori: ${kitapKategori}</p>
                        <p>Kitap Fiyatı: ${kitapFiyat} TL</p>
                    `;

                    veriAlani.appendChild(kitapBilgisi);
                });
            })
            .catch(error => {
                console.error('Hata:', error);
            });
    });
});


