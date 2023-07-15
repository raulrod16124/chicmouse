import { useEffect, useState } from "react";

export const useWindowSize = () => {
    const [windowWidth, setWindowWitdh] = useState<number>(window.innerWidth);
    const [smallScreenDetected, setSmallScreenDetected] = useState<boolean>(false);

    const handleWindowResize = () => {
        setWindowWitdh(window.innerWidth)

        if(window.innerWidth < 1024){
            setSmallScreenDetected(true);
        } else {
            setSmallScreenDetected(false);
        }
    };

    useEffect(() => {
      handleWindowResize()
      window.addEventListener('resize', handleWindowResize);
    
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    });

    return { windowWidth, smallScreenDetected }
}
