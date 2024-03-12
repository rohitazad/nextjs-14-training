import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = ()=>{
    return (
        <div className={styles.header}>
            <div className={`wraper ${styles.section}`}>
                <div className={styles.logo}>
                    <Image src="https://timesinternet.in/assets/images/logo-blue-new.png"
                      width={160}
                      height={46}
                      alt="TIL Logo" />
                </div>
                <ul>
                    <li>
                        <Link href={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link href={`/about`}>About</Link>
                    </li>
                    <li>
                        <Link href={`/blog`}>Blog</Link>
                    </li>
                    <li>
                        <Link href={`/crud`}>CRUD</Link>
                    </li>
                    <li>
                        <Link href={`/contact`}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;