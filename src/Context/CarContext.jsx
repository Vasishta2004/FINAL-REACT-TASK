import { createContext, useContext, useState } from "react";

const CarContext = createContext();

export function CarProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(car) {
    setFavorites((oldFavorites) => {
      const exists = oldFavorites.find((item) => item.id === car.id);

      if (exists) {
        return oldFavorites.filter((item) => item.id !== car.id);
      }

      return [...oldFavorites, car];
    });
  }

  return (
    <CarContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCars() {
  return useContext(CarContext);
}