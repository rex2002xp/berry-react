import {useLocation} from "react-router";
import {useEffect} from "react";
import PropTypes from "prop-types";


const NavigationScroll = ({ children }: any ) => {
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return children || null;
};

NavigationScroll.propTypes = {
    children: PropTypes.node
};

export default NavigationScroll;