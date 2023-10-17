import { useAppSelector } from '@/hooks/useAppSelector';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface props {
    size?: number;
}

export const NavbarAvatar: FC<props> = ({size}) => {
    const { push } = useRouter();
    const { user } = useAppSelector((state) => state.auth);
    return (
        <Avatar sx={{width: `${size || 40}px`, height: `${size || 40}px`}} onClick={() => push('/profile')}>
            {user?.id && (
                <Image
                    src={`https://storage.yandexcloud.net/myolimp/user/avatar/${user.id}.webp`}
                    alt="avatar"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            )}
        </Avatar>
    );
};
