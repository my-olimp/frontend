import { PersonalInfo } from '@/widgets/PersonalInfo';
import { ProfileAvatar } from '@/widgets/ProfileAvatar';
import { NextPage } from 'next';
import styles from './index.module.scss';

const Profile: NextPage = () => {
    return (
        <div className={styles.wrap}>
            <ProfileAvatar />
            <PersonalInfo />
        </div>
    );
};

export default Profile;