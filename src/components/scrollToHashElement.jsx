import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHashElement() {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const elementId = location.hash.slice(1);
            const element = document.getElementById(elementId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Scroll to the top of the page if there's no hash
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return null;
}

export default ScrollToHashElement;
