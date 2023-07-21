"use client";

import "./fonts.scss";
import { NavBar } from "@/widgets/Landing/navBar/ui";
import { GroupAudItems } from "@/shared/Landing/groupAudienceItems/ui";
import { Layout } from "@/shared/layouts/landing/ui";
import { Tools } from "@/shared/Landing/toolsSection/ui";
import { Content } from "@/shared/Landing/blocksWithContent/ui";
import { Team } from "@/widgets/Landing/team/ui";
import { ScrollCards } from "@/widgets/Landing/scrollCards/ui";
import { TitleScroll } from "@/shared/Landing/scrollCardContentTitle/ui";
import { Footer } from "@/widgets/Landing/footer/ui";
import { Cover } from "@/shared/Landing/cover/ui";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [mobile, setMobile] = useState(false);
  let width = useRef(0);
  if (typeof window !== undefined) {
    width = useRef!(window && window.innerWidth);
  }
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
        <TitleScroll />
      </Layout>
      <ScrollCards />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
}
