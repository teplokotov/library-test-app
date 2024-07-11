/**
 * .
 * @param {object[]} books - Массив книг.
 * @param {string} books[].title - Заголовок книги.
 * @param {object[]} books[].authors - Массив авторов книги.
 * @param {string} books[].authors[].name - Имя автора.
 * @param {string} books[].link - Ссылка на изображение. Необязательное свойство.
 */

export type CardListProps = {
    books: {
        title: string;
        authors: {
            name: string;
        }[];
        link?: string;
    }[];
}
