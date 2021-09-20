import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// Css
import { portal, portalActive } from '../../styles/Helpers.module.css'

export default function Portal ({ visibility, message, bg }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    let timer1, timer2

    if (visibility) {
      timer1 = setTimeout(() => {
        setActive(true)
      }, 0);
      timer2 = setTimeout(() => {
        setActive(false)
      }, 3000);
    }
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [visibility])


  const PortalElement = <div className={[portal, (active) ? portalActive : ''].join(' ')} style={{background: bg}} onLoad={() => console.log('load')}>
                          <p>{message}</p>
                        </div>

  return (visibility) ? createPortal(PortalElement, document.querySelector('#alert')) : null;
};

