import { ChangeEvent } from 'react';

/**
 * .
 * @prop {string} placeholder - Подсказка. Необязательное свойство.
 * @prop {string} value - Значение. Необязательное свойство.
 * @prop {function} onChange - Функция обработки нажатия. Необязательное свойство.
 */

export type SearchInputProps = {
    placeholder?: string;
    value?: string;
    onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
}
