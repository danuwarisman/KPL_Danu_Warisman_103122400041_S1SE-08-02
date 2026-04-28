from abc import ABC, abstractmethod
from validator import validate_email

class Vehicle(ABC):
    @abstractmethod
    def start(self):
        pass

class Car(Vehicle):
    def start(self):
        print("Car is starting...")

class Motorcycle(Vehicle):
    def start(self):
        print("Motorcycle is starting...")
        
def get_vehicle(vehicle_type):
    if vehicle_type == "car":
        return Car()
    elif vehicle_type == "motorcycle":
        return Motorcycle()
    else:
        raise ValueError("Unknown vehicle type")

vehicle = get_vehicle("car")
vehicle.start()

vehicle = get_vehicle("motorcycle")
vehicle.start()

email = input ("Enter your email: ")
print ("email is filled correctly: ", validate_email(email))