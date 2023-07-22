export interface itemsType {
  id: number;
  name: string;
  text: string;
  avatarLink: string;
  subject: string;
}

import userLogo from "./../../../../../public/ourTeam/dima.svg"

export const Items: itemsType[] = [
  {
    id: 0,
    name: "Дмитрий Степанов",
    subject: "Математика",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, officia ullam? Minus nemo laborum voluptate reiciendis nihil unde, culpa, laudantium obcaecati hic dolorem aut eligendi adipisci cum sequi officia placeat.",
    avatarLink: userLogo.src,
  },
  {
    id: 1,
    name: "Дмитрий Степанов",
    subject: "Математика",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, officia ullam? Minus nemo laborum voluptate reiciendis nihil unde, culpa, laudantium obcaecati hic dolorem aut eligendi adipisci cum sequi officia placeat.",
    avatarLink: userLogo.src,
  },
  {
    id: 2,
    name: "Дмитрий Степанов",
    subject: "Математика",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, officia ullam? Minus nemo laborum voluptate reiciendis nihil unde, culpa, laudantium obcaecati hic dolorem aut eligendi adipisci cum sequi officia placeat.",
    avatarLink: userLogo.src,
  },
  {
    id: 3,
    name: "Дмитрий Степанов",
    subject: "Математика",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, officia ullam? Minus nemo laborum voluptate reiciendis nihil unde, culpa, laudantium obcaecati hic dolorem aut eligendi adipisci cum sequi officia placeat.",
    avatarLink: userLogo.src,
  },
];
