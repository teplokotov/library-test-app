import { ChangeEvent } from 'react';

import { MenuLinkProps } from '../../atoms/MenuLink/menu-link.type';
import { CardListProps } from '../../organisms/CardList/card-list.type';

/**
 * .
 * @prop {MenuLinkProps[]} links - Массив ссылок меню.
 * @prop {CardListProps['books']} books - Массив книг.
 * @param {string} inputValue - Значение строки поиска.
 * @param {function} inputChangeEvtHandler - Обработчик изменения строки поиска.
 * @param {function} searchOptionsChangeEvtHandler - Обработчик изменения опции поиска.
 */

export type TemplatePageProps = {
    links: MenuLinkProps[];
    books: CardListProps['books'];
    inputValue: string;
    inputChangeEvtHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
    searchOptionsChangeEvtHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
}
