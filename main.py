from fastapi import (FastAPI, Query)   # FastAPI kütüphanesini import etim    # TODO Ana proje
import pandas as pd           # FastAPI kütüphanesini import etim      -- uvicorn main:app --reload
import func_ted as fnc
import uuid
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()     # FastAPI tanımladım

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dosya yolları
excel_file_path = "kisiler.xlsx"              # Excel dosyasının yolunu belirtim
csv_file_path = "persons.csv"                 # CSV dosyasının yolunu belirtim

excel_file = "kitaplar.xlsx"   
csv_file = "books.csv"   

exel_sold = "satilanlar.xlsx"
csv_sold = "bookssold.csv"

@app.get("/test/") 
async def test():
    return {'test' : 'cevap'}


@app.get("/excel_to_csv")
async def to_csv(excel_name : str = Query(..., description='Donusturulecek excel dosya adi'), csv_name: str = Query(...)):
    result = fnc.excel_to_csv(excel_file=excel_name,
                              csv_file=csv_name)

    return result


# Veri çerçeveleri (DataFrames) oluşturma
kisiler_df = pd.read_csv(csv_file_path)
kitaplar_df = pd.read_csv(csv_file)
satilanlar_df = pd.read_csv(csv_sold)


# Benzersiz kimlik (UUID) üretme işlemi
person_id_counter = str(uuid.uuid4()) if kisiler_df.empty else kisiler_df["kisi_id"].max() + 1
kitap_id_counter = str(uuid.uuid4()) if kitaplar_df.empty else kitaplar_df["kitap_id"].max() + 1
satilan_id_counter = str(uuid.uuid4()) if satilanlar_df.empty else satilanlar_df["tablo_id"].max() + 1


# Yeni verileri CSV'ye ekleme fonksiyonu
async def append_to_csv(dataframe, csv_path):        # verileri CSV dosyasına kaydeder.
    dataframe.to_csv(csv_path, index=False)



# 1. Tablo = Kişiler
@app.get("/get_users/")    # "Kişiler" tablosundaki tüm kişilerin bir listesini alır.    
async def users_get():
    kisiler_df = pd.read_csv(csv_file_path)   # Güncelleme
    return kisiler_df.to_dict(orient="records")


# # 1. Tablo = Kişiler
# @app.get("/get_users/")    # "Kişiler" tablosundaki tüm kişilerin bir listesini alır.    
# async def users_get():
#     return fnc.get_users()


@app.get("/get_users/{user_id}")       #"Kişiler" tablosundaki belirli bir kişiyi ID'sine göre alır.
async def users_id_get(user_ID: int):
    kisiler_df = pd.read_csv(csv_file_path) # TODO
    kisi = kisiler_df[kisiler_df["kisi_id"] == user_ID].to_dict(orient="records")
    if not kisi:
        return {"error": "Belirtilen ID'ye sahip bir kişi bulunamadı."}
    return kisi[0]       # orient parametresi ile sözlük formatında döndürüyoruz.


@app.post("/post_add_users/")     # Verilen verileri (ad, soyad, tel ve bütçe) kullanarak yeni bir kişi ekliyoruz.
async def add_users_post(name: str, surname: str, phone: str, budget: float):
    if len(phone.strip()) != 10 or not phone.isdigit():
        return {"error": "Telefon numarası 10 rakamdan oluşmalıdır."}
    
    kisiler_df = pd.read_csv(csv_file_path)  # Her seferinde veriyi güncel şekilde okuyoruz

    existing_person = kisiler_df[kisiler_df["tel"] == phone]
    if not existing_person.empty:
        return {"message": "Bu telefon numarası zaten kayıtlıdır."}

    new_person_data = pd.DataFrame({"kisi_id": [person_id_counter], "ad": [name], "soyad": [surname], "tel": [phone], "bütçe": [budget]})
    
    # Eğer "persons.csv" dosyası boş ise, yeni veriyi kullanarak veri çerçevesi oluşturuyorum.
    if pd.read_csv(csv_file_path).empty:
        updated_data_csv = new_person_data
    else:
         # Eğer "persons.csv" dosyası dolu ise, mevcut veri çerçevesini okuyor ve yeni veriyi ekleyerek güncellenmiş bir veri çerçevesi oluştur.
        existing_data_csv = pd.read_csv(csv_file_path)
        updated_data_csv = pd.concat([existing_data_csv, new_person_data], ignore_index=True)

    updated_data_csv.to_csv(csv_file_path, index=False)      # "persons.csv" dosyasına kaydet.
    return {"message": "Veriler CSV dosyanıza başarıyla kaydedildi."}


