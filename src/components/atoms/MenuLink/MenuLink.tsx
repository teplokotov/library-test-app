import { NavLink } from 'react-router-dom';

import { MenuLinkProps } from './menu-link.type';

import styles from './MenuLink.module.css';

/**
 * Отображает ссылку. Если адрес ссылки совпадает с текущим адресом, то ссылка активна.
 *
 * @param {string} props.route - Адрес ссылки.
 * @param {string} props.title - Заголовок ссылки.
 * @return {JSX.Element} Компонент ссылки.
 */

function MenuLink({ route, title } : MenuLinkProps): JSX.Element {
    return (
        <NavLink
            to={route}
            className={({ isActive }) => isActive ? styles.linkActive : styles.link}
        >{title}</NavLink>
    );
}

export default MenuLink;
