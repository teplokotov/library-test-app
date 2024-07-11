import ProfileAvatar from '../../atoms/ProfileAvatar/ProfileAvatar';
import SearchForm from '../../molecules/SearchForm/SearchForm';

import { ProfileBarProps } from './profile-bar.type';

import styles from './ProfileBar.module.css';

/**
 * Отображает панель с поиском и аватаром.
 *
 * @param {ProfileBarProps} props.inputValue - Значение строки поиска.
 * @param {ProfileBarProps} props.inputChangeEvtHandler - Обработчик изменения строки поиска.
 * @param {ProfileBarProps} props.searchOptionsChangeEvtHandler - Обработчик изменения опции поиска.
 * @return {JSX.Element} Компонент панели с поиском и аватаром
 */

function ProfileBar({
        inputValue,
        inputChangeEvtHandler,
        searchOptionsChangeEvtHandler
    } : ProfileBarProps): JSX.Element {
    return (
        <section className={styles.profileBar}>
            <SearchForm
                inputValue={inputValue}
                inputChangeEvtHandler={inputChangeEvtHandler}
                searchOptionsChangeEvtHandler={searchOptionsChangeEvtHandler}
            />
            <div className={styles.profileBarAvatar}>
                <ProfileAvatar />
            </div>
        </section>
    );
}

export default ProfileBar;
