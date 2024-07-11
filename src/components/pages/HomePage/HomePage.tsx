import { ChangeEvent, useState } from 'react';

import TemplatePage from '../../templates/TemplatePage/TemplatePage';

import ROUTES from '../../../utils/routes';
import books from '../../../assets/books.json';

/**
 * Отображает компонент домашней страницы с функцией поиска.
 *
 * @return {JSX.Element} Домашняя страница с функцией поиска.
 */

function HomePage() {

    const [searchValue, setSearchValue] = useState('');
    const [searchOptionsValue, setSearchOptionsValue] = useState('byTitle');

    const inputChangeEvtHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(evt.target.value);
    };

    const searchOptionsChangeEvtHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setSearchOptionsValue(evt.target.value);
    };

    const filteredBooks = books.filter(book =>
        searchOptionsValue === 'byTitle' ?
            book.title.toLowerCase().includes(searchValue.toLowerCase())
            : book.authors[0].name.toString().toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <TemplatePage
            links={ROUTES}
            books={filteredBooks}
            inputValue={searchValue}
            inputChangeEvtHandler={inputChangeEvtHandler}
            searchOptionsChangeEvtHandler={searchOptionsChangeEvtHandler}
        />
    );
}

export default HomePage;
