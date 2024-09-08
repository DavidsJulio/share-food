import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "@/components/main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food" priority />{" "}
        {/** To make sure it's not lazy loading since it will be all the time accessible */}
        Share food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
