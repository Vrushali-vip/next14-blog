import Link from "next/link"
import styles from "./navigation.module.css"
export default function Navigation() {
    return (
        <nav className="font-mono">
            <ul className="flex md:space-x-4 flex-col md:flex-row">
                <li><Link href="/" className={`${styles.link} inline md:hidden`}>Home</Link></li>
                <li><Link href="/about" className={styles.Link}>About</Link></li>
                <li><Link href="/about/projects" className={styles.Link}>Projects</Link></li>
                <li><Link href="/photos" className={styles.Link}>Photos</Link></li>
                <li><Link href="/blog" className={styles.Link}>Blog</Link></li>
            </ul>
        </nav>
    )
}