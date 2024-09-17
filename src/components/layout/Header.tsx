import Link from "next/link";
import S from "@/styles/common.module.css";

const Header = () => {
  return (
    <header className={S.header}>
      <h1>
        <Link href="/">🚩Countries</Link>
      </h1>
    </header>
  );
};

export default Header;