@app.get("/get_user_surname/{surname}")
async def user_surname_get(surname: str):
    kisiler_df = pd.read_csv(csv_file_path)  # kisiler_df güncelleme
    kisiler_soyad = kisiler_df[kisiler_df["soyad"] == surname].to_dict(orient="records")
    
    if not kisiler_soyad:
        return {"message": f"Soyadı '{surname}' olan kişi kayıtlarda yok. Kimi arıyorsan adam akıllı öğren de gel :)"}
    
    return kisiler_soyad


# 2. Tablo = Kitaplar
@app.get("/get_books/")      # "Kitaplar" tablosundaki tüm kitapların bir listesini alır.
async def books_list_get():
    kitaplar_df = pd.read_csv(csv_file) 
    return kitaplar_df.to_dict(orient="records")


@app.get("/get_books/{books_category}")     # "Kitaplar" tablosundaki belirli bir kategoriye ait kitapları alır.
async def books_category_get(books_category: str):
    kitaplar_df = pd.read_csv(csv_file) # TODO
    kitaplar_in_kategori = kitaplar_df[kitaplar_df["kitap_kategori"] == books_category]   # Belirtilen kategoriye ait tüm kitapları alalım
    
    if kitaplar_in_kategori.empty:   # Eğer belirtilen kategoride hiç kitap yoksa hata döndürelim
        return {"error": "Belirtilen kategoride kitap bulunamadı."}
    
    sorted_kitaplar = kitaplar_in_kategori.sort_values(by="kitap_ad")  # Kitapları sıralayalım ve liste olarak döndürelim
    return sorted_kitaplar.to_dict(orient="records")


@app.post("/post_add_books/")    #  Verilen verileri (kitap_ad, kitap_kategori, kitap_ücret ve kitap_stok) kullanarak yeni bir kitap ekler.
async def add_books_post(book_name: str, book_category: str, book_fee: int, book_stock: int,book_image:str):
    kitaplar_df = pd.read_csv(csv_file)
    
    # Aynı "kitap_ad"a sahip kitabın zaten var olup olmadığını kontrol ediyorum
    if kitaplar_df[kitaplar_df["kitap_ad"] == book_name].shape[0] > 0:
        return {"error": "Bu kitap zaten kayıtlıdır."}
    
    veri = pd.DataFrame({"kitap_id": [kitap_id_counter],
                          "kitap_ad": [book_name],
                            "kitap_kategori": [book_category],
                              "kitap_ücret": [book_fee],
                                "kitap_stok": [book_stock],
                                "kitap_resim":[book_image]})

    if kitaplar_df.empty:
        updated_veri_csv = veri
    else:
        existing_veri_csv = kitaplar_df
        updated_veri_csv = pd.concat([existing_veri_csv, veri], ignore_index=True)

    updated_veri_csv.to_csv(csv_file, index=False)
    return {"message": "Girdiğiniz kitap CSV dosyanıza başarıyla kaydedildi."}


