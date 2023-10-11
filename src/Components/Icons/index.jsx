import {
    IoBagHandleOutline,
    IoCafeOutline,
    IoMenu,
} from "react-icons/io5";
import {
    MdOutlinePersonOutline,
    MdOutlineMail,
    MdOutlinePhone,
    MdOutlineLocationOn,
    MdOutlineRedeem,
    MdOutlineLocalShipping,
    MdOutlineSell,
} from "react-icons/md";
import {
    HiOutlineSearch,
    HiOutlineMenu,
} from "react-icons/hi";
//import { GoLocation } from "react-icons/go";

const BagIcon = () => {
    return <IoBagHandleOutline size={22} />;
};

const SearchIcon = () => {
    return <HiOutlineSearch size={22} />;
};

const AccountIcon = () => {
    return <MdOutlinePersonOutline size={22} />;
};
const LocationIcon = () => {
    return <MdOutlineLocationOn size={22} />;
};

const EmailIcon = () => {
    return <MdOutlineMail size={22} />;
};

const PhoneIcon = () => {
    return <MdOutlinePhone size={22} />;
};

const CupIcon = () => {
    return <IoCafeOutline size={22} />;
};
const RedeemIcon = () => {
    return <MdOutlineRedeem size={22} />;
};
const ShippingIcon = () => {
    return <MdOutlineLocalShipping size={22} />;
};
const SellIcon = () => {
    return <MdOutlineSell size={22} />;
};
const MenuIcon = () => {
    return <HiOutlineMenu size={22} />;
};


export {
    BagIcon,
    SearchIcon,
    AccountIcon,
    LocationIcon,
    EmailIcon,
    PhoneIcon,
    CupIcon,
    RedeemIcon,
    ShippingIcon,
    SellIcon,
    MenuIcon,
};