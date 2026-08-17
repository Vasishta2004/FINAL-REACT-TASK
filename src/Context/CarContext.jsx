import { createContext, useContext, useState } from "react";

const CarContext = createContext();

export function CarProvider({ children }) {
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "Toyota Camry",
      brand: "Toyota",
      price: 3000000,
      year: 2024,
      image:
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "BMW 3 Series",
      brand: "BMW",
      price: 4500000,
      year: 2024,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Mercedes-Benz C-Class",
      brand: "Mercedes-Benz",
      price: 5500000,
      year: 2024,
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Audi A4",
      brand: "Audi",
      price: 4800000,
      year: 2024,
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Hyundai Creta",
      brand: "Hyundai",
      price: 1800000,
      year: 2024,
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
    },
  ]);

  return (
    <CarContext.Provider value={{ cars, setCars }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCars() {
  return useContext(CarContext);
}