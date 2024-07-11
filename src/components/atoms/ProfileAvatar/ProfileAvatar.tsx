import avatarIcon from '../../../assets/avatar.svg';

import { ProfileAvatarProps } from './profile-avatar.type';

import styles from './ProfileAvatar.module.css';

/**
 * Отображает аватар пользователя. Если нет ссылки, то отображает изображение по умолчанию.
 *
 * @param {string} props.link - Ссылка на изображение аватара.
 * @param {string} props.title - Имя пользователя.
 * @return {JSX.Element} Компонент изображения пользователя.
 */

function ProfileAvatar({ link, title } : ProfileAvatarProps): JSX.Element {
    return (
        <img
            className={styles.image}
            src={link ? link : avatarIcon}
            alt={title ? title : 'Пользователь'}
        />
    );
}

export default ProfileAvatar;
