import { useContext, useState } from "react";
import { AppContext } from "../../App";
import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import NavToggle from "../NavToggle/NavToggle";
import "./Layout.css";
import Search from "../Search/Search";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { searchTerm, cart, user } = useContext(AppContext);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  // Логирование состояния контекста для отладки
  console.log("Layout component - searchTerm:", searchTerm);
  console.log("Layout component - cart:", cart);
  console.log("Layout component - user:", user);

  return (
    <div className={`Layout ${searchTerm ? "search-active" : ""}`}>
      <header>
        <Logo />
        <Nav />
        <Search />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <div className="user">
          <CartLink />
          <Auth />
        </div>
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
