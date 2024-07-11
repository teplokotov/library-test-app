import Card from '../../molecules/Card/Card';

import { CardListProps } from './card-list.type';

import styles from './CardList.module.css';

/**
 * Отображает список карточек книг на основе предоставленных данных о книгах.
 *
 * @param {CardListProps} books - Массив книг с названием, авторами и необязательной ссылкой на обложку.
 * @return {JSX.Element} Компонент списка карточек книг.
 */

function CardList({ books } : CardListProps): JSX.Element {
    return (
        <ul className={styles.list}>
            {
                books.map((book, index) => {
                    return (
                        <li
                            className={styles.item}
                            key={index}>
                                <Card
                                    title={book.title}
                                    authors={book.authors}
                                    link={book.link ? book.link : undefined}
                                />
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default CardList;
