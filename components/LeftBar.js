import { useRouter } from "next/router";
import Link from "next/link";
const LeftBar = ({ active, setActive }) => {
  const router = useRouter();
  return (
    <aside className="hidden lg:block sticky top-24 left-24">
      <div className="relative">
        <img src="/menu-cut.svg" className="absolute top-0" />
        <ul className="flex flex-col gap-4 ml-8 pt-8">
          <li>
            <Link href="/">
              <a
                className={`${
                  router.asPath === "/" ? "border-image-active" : ""
                }`}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/swap">
              <a
                className={`${
                  router.asPath === "/swap" ? "border-image-active" : ""
                }`}
              >
                Trade
              </a>
            </Link>
          </li>
          <li>
            <Link href="/farm">
              <a
                className={`${
                  router.asPath === "/farm" ? "border-image-active" : ""
                }`}
              >
                Farms
              </a>
            </Link>
          </li>
          <li>
            <Link href="/stake">
              <a
                className={`${
                  router.asPath === "/stake" ? "border-image-active" : ""
                }`}
              >
                Stake
              </a>
            </Link>
          </li>

          <li>
            {" "}
            <Link href="/lottery">
              <a
                className={`${
                  router.asPath === "/lottery" ? "border-image-active" : ""
                }`}
              >
               Lottery
              </a>
            </Link>
          </li>
          <li>
              <Link href="/miners/busd">
                <a
                  className={`${
                    router.asPath === "/miners/busd"
                      ? "border-image-active"
                      : ""
                  }`}
                >
                  MegaBUSD
                </a>
              </Link>
              <Link href="/miners/bnb">
                <a
                  className={`${
                    router.asPath === "/miners/bnb" ? "border-image-active" : ""
                  }`}
                >
                  MegaBNB
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default LeftBar;

