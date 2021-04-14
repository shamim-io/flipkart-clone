import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStatevalue } from "../context/StateProvider";
import { auth } from "../firebase";

const useStyles = makeStyles({
  root: {
    background: "#2874f0",
    border: 0,
    color: "white",
    height: 48,
    padding: "0 10px",
  },
  label: {
    textTransform: "capitalize",
    fontWeight: " bold",
  },
});

function Header() {
  const [state, dispatch] = useStatevalue();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleAuthentication = () => {
    if (state.user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search for products, brands and more"
        />
        <SearchIcon className="header__searchicon" />
      </div>
      <div className="header__nav">
        <Link to={!state.user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <h4>{state.user ? "Sign Out" : "Sign In"}</h4>
          </div>
        </Link>
        <div className="header__option">
          <Button
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            onMouseOver={handleClick}
            classes={{
              root: classes.root, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
          >
            More
          </Button>
          <Menu
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
            getContentAnchorEl={null}
          >
            <MenuItem>
              {state.user ? (
                <>
                  "Hello! "
                  <span style={{ color: "#fb641b", fontWeight: "bold" }}>
                    {state.user.email}
                  </span>
                </>
              ) : (
                "Welcome Guest"
              )}
            </MenuItem>
            <MenuItem>Sell on flipkart</MenuItem>
            <MenuItem>24x7 customer service</MenuItem>
          </Menu>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            {state.basket?.length > 0 ? (
              <label className="basket__count">{state.basket?.length}</label>
            ) : (
              ""
            )}
            <label style={{ fontWeight: " bold", textTransform: "capitalize" }}>
              Cart
            </label>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
