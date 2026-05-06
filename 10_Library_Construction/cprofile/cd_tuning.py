import random
import time

data = [random.randint(0, 10000) for _ in range(1000000)]  # list besar

def hitung_unik_set(data):
    return len(set(data))  # Konversi ke set: O(n) -> Cepat

start = time.time()
print("Jumlah unik:", hitung_unik_set(data))
end = time.time()
print("Waktu eksekusi:", end - start, "detik")