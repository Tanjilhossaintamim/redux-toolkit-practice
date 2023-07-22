import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
const NavbarComponents = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
      <Navbar color="secondary">
        <NavbarBrand href="/" className="text-white">
          Redux-Toolkit
        </NavbarBrand>

        <Nav className="mx-auto">
          <NavItem>
            <NavLink
              to={"/"}
              style={{
                textDecoration: "none",
                color: "#fff",
                margin: "0 15px",
              }}
            >
              Product
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to={"/cart"}
              style={{
                textDecoration: "none",
                color: "#fff",
                margin: "0 15px",
              }}
            >
              Cart <span style={{ color: "black" }}>{cartProducts.length}</span>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;
