import * as MdIcon from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";

const pagesList = [
    {id: 101,title: "داشبورد", route: "/", icon: <MdIcon.MdDashboard />},
    {id: 102,title: "نمونه کارهای من", route: "/portfolio", icon: <FaIcons.FaRegObjectUngroup />}, 
    {id: 103,title: "دسته بندی محصولات", route: "/categories", icon: <MdIcon.MdCategory />},
    {id: 104,title: "محصولات", route: "/products", icon: <MdIcon.MdOutlineShoppingBag />},
    {id: 105,title: "تماس ها", route: "/calls", icon: <MdIcon.MdAddIcCall />},
    {id: 106,title: "مشتریان", route: "/customers", icon: <RiIcons.RiCustomerService2Line />},
    {id: 107,title: "ارسال پیام کوتاه", route: "/send-sms", icon: <MdIcon.MdOutlineSms />},
    {id: 108,title: "درباره من", route: "about-me", icon: <SiIcons.SiAboutdotme />},
    {id: 109,title: "تماس با من", route: "contact-me", icon: <FaIcons.FaUserCircle />},
];

export default pagesList;

