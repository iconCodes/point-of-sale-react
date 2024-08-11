import React, { useState, useRef } from "react";
import { Grid, ThemeUIProvider } from "theme-ui";
import { theme } from "./Theme/Theme";
import { MenuWrapper } from "./Components/Menu";
import { ShoppingCartWrapper } from "./Components/ShoppingCart/ShoppingCart";
import { CartItem, MenuItem } from "./Types";

const App: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: MenuItem) => {
    const newItem: CartItem = { ...item, itemId: item._id, _id: Math.random().toString() };
    setCartItems([...cartItems, newItem]);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleRemoveFromCart = (_id: string) => {
    const newCartItems = cartItems.filter(cartItem => cartItem._id !== _id);
    setCartItems(newCartItems);
  };

  const enterFullscreen = () => {
    if (elementRef?.current?.requestFullscreen) {
      elementRef.current.requestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  React.useLayoutEffect(() => {
    enterFullscreen();
    setIsFullscreen(true);
  }, []);

  const fullscreenToggle = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };

  return (
    <ThemeUIProvider theme={theme}>
      <Grid columns="3fr 2fr" gap={0} ref={elementRef}>
        <MenuWrapper fullscreenToggle={fullscreenToggle} handleAddToCart={handleAddToCart} />

        <ShoppingCartWrapper
          cartItems={cartItems}
          handleClearCart={handleClearCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </Grid>
    </ThemeUIProvider>
  );
};

export default App;
