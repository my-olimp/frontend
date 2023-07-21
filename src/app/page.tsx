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
import { useEffect, useState } from "react";

function checkMobile() {
  const userAgent =
    typeof global?.window.navigator === "undefined" ? "" : navigator.userAgent;
  const mobileKeywords = [
    "android",
    "webos",
    "iphone",
    "ipad",
    "ipod",
    "blackberry",
    "windows phone",
  ];

  return mobileKeywords.some((keyword) =>
    userAgent.toLowerCase().includes(keyword)
  );
}

export default function Home() {

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(checkMobile());
    
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
