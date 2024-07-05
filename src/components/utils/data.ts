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
