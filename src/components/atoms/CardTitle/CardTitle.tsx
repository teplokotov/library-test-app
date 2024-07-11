import { CardTitleProps } from './card-title-props.type';

import styles from './CardTitle.module.css';

/**
 * Отображает наименование книги.
 *
 * @param {CardTitleProps} props.title - Наименование книги.
 * @return {JSX.Element} Наименование книги в виде заголовка h3.
 */

function CardTitle({ title } : CardTitleProps): JSX.Element {
    return (
        <h3 className={styles.title}>{title}</h3>
    );
}

export default CardTitle;
