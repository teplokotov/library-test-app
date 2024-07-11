import { CardAuthorsProps } from './card-authors.type';

import styles from './CardAuthors.module.css';

/**
 * Отображает список имён авторов через запятую в виде элемента абзаца.
 *
 * @param {CardAuthorsProps} props.authors - Массив объектов с именами авторов.
 * @return {JSX.Element} Абзац, отображающий имена авторов.
 */

function CardAuthors({ authors } : CardAuthorsProps): JSX.Element {
    return (
        <ul className={styles.authors}>
            {
                authors.map((author, index) => {
                    return (
                        <li key={index}>{author.name}</li>
                    );
                })
            }
        </ul>
    );
}

export default CardAuthors;
