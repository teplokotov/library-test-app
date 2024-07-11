import CardList from '../../organisms/CardList/CardList';
import Header from '../../organisms/Header/Header';
import Menu from '../../organisms/Menu/Menu';
import ProfileBar from '../../organisms/ProfileBar/ProfileBar';

import { TemplatePageProps } from './template-page.type';

import styles from './TemplatePage.module.css';

/**
 * Отображает страницу шаблона с заголовком, меню, панелью профиля и списком карточек.
 *
 * @param {MenuLinkProps[]} props.links - Массив ссылок в меню.
 * @param {Book[]} props.books - Массив объектов с информацией о книгах.
 * @param {string} props.inputValue - Текущее значение строки поиска.
 * @param {(evt) => void} props.inputChangeEvtHandler - Обработчик событий для поле поиска.
 * @param {(evt) => void} props.searchOptionsChangeEvtHandler - Обработчик событий для параметров поиска.
 * @return {JSX.Element} Страница шаблона с заголовком, меню, панелью профиля и списком карточек
 */

function TemplatePage({
        links,
        books,
        inputValue,
        inputChangeEvtHandler,
        searchOptionsChangeEvtHandler
    } : TemplatePageProps): JSX.Element {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Header />
            </header>
            <aside className={styles.aside}>
                <Menu links={links}/>
            </aside>
            <main className={styles.main}>
                <ProfileBar
                    inputValue={inputValue}
                    inputChangeEvtHandler={inputChangeEvtHandler}
                    searchOptionsChangeEvtHandler={searchOptionsChangeEvtHandler}
                />
                <section className={styles.content}>
                    <CardList books={books} />
                </section>
            </main>
        </div>
    );
}

export default TemplatePage;
