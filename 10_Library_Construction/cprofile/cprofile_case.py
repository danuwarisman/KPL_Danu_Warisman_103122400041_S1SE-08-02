import cProfile

def proses_berat():
    total = 0
    for i in range(10000):
        for j in range(100):
            total += i * j
    return total

if __name__ == "__main__":
    cProfile.run('proses_berat()')