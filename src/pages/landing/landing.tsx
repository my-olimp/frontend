import { Cover } from "./../../shared/cover/cover";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./landing.module.scss";
import { NavBar } from "@/widgets/navBar/navBar";
import { GroupAudItems } from "@/shared/groupAudienceItems/groupItem";
import Layout from "@/shared/layouts/Landing/layout";
import { Tools } from "@/shared/toolsSection/tools";
import { Content } from "@/shared/blocksWithContent/content";
import { Team } from "@/widgets/team/team";

export const Landing: FC = () => {
  const [mobile, setMobile] = useState(false);
  const width = useRef(window.innerWidth);
  useEffect(() => {
    if (width.current < 900) {
      setMobile(true);
      console.log(setMobile);
    }
  }, []);
  return (
    <>
      <NavBar mobile={mobile} />
      {!mobile && (
        <Cover
          title="Путеводитель  по миру олимпиад"
          description="Победа в олимпиадах дает возможность получить льготы при поступления в ВУЗ"
        />
      )}
      {mobile && (
        <Cover
          title="Путеводитель  по миру олимпиад"
          description="Победа в олимпиадах дает возможность получить льготы при поступления в ВУЗ"
        />
      )}
      <Layout>
        <GroupAudItems />
        <Tools />
        <Content />
        <Team />
      </Layout>
    </>
  );
};
