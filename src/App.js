import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { createContext, useEffect, useState } from "react";
import {
  onAuthChange,
  onCategoriesLoad,
  onOrdersLoad,
  onProductsLoad,
} from "./firebase";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Deliver from "./pages/Deliver";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";
import Orders from "./pages/Orders";

// Создать контекст, который будет хранить данные.
export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],
  cart: {}, // содержимое корзины
  setCart: () => {}, // изменить содержимое корзины
  user: null,
  searchTerm: '',
  setSearchTerm: () => {},
  searchResults: [],
  setSearchResults: () => {}
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    onCategoriesLoad(setCategories);
    onProductsLoad(setProducts);
    onOrdersLoad(setOrders);

    onAuthChange((user) => {
      if (user) {
        user.isAdmin = user.email === "elikbaevasedep77@gmail.com";
      }

      setUser(user);
    });
  }, []);

  const handleSearch = () => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{ categories, products, cart, setCart, user, orders, searchTerm, setSearchTerm, searchResults, setSearchResults }}
      >
        <Layout handleSearch={handleSearch}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delivery" element={<Deliver />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
