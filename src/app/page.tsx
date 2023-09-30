import { Content } from '@/shared/Landing/blocksWithContent/ui';
import { Cover } from '@/shared/Landing/cover/ui';
import { GroupAudItems } from '@/shared/Landing/groupAudienceItems/ui';
import { TitleScroll } from '@/shared/Landing/scrollCardContentTitle/ui';
import { Tools } from '@/shared/Landing/toolsSection/ui';
import { Layout } from '@/shared/layouts/landing/ui';
import { Footer } from '@/widgets/Footer';
import { NavBar } from '@/widgets/Landing/navBar/ui';
import { ScrollCards } from '@/widgets/Landing/scrollCards/ui';
import { Team } from '@/widgets/Landing/team/ui';
import './fonts.scss';

export default function Home() {
    return (
        <>
            <NavBar />
            <Cover
                title="Путеводитель  по миру олимпиад"
                description="Победа в олимпиадах дает возможность получить льготы при поступления в ВУЗ"
            />
            <Layout>
                <GroupAudItems />
                <Tools />
                <Content />
                <Team />
                <TitleScroll />
            </Layout>
            <ScrollCards />
            <Footer />
        </>
    );
}
