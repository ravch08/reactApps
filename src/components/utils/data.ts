export const recursiveMenuData = [
  {
    id: "hm",
    label: "Home",
    to: "/",
  },
  {
    id: "au",
    label: "About Us",
    to: "/about",
  },
  {
    id: "pr",
    label: "Products",
    to: "/products",
    children: [
      {
        id: "pr1",
        label: "Shoes",
        to: "/products/shoes",
        children: [
          {
            id: "pr11",
            label: "Running Shoes",
            to: "/products/shoes/running",
          },
          {
            id: "pr12",
            label: "Formal Shoes",
            to: "/products/shoes/formal",
          },
        ],
      },
      { id: "pr2", label: "Bags", to: "/products/bags" },
      { id: "pr3", label: "Watches", to: "/products/watches" },
    ],
  },
  {
    id: "bg",
    label: "Blogs",
    to: "/blogs",
    children: [
      { id: "bg1", label: "Blog 1", to: "/blogs/1" },
      { id: "bg2", label: "Blog 2", to: "/blogs/2" },
      { id: "bg3", label: "Blog 3", to: "/blogs/3" },
    ],
  },
  {
    id: "ct",
    label: "Contact",
    to: "/contact",
  },
];

export const carouselData = [
  {
    id: 1,
    title: "Image 1",
    imgUrl: `https://images.unsplash.com/photo-1712313275295-105a8ab7bb1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    id: 2,
    title: "Image 2",
    imgUrl: `https://images.unsplash.com/photo-1631261177958-b68a44d92a56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    id: 3,
    title: "Image 3",
    imgUrl: `https://plus.unsplash.com/premium_photo-1669562728886-b2cc51a62e78?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
];

export const accordionData = [
  {
    id: 1,
    title: "Title 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores accusantium accusamus asperiores veniam repudiandae, quibusdam ex nihil sunt, quaerat consequuntur laboriosam natus aspernatur molestias porro nesciunt totam eveniet? Itaque, quaerat.`,
  },
  {
    id: 2,
    title: "Title 2",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores accusantium accusamus asperiores veniam repudiandae, quibusdam ex nihil sunt, quaerat consequuntur laboriosam natus aspernatur molestias porro nesciunt totam eveniet? Itaque, quaerat.`,
  },
  {
    id: 3,
    title: "Title 3",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores accusantium accusamus asperiores veniam repudiandae, quibusdam ex nihil sunt, quaerat consequuntur laboriosam natus aspernatur molestias porro nesciunt totam eveniet? Itaque, quaerat.`,
  },
];

