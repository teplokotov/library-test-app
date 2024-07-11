import {
    TEXT_SORT_BY_AUTHOR,
    TEXT_SORT_BY_TITLE
} from '../../../utils/constants';

import { SearchOptionsProps } from './search-options.type';

import styles from './SearchOptions.module.css';

/**
 * Отображает опции поиска. По умолчанию отображается поиск по наименованию.
 *
 * @param {SearchOptionsProps} onChange - Функция-обработчик события изменения значения.
 * @return {JSX.Element} Компонент опций поиска.
 */

function SearchOptions({ onChange } : SearchOptionsProps): JSX.Element {
    return (
        <>
            <div className={styles.radioContainer}>
                <input
                    id='byTitle'
                    className={styles.input}
                    type='radio'
                    name='options'
                    value='byTitle'
                    onChange={onChange}
                    defaultChecked
                />
                <label htmlFor='byTitle'>{TEXT_SORT_BY_TITLE}</label>
            </div>
            <div className={styles.radioContainer}>
                <input
                    id='byAuthor'
                    className={styles.input}
                    type='radio'
                    name='options'
                    value='byAuthor'
                    onChange={onChange}
                />
                <label htmlFor='byAuthor'>{TEXT_SORT_BY_AUTHOR}</label>
            </div>
        </>
    );
}

export default SearchOptions;
