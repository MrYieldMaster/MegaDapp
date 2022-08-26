import "../styles/globals.css";
import { useState } from "react";
import Mobile from "components/Mobile";
import Header from "components/Header";
import LeftBar from "components/LeftBar";
function MyApp({ Component, pageProps }) {
  const [side, setSide] = useState(false);
  const [active, setActive] = useState("swap");
  return (
    <div className="container mx-auto max-w-[1200px] py-8 px-6">
      <img src="/bg.png" className="fixed inset-0 h-full w-full z-[-1]" />
      <Header
        active={active}
        setActive={setActive}
        setSide={setSide}
        side={side}
      />
      {side && (
        <Mobile
          setSide={setSide}
          side={side}
          active={active}
          setActive={setActive}
        />
      )}
      <div className={`mt-24 flex gap-4  `}>
        <LeftBar active={active} setActive={setActive} />
        <Component {...pageProps} />
      </div>
      <img src="token.gif" className="w-24 fixed bottom-4 right-4" />
    </div>
  );
}

export default MyApp;
