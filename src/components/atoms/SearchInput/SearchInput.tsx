import { SearchInputProps } from './search-input.type';

import styles from './SearchInput.module.css';

/**
 * Отображает поисковую строку.
 *
 * @param {SearchInputProps} props - Свойства компонента.
 * @param {string} props.placeholder - Поисковая подсказка.
 * @param {string} props.value - Поисковое значение.
 * @param {function} props.onChange - Функция обработки нажатия.
 * @return {JSX.Element} Компонент поисковой строки.
 */

function SearchInput({ placeholder, value, onChange } : SearchInputProps) {
    return (
        <input
            className={styles.input}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default SearchInput;
