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
import { useEffect, useState, useRef, } from "react";

/*function checkMobile() {
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
}*/
/*const BoardDynamic = dynamic(() => import('../components/Board.tsx'), {
  ssr: false,
})*/

export default function Home() {
  const [mobile, setMobile] = useState(false);

  
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(global?.window.innerWidth);
    };

    // Set initial width
    setWidth(global?.window.innerWidth);

    

    // Add event listener for window resize (only on the client-side)
    if (typeof global?.window !== 'undefined') {
      global?.window.addEventListener('resize', handleResize);
    }
    console.log(global?.window.innerWidth);
    // Clean up the event listener when the component is unmounted
    return () => {
      if (typeof global !== 'undefined') {
        global.window.removeEventListener('resize', handleResize);
      }
    };
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
