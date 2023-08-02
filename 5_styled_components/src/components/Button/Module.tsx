import styles from './button.module.css'
export default function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
     return <button className={styles.button} {...props} />
}