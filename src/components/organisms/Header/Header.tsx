import { TITLE } from '../../../utils/constants';

import styles from './Header.module.css';

/**
 * Отображает шапку.
 *
 * @return {JSX.Element} Компонент шапки.
 */

function Header(): JSX.Element {
    return (
        <div className={styles.header}>
            <p className={styles.headerTitle}>{TITLE}</p>
        </div>
    );
}

export default Header;
