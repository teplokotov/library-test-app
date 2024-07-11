import MenuLink from '../../atoms/MenuLink/MenuLink';

import { MenuProps } from './menu.type';

import styles from './Menu.module.css';

/**
 * Отображает меню ссылок. Каждый элемент меню содержит ссылку на страницу и заголовок.
 *
 * @param {MenuProps} links - Массив объектов, содержащий маршрут и название каждой ссылки.
 * @return {JSX.Element} Компонент меню.
 */

function Menu({ links } : MenuProps): JSX.Element {
    return (
        <ul className={styles.list}>
            {
                links.map((link, index) => {
                    return (
                        <li key={index}>
                            <MenuLink
                                route={link.route}
                                title={link.title} />
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Menu;