@app.get("/get_book_sales/")        # Stok ve bütçe kontrolü
async def book_sales_get(user_ID: int, book_ID: int):
    kitaplar_df = pd.read_csv(csv_file)         # TODO
    kisiler_df = pd.read_csv(csv_file_path)     # TODO
    satilanlar_df = pd.read_csv(csv_sold) 
    
    kullanici = kisiler_df[kisiler_df["kisi_id"] == user_ID]

    if kullanici.empty:
        return {"message": "Kullanıcı bulunamadı."}

    kitap = kitaplar_df[kitaplar_df["kitap_id"] == book_ID]

    if kitap.empty:
        return {"message": "Kitap bulunamadı."}

    bakiye = kullanici["bütçe"].values[0]
    kitap_ücreti = kitap["kitap_ücret"].values[0]

    if bakiye >= kitap_ücreti:
        stok_sayisi = kitap["kitap_stok"].values[0]

        if stok_sayisi > 0:
            # Kullanıcının bu kitabı zaten satın alıp almadığını kontrol edin
            existing_sale = satilanlar_df[(satilanlar_df["kullanici_id"] == user_ID) & (satilanlar_df["satilan_kitap_id"] == book_ID)]
            if not existing_sale.empty:
                return {"message": f"{user_ID} ID'li kullanıcı, {book_ID} ID'li kitabı daha önce zaten aldınız."}

            tablo_id = satilan_id_counter   # benzersiz ID

            new_sale = pd.DataFrame({"tablo_id": [tablo_id], "satilan_kitap_id": [user_ID], "kullanici_id": [user_ID]})
            updated_sales_csv = pd.concat([satilanlar_df, new_sale], ignore_index=True)

            updated_sales_csv.to_csv(csv_sold, index=False)

            # Bakiye güncelleme
            kalan_bakiye = bakiye - kitap_ücreti
            kisiler_df.loc[kisiler_df["kisi_id"] == user_ID, "bütçe"] = kalan_bakiye
            kisiler_df.to_csv(csv_file_path, index=False)

            # Stok güncelleme
            kitaplar_df.loc[kitaplar_df["kitap_id"] == book_ID, "kitap_stok"] = stok_sayisi - 1
            kitaplar_df.to_csv(csv_file, index=False)

            return {"message": f"{user_ID} ID'li kullanıcı, {book_ID} ID'li kitabı aldınız. Bakiyenizde {kalan_bakiye:.2f} TL kaldı. Hayırlı olsun!"}
        else:
            return {"message": f"{book_ID} ID'li kitap stokta kalmamıştır. Başka bir kitap seçiniz."}
    else:
        return {"message": "Bütçeniz yetersiz. Kitabı alamazsınız."}
    


# 3. Tablo = Satılan Kitaplar
@app.get("/get_books_sold/")        # "Satılan Kitaplar" tablosundaki tüm satılan kitapların bir listesini alır.
async def books_sold_get():
    satilanlar_df = pd.read_csv(csv_sold) # TODO
    return satilanlar_df.to_dict(orient="records")


@app.get("/get_stock_control/{book_name}")      # Verilen kitap adına (kitap_ad) göre "Kitaplar" tablosundaki stok durumunu kontrol eder.
async def stock_control_get(book_name: str):
    kitaplar_df = pd.read_csv(csv_file) # TODO
    kitap_stok = kitaplar_df[kitaplar_df["kitap_ad"] == book_name]["kitap_stok"]
    if kitap_stok.empty:
        return {"error": "Bu kitap mevcut değil."}
    else:
        return {"kitap_ad": book_name, "kitap_stok": int(kitap_stok)}
    

@app.get("/get_books_sold/{table_ID}")
async def get_satilan_kitap_by_id(table_ID: int):
    satilanlar_df = pd.read_csv(csv_sold) # TODO
    satilan_kitap = satilanlar_df[satilanlar_df["tablo_id"] == table_ID]

    if satilan_kitap.empty:
        return {"message": "Belirtilen tablo_id bulunamadı."}

    kitap_id = satilan_kitap["satilan_kitap_id"].values[0]
    kullanici_id = satilan_kitap["kullanici_id"].values[0]

    kitap_df = pd.read_csv("books.csv")
    kitap = kitap_df[kitap_df["kitap_id"] == kitap_id]

    kisiler_df = pd.read_csv("persons.csv")
    kullanici = kisiler_df[kisiler_df["kisi_id"] == kullanici_id]

    if kitap.empty or kullanici.empty:
        return {"message": "İlgili kitap veya kullanıcı bulunamadı. Git kimi aramak istiyorsan adam akılı öğren öyle gel yürüüüü :)"}

    kitap_ad = kitap["kitap_ad"].values[0]
    ad = kullanici["ad"].values[0] 
    soyad = kullanici["soyad"].values[0] 
    tel = kullanici["tel"].values[0] 

    result = f"Ad: {ad}, Soyad: {soyad}, Tel: {tel}, Kitab adı: {kitap_ad}"
    return {"satilan_kitap_bilgileri": result}


@app.get("/get_books_sold/{book_ID}")
async def get_kitap_satilan(book_ID: int):
    try:
        books_df = pd.read_csv(csv_file)
        sold_df = pd.read_csv(csv_sold)
        
        kitap = books_df[books_df["kitap_id"] == book_ID]

        if kitap.empty:
            return {"message": "Belirtilen kitap_id bulunamadı."}

        kitap_ad = kitap["kitap_ad"].values[0]

        satilan_kitaplar = sold_df[sold_df["satilan_kitap_id"] == book_ID]
        toplam_satilan = len(satilan_kitaplar)

        return {
            "kitap_ad": kitap_ad,
            "toplam_satilan": toplam_satilan
        }
    except Exception as error:
        return {"message": str(error)}
