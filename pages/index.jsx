import { useState } from "react";

import Header from "components/Header";
import Main from "components/Main";

import Head from "next/head";
import Mobile from "components/Mobile";

export default function Home() {
  const [active, setActive] = useState("swap");
  const [side, setSide] = useState(false);
  return (
    <div className="w-full">
      <Main />
    </div>
  );
}
