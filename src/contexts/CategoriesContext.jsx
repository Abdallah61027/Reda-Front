import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const CategoriesContext = createContext({});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://shop-two-zeta-25.vercel.app/api/v1/categories",
        );
        const data = response.data.data;
        setCategories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCategories();
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories, isLoading }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => {
  return useContext(CategoriesContext);
};
