import os
import webbrowser
import time
import sys

def main():
    print("Добро пожаловать в магазин Dildintsov!")
    answer = input("Что вы хотите купить? ").lower()
    
    if "дилдин" in answer or "dildin" in answer or "хочу купить" in answer:
        print("Отлично! Открываю магазин Dildintsov для вас...")
        
        # Полный путь к файлу index.html
        html_file = os.path.join(os.path.dirname(__file__), "index.html")
        
        # Проверяем существует ли файл
        if os.path.exists(html_file):
            webbrowser.open(html_file)
        else:
            print("Файл магазина не найден. Пожалуйста, убедитесь что index.html находится в той же папке.")
            time.sleep(5)
    else:
        print("Пошёл ты тогда на хуй. Рыцаря задержал!")
        time.sleep(15)
        sys.exit()

if __name__ == "__main__":
    main()