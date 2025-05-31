import speedtest
import time

def run_speedtest():
    st = speedtest.Speedtest()
    st.get_best_server()

    print("Измерение скорости загрузки...")
    download_speeds = []
    for _ in range(3):  # 3 замера для точности
        speed = st.download() / 1_000_000  # в Мбит/с
        download_speeds.append(speed)
        print(f"Загрузка: {speed:.2f} Мбит/с")
        time.sleep(1)

    print("\nИзмерение скорости отдачи...")
    upload_speed = st.upload() / 1_000_000  # в Мбит/с
    print(f"Отдача: {upload_speed:.2f} Мбит/с")

    # Анализ скоростей загрузки
    max_download = max(download_speeds)
    min_download = min(download_speeds)
    avg_download = sum(download_speeds) / len(download_speeds)

    print("\nРезультаты:")
    print(f"Макс. скорость загрузки: {max_download:.2f} Мбит/с")
    print(f"Мин. скорость загрузки: {min_download:.2f} Мбит/с")
    print(f"Средняя скорость загрузки: {avg_download:.2f} Мбит/с")
    print(f"Скорость отдачи: {upload_speed:.2f} Мбит/с")

if __name__ == "__main__":
    run_speedtest()

input()
