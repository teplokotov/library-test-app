import SearchInput from '../../atoms/SearchInput/SearchInput';
import SearchOptions from '../SearchOptions/SearchOptions';

import { TEXT_PLACEHOLDER } from '../../../utils/constants';

import { SearchFormProps } from './search-form.type';

import styles from './SearchForm.module.css';

/**
 * Отображает форму с поисковой строкой и опциями поиска.
 *
 * @param {string} props.inputValue - Значение строки поиска.
 * @param {function} props.inputChangeEvtHandler - Обработчик изменения строки поиска.
 * @param {function} props.searchOptionsChangeEvtHandler - Обработчик изменения опции поиска.
 * @return {JSX.Element} Компонент формы с поисковой строкой.
 */

function SearchForm({
        inputValue,
        inputChangeEvtHandler,
        searchOptionsChangeEvtHandler
    } : SearchFormProps): JSX.Element {
    return (
        <form className={styles.form}>
            <SearchInput
                placeholder={TEXT_PLACEHOLDER}
                value={inputValue}
                onChange={inputChangeEvtHandler}
            />
            <SearchOptions
                onChange={searchOptionsChangeEvtHandler}
            />
        </form>
    );
}

export default SearchForm;
