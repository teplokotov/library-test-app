import { ChangeEvent } from 'react';

/**
 * .
 * @param {string} inputValue - Строка поиска.
 * @param {function} inputChangeEvtHandler - Обработчик изменения строки поиска.
 * @param {function} searchOptionsChangeEvtHandler - Обработчик изменения опции поиска.
 */

export type SearchFormProps = {
    inputValue: string;
    inputChangeEvtHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
    searchOptionsChangeEvtHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
}
