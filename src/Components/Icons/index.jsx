import {
    IoBagHandleOutline,
    IoCafeOutline,
    IoMenu,
    IoCalendarClear,
    IoCloseOutline,
} from "react-icons/io5";
import {
    MdOutlinePersonOutline,
    MdOutlineMail,
    MdOutlinePhone,
    MdOutlineLocationOn,
    MdOutlineRedeem,
    MdOutlineLocalShipping,
    MdOutlineSell,
    MdOutlineAccessAlarm,
    MdOutlineLanguage,
    MdEco,
    MdKeyboardArrowRight,
} from "react-icons/md";
import {
    HiOutlineSearch,
    HiOutlineMenu,
} from "react-icons/hi";
//import { GoLocation } from "react-icons/go";
import {
    AiOutlineClockCircle,
} from "react-icons/ai";

import {
    CiPillsBottle1,
} from "react-icons/ci";

import {
    LiaTemperatureLowSolid,
} from "react-icons/lia";

import {
    FaCircle,
    FaTag,
    FaUserAlt,
} from "react-icons/fa";


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
const ClockIcon = () => {
    return <AiOutlineClockCircle size={22} />;
};
const BottleIcon = () => {
    return <CiPillsBottle1 size={22} />;
};
const TemperatureIcon = () => {
    return <LiaTemperatureLowSolid size={22} />;
};
const AlarmIcon = () => {
    return <MdOutlineAccessAlarm size={22} />;
};
const CircleIcon = () => {
    return <FaCircle size={22} color="#BC575F"/>;
};
const LanguageIcon = () => {
    return <MdOutlineLanguage size={22} />;
};
const EcoIcon = () => {
    return <MdEco size={22} />;
};
const ArrowRightIcon = () => {
    return <MdKeyboardArrowRight size={22} />;
};
const CalendarIcon = () => {
    return <IoCalendarClear size={20} />;
};
const TagIcon = () => {
    return <FaTag size={20} />;
};
const UserIcon = () => {
    return <FaUserAlt size={20} />;
};
const CloseIcon = () => {
    return <IoCloseOutline size={40} />;
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
    ClockIcon,
    BottleIcon,
    TemperatureIcon, 
    AlarmIcon,
    CircleIcon,
    LanguageIcon, 
    EcoIcon,
    ArrowRightIcon,
    CalendarIcon,
    TagIcon,
    UserIcon,
    CloseIcon,
};