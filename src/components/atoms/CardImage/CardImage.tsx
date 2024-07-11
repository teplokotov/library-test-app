import bookIcon from '../../../assets/book1.png';

import { CardImageProps } from './card-image.type';

import styles from './CardImage.module.css';

/**
 * Отображает элемент изображения с указанной ссылкой и заголовком.
 *
 * @param {string} props.link - Ссылка на изображение.
 * @param {string} props.title - Заголовок изображения.
 * @return {JSX.Element} Заглушка изображения, если не указана ссылка, либо изображение по ссылке.
 */

function CardImage({ link, title } : CardImageProps): JSX.Element {
    return (
        <img
            className={styles.image}
            src={link ? link : bookIcon}
            alt={title}
        />
    );
}

export default CardImage;
