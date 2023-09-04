// const adres = "http://127.0.0.1:8000/get_users/";

// fetch(adres)                                 // ? ---Bu satır, belirtilen URL'ye bir HTTP isteği yapmak için fetch fonksiyonunu kullanır. adres değişkeni, isteğin gideceği adresi belirtir.
//     .then((response) => response.json())    // ? ---Bu satır, fetch işleminin sonucu olan response nesnesini alır ve bu yanıtı JSON formatında çözümlemek için bir .then() zinciri başlatır.
//     .then((data) => console.log(data))     // ? ---Bu satır, JSON çözümlenmiş veriyi alır ve bu veriyi konsola yazdırmak için bir .then() zinciri daha ekler. data burada çözümlenmiş JSON veriyi temsil eder.
//     .catch((err) => console.log(err))     // ? ---Bu satır, önceki .then() zincirlerinde herhangi bir hata oluşursa bu hatayı yakalamak ve konsola yazdırmak için bir .catch() bloğu ekler. err hatayı temsil eder.


// ! fetch api GET ile veri çekme
function getData(url){
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

getData("http://127.0.0.1:8000/get_books/roman")
// getData("http://127.0.0.1:8000/get_books_sold/")