export const navtabData = [
  {
    id: 1,
    title: "Tab 1",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, qui. Incidunt odit veniam ratione minima dolorem iusto reiciendis recusandae corporis, tenetur debitis eligendi soluta autem maiores. Officiis libero ex cupiditate.`,
  },
  {
    id: 2,
    title: "Tab 2",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, qui. Incidunt odit veniam ratione minima dolorem iusto reiciendis recusandae corporis, tenetur debitis eligendi soluta autem maiores. Officiis libero ex cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, qui. Incidunt odit veniam ratione minima dolorem iusto reiciendis recusandae corporis, tenetur debitis eligendi soluta autem maiores. Officiis libero ex cupiditate.`,
  },
  {
    id: 3,
    title: "Tab 3",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, qui. Incidunt odit veniam ratione minima dolorem iusto reiciendis recusandae corporis, tenetur debitis eligendi soluta autem maiores. Officiis libero ex cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, qui. Incidunt odit veniam ratione minima dolorem iusto reiciendis recusandae corporis, tenetur debitis eligendi soluta autem maiores. Officiis libero ex cupiditate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, qui. Incidunt odit veniam ratione minima dolorem iusto reiciendis recusandae corporis, tenetur debitis eligendi soluta autem maiores. Officiis libero ex cupiditate.`,
  },
];

export const questions = [
  {
    id: 1,
    question:
      "What do the men and women of the realm call the creatures that killed Waymar?",
    options: ["The Others", "Shadow walkers", "Wights", "Wildlings"],
    correctOption: 0,
    points: 10,
  },
  {
    id: 2,
    question:
      "When Lysa sends a message about Jon Arryn’s death to Catelyn, what else is contained in the box with the message?",
    options: [
      "A lens",
      "A dagger",
      "A cipher for Lysa’s secret code",
      "An onyx arrowhead",
    ],
    correctOption: 0,
    points: 10,
  },
  {
    id: 3,
    question:
      "What convinces Ned to change his mind and leave Winterfell to serve as Hand of the King?",
    options: [
      "Luwin tells Ned that he will gain great riches by taking such a powerful position.",
      "Catelyn convinces Ned that he must serve in order to protect Robert and the Stark family from the Lannisters.",
      "Ned realizes that someone has been spying on Winterfell using the lens in the message to Catelyn.",
      "Robert tells Ned that he will appoint Jaime if Ned does not take the position.",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    id: 4,
    question:
      "Who is responsible for informing Robert that Daenerys has wed Drogo?",
    options: ["Ned", "Viserys", "Jorah", "Littlefinger"],
    correctOption: 2,
    points: 10,
  },
  {
    id: 5,
    question: "Who gives Daenerys three dragon eggs as a wedding gift?",
    options: ["Viserys", "Illyrio", "Jorah", "Drogo"],
    correctOption: 1,
    points: 10,
  },
  {
    id: 6,
    question:
      "After the battle with Robb’s army, why is Tyrion angry with Tywin?",
    options: [
      "Tywin has not kept his promise to Tyrion’s men.",
      "Tywin has not fought bravely.",
      "Tywin decides to sue for peace.",
      "Tywin seems to have given up Jaime for dead.",
    ],
    correctOption: 3,
    points: 10,
  },
  {
    id: 7,
    question: "What is the sigil of House Baratheon?",
    options: [
      "A grey direwolf",
      "A roaring lion",
      "A charging boar",
      "A crowned stag",
    ],
    correctOption: 3,
    points: 30,
  },
  {
    id: 8,
    question: "Why does Arya’s wolf, Nymeria, run away?",
    options: [
      "Joff attacks it with his sword.",
      "Sansa’s wolf, Lady, bites Nymeria.",
      "Arya throws rocks at Nymeria.",
      "Arya throws Nymeria into the Trident.",
    ],
    correctOption: 2,
    points: 20,
  },
  {
    id: 9,
    question: "What are the words of House Tully?",
    options: [
      "Winter Is Coming",
      "Ours is the Fury",
      "Hear Me Roar!",
      "Family, Duty, Honor",
    ],
    correctOption: 3,
    points: 20,
  },
  {
    id: 10,
    question:
      "What does Tyrion give to Bran when he visits Winterfell on his trip south from the Wall?",
    options: [
      "Designs for a saddle",
      "A map of the north",
      "A dragonbone dagger",
      "Benjen Stark’s sword",
    ],
    correctOption: 0,
    points: 30,
  },
  {
    id: 11,
    question:
      "How does Littlefinger claim that Tyrion came to possess the dragonbone dagger?",
    options: [
      "Tyrion stole it from Jon Arryn.",
      "Tyrion bought it from Gendry, Robert’s bastard son.",
      "Tyrion found it in a whorehouse.",
      "Tyrion won it from Littlefinger in a bet.",
    ],
    correctOption: 3,
    points: 30,
  },
  {
    id: 12,
    question:
      "When Arya overhears a conversation in the Red Keep’s dungeons, what does Varys, the man wearing light armor, suggest?",
    options: [
      "Delay their plans, since Drogo will not attack until his son is born.",
      "Delay their plans, since a war will only cause pain and suffering in the realm.",
      "Move quickly, since more players are entering the game.",
      "Move quickly, since they can easily kill Ned if they need to buy time.",
    ],
    correctOption: 2,
    points: 10,
  },
  {
    id: 13,
    question:
      "What does Ned suggest to Robert right before he resigns as Hand of the King?",
    options: [
      "Robert should kill Daenerys himself if he truly wishes to assassinate a child",
      "Robert should resign as king and allow someone else to rule.",
      "Robert should have spared the life of Rhaegar Targaryen.",
      "Robert should use the Tears of Lys to kill Daenerys, since it is the least painful method.",
    ],
    correctOption: 0,
    points: 30,
  },
  {
    id: 14,
    question: "How does Tyrion escape from the Eyrie?",
    options: [
      "He pays Mord the jailer to free him.",
      "Tyrion defeats Catelyn in a duel to the death.",
      "Vardis defeats Bronn in a trial by combat.",
      "Bronn defeats Vardis in a trial by combat.",
    ],
    correctOption: 3,
    points: 30,
  },
  {
    id: 15,
    question:
      "After the trial by combat, what is the saying about the Lannisters that Tyrion tells Bronn while they are camped on a mountain road?",
    options: [
      "A Lannister promise is as good as gold.",
      "Love is the bane of honor, the death of duty.",
      "A Lannister always pays his debts.",
      "Hear Me Roar!",
    ],
    correctOption: 2,
    points: 20,
  },
];
