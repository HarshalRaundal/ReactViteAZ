import Favorite from "@mui/icons-material/Favorite";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import Menu from "@mui/icons-material/Menu";
import MenuOpen from "@mui/icons-material/MenuOpen";
import Person from "@mui/icons-material/Person";
import Search from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomModal } from "../CustomModal";
import siteLogoImg from "/assets/images/site-logo.png";

const HeaderMobile = () => {
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
      <div className="flex flex-wrap justify-center gap-5">
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

  const [topBarExpanded, setTopBarExpanded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="md:hidden text-xs grid grid-cols-2 px-4 py-2 text-gray-500 lg:mx-12">
        <div className="row">Amazons response to Covid-19</div>

        {topBarExpanded ? (
          <KeyboardArrowDown
            className="cursor-pointer ml-auto"
            onClick={() => setTopBarExpanded(false)}
          />
        ) : (
          <KeyboardArrowLeft
            className="cursor-pointer  ml-auto"
            onClick={() => setTopBarExpanded(true)}
          />
        )}
        {topBarExpanded && (
          <nav className="w-full">
            <div>United States</div>
            <div>ENG</div>
            <div>USD</div>
            <div>Customer Service</div>
            <div>Sell on Amazon</div>
          </nav>
        )}
      </div>

      <div className="md:hidden  mx-4 flex items-center">
        {expanded ? (
          <MenuOpen
            className=" h-full absolute cursor-pointer"
            onClick={() => setExpanded(false)}
          />
        ) : (
          <Menu
            className=" h-full absolute cursor-pointer"
            onClick={() => setExpanded(true)}
          />
        )}
        <Link to="/" className="w-full flex justify-center items-center">
          <img src={siteLogoImg} alt="site-logo" className="w-25" />
        </Link>
      </div>
      {expanded && (
        <div className="md:hidden  p-4">
          <div className="flex items-center gap-4 whitespace-nowrap">
            <Link to="/all">All</Link>
            <Link to="/deals">Today's Deals</Link>
            <Link to="/gift-cards">Gift Cards</Link>
            <Link to="/registry-gifting">Registry & Gifting</Link>
          </div>
        </div>
      )}
      <div className="flex md:hidden items-center gap-4 justify-between mx-4 mb-2">
        <Link to="search">
          <Search />
          search
        </Link>
        <div className="flex gap-2">
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

export default HeaderMobile;
