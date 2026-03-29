import React, { useState } from "react";
import siteLogoImg from "/assets/images/site-logo.png";
import Person from "@mui/icons-material/Person";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Search from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { CustomModal } from "./CustomModal";
import HeaderMobile from "./Header/HeaderMobile";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const signInModal = {
    header: (
      <div className="text-xl font-bold capitalize text-center">sign in</div>
    ),
    footer: (
      <div className="flex justify-center items-center gap-5 ">
        <button
          className="btn-cancel p-2 px-4 border rounded-md hover:bg-black hover:text-white cursor-pointer min-w-25"
          onClick={() => setModalVisible(false)}
        >
          cancel
        </button>
        <button
          className="btn-save  p-2 px-4 border rounded-md hover:bg-black hover:text-white cursor-pointer min-w-25"
          onClick={() => setModalVisible(false)}
        >
          sign in
        </button>
      </div>
    ),
    body: (
      <div className="flex justify-center gap-5">
        <input
          placeholder="username"
          type="text"
          className="border p-2 rounded-sm border-gray-400"
        ></input>
        <input
          type="password"
          placeholder="password"
          className="border p-2 rounded-sm border-gray-400"
        ></input>
      </div>
    ),
  };

  return (
    <>
      <HeaderMobile />
      <div className="text-xs justify-between px-4 py-2 text-gray-500 lg:mx-12 hidden md:flex">
        <div>Amazons response to Covid-19</div>
        <nav className="flex gap-4">
          <div>United States</div>
          <div>ENG</div>
          <div>USD</div>
          <div>Customer Service</div>
          <div>Sell on Amazon</div>
        </nav>
      </div>
      <div className=" hidden md:flex justify-between  items-center p-4 lg:mx-12">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={siteLogoImg} alt="site-logo" className="w-30" />
          </Link>
          <Link to="/all">All</Link>
          <Link to="/deals">Today's Deals</Link>
          <Link to="/gift-cards">Gift Cards</Link>
          <Link to="/registry-gifting">Registry & Gifting</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="search">
            <Search />
            search
          </Link>
          <button
            onClick={() => setModalVisible(true)}
            type="button"
            className="cursor-pointer"
          >
            <Person />
          </button>
          <Link to="wishlist">
            <Favorite />
          </Link>
          <Link to="cart">
            <ShoppingCart />
          </Link>
        </div>
      </div>
      <CustomModal
        header={signInModal.header}
        footer={signInModal.footer}
        visible={modalVisible}
        onHide={() => setModalVisible(false)}
      >
        {signInModal.body}
      </CustomModal>
    </>
  );
};

export default Header;
