import { createContext, useContext, useState } from "react";

const BasketContentContext = createContext("toto");

export const BasketContentProvider = ({ children }) => {
  const [basketContent, setBasketContent] = useState(null);

  const value = {
    basketContent: basketContent,
    addItemToBasket: (id, price, title) => {
      const newItem = { id: id, price: price, title: title, count: 1 };
      if (basketContent) {
        const index = basketContent.findIndex((item) => item.id === id);
        if (index === -1) {
          setBasketContent([...basketContent, newItem]);
        } else {
          console.log(basketContent, index);
          setBasketContent(
            basketContent.map((item) =>
              item.id === id
                ? {
                    ...item,
                    count: item.count + 1,
                  }
                : item
            )
          );
        }
      } else {
        setBasketContent([newItem]);
      }
    },
    addRemoveItem: (id, newCount) => {
      if (newCount > 0) {
        setBasketContent(
          basketContent.map((item) =>
            item.id === id
              ? {
                  ...item,
                  count: newCount,
                }
              : item
          )
        );
      } else {
        setBasketContent(basketContent.filter((item) => item.id !== id));
      }
    },
  };
  return (
    <BasketContentContext.Provider value={value}>
      {children}
    </BasketContentContext.Provider>
  );
};

export const useBasketContext = () => {
  const context = useContext(BasketContentContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a BacketContentProvider");

  return context;
};
