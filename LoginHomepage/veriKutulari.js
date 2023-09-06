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



let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }