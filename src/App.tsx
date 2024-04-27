import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  Accordion,
  Carousel,
  Counter,
  Country,
  CreateCircles,
  Expanse,
  Fetch,
  HexGenerator,
  Home,
  Layout,
  NavTabs,
  NestedTree,
  Page404,
  Pagination,
  Radio,
  SearchAutocomplete,
  ShowModal,
  SmileyTap,
  StarRating,
  TicTacToe,
  Timer,
  TodoList,
} from "./components/utils/helper";
import "./styles/App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="carousel" element={<Carousel />} />
      <Route path="accordion" element={<Accordion />} />
      <Route path="hex-generator" element={<HexGenerator />} />
      <Route path="navtabs" element={<NavTabs />} />
      <Route path="counter" element={<Counter />} />
      <Route path="country" element={<Country />} />
      <Route path="fetch" element={<Fetch />} />
      <Route path="radio" element={<Radio />} />
      <Route path="pagination" element={<Pagination />} />
      <Route path="todos" element={<TodoList />} />
      <Route path="rating" element={<StarRating stars={5} />} />
      <Route path="smiley" element={<SmileyTap />} />
      <Route path="search-autocomplete" element={<SearchAutocomplete />} />
      <Route path="timer" element={<Timer />} />
      <Route path="modal" element={<ShowModal />} />
      <Route path="create-circles" element={<CreateCircles />} />
      <Route path="expanse" element={<Expanse />} />
      <Route path="tic-tac-toe" element={<TicTacToe />} />
      <Route path="nested-tree" element={<NestedTree />} />
      <Route path="*" element={<Page404 />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
