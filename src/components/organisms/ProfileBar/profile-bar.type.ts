import { ChangeEvent } from 'react';

/**
 * .
 * @param {string} inputValue - Значение строки поиска.
 * @param {function} inputChangeEvtHandler - Обработчик изменения строки поиска.
 * @param {function} searchOptionsChangeEvtHandler - Обработчик изменения опции поиска.
 */


export type ProfileBarProps = {
    inputValue: string;
    inputChangeEvtHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
    searchOptionsChangeEvtHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
}
