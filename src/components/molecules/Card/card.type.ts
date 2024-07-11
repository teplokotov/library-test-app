import { CardAuthorsProps } from '../../atoms/CardAuthors/card-authors.type';
import { CardImageProps } from '../../atoms/CardImage/card-image.type';
import { CardTitleProps } from '../../atoms/CardTitle/card-title-props.type';

export type CardProps = {
    title: CardTitleProps['title'];
    authors: CardAuthorsProps['authors'];
    link?: CardImageProps['link'];
}
