from memory_profiler import profile

@profile
def proses_memori():
    data = [x * 2 for x in range(100000)]
    return sum(data)

if __name__ == "__main__":
    proses_memori() 