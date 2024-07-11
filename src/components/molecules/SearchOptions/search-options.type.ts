import { ChangeEvent } from 'react';

/**
 * .
 * @prop {function} onChange - Функция обработки изменений значения. Необязательное свойство.
 */


export type SearchOptionsProps = {
    onChange?: (evt: ChangeEvent<HTMLInputElement>) => void
}
