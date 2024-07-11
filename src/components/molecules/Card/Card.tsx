import CardAuthors from '../../atoms/CardAuthors/CardAuthors';
import CardImage from '../../atoms/CardImage/CardImage';
import CardTitle from '../../atoms/CardTitle/CardTitle';

import { CardProps } from './card.type';

import styles from './Card.module.css';

/**
 * Отображает компонент карточки книги.
 *
 * @param {string} props.title - Наименование книги.
 * @param {Array<{ name: string }>} props.authors - Массив объектов с именами авторов.
 * @param {string} [props.link] - Ссылка на изображение книги.
 * @return {JSX.Element} Компонент карточки книги.
 */

function Card({ title, authors, link } : CardProps): JSX.Element {
    return (
        <div className={styles.card}>
            <CardTitle title={title} />
            <CardImage link={link} title={title} />
            <CardAuthors authors={authors} />
        </div>
    );
}

export default Card;
