import pandas as pd

class CsvPaths:
        PERSONS = "persons.csv"
        BOOKS = "books.csv" 
        SOLDS = "bookssold.csv"

def excel_to_csv(excel_file, csv_file):      # bu fonksiyon verilen bir Excel dosyasını okuyacak ve bir CSV dosyasına dönüştürecek.
        try:
                if len(csv_file) < 3:
                        raise Exception('{name} dosyasi adi hatalidir'.format(name=csv_file))
                # Excel dosyasını pandas kütüphanesi ile okuma
                df = pd.read_excel(excel_file + '.xlsx')
 
                # DataFrame'i CSV dosyasına yazdık
                df.to_csv(csv_file + '.csv', index=False)

                return {'status': True, 'desc' : 'CSV file is created'}
        except Exception as error:
                return {'status': False, 'desc': str(error)}
"""
def read_csv(csvName):
        return pd.read_csv(csvName)      # CSV dosyasının yolunu belirtim
        
def get_users():          # "get_users" tablosundaki tüm kişilerin bir listesini alır.
        try:
                dfPersons = read_csv(CsvPaths.PERSONS)
                data = dfPersons.to_dict(orient="records")
                return {'status': True, 'desc' : 'Users get successfully', 'data': data}
        except Exception as error:
                return {'status': False, 'desc': str(error)}

""" 
