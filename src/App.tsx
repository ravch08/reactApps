import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MultiSelectDropdown from "./components/apps/multiselectStateDropdown/MultiSelectDropdown";
import {
  Accordion,
  Carousel,
  CarouselUsingReducer,
  CheckedTodoList,
  CountReducer,
  Counter,
  Country,
  CountryCapitalGame,
  CreateCircles,
  Debouncing,
  Expanse,
  HexGenerator,
  Home,
  InteractiveGrid,
  Layout,
  LazyLoading,
  LoadMoreData,
  MemoryGame,
  NavTabs,
  Page404,
  Pagination,
  PaginationWithLimit,
  Password,
  QRCodeGenerator,
  Quiz,
  Radio,
  RecursiveMenu,
  ScrollIndicator,
  SearchAutocomplete,
  ShowModal,
  SmileyTap,
  StarRating,
  TicTacToe,
  Timer,
  Wordweb,
} from "./components/utils/helper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="carousel" element={<Carousel />} />
      <Route path="accordion" element={<Accordion />} />
      <Route path="hex-generator" element={<HexGenerator />} />
      <Route path="debouncing" element={<Debouncing />} />
      <Route path="navtabs" element={<NavTabs />} />
      <Route path="multiselect-dropdown" element={<MultiSelectDropdown />} />
      <Route path="counter" element={<Counter />} />
      <Route path="count-reducer" element={<CountReducer />} />
      <Route path="country" element={<Country />} />
      <Route path="quiz" element={<Quiz />} />
      <Route path="radio" element={<Radio />} />
      <Route path="pagination" element={<Pagination />} />
      <Route path="pagination-limit" element={<PaginationWithLimit />} />
      <Route path="scroll-indicator" element={<ScrollIndicator />} />
      <Route path="qr-code" element={<QRCodeGenerator />} />
      <Route path="interactive-grid" element={<InteractiveGrid />} />
      <Route path="checked-todolist" element={<CheckedTodoList />} />
      <Route path="rating" element={<StarRating stars={5} />} />
      <Route path="smiley" element={<SmileyTap />} />
      <Route path="country-capital" element={<CountryCapitalGame />} />
      <Route path="search-autocomplete" element={<SearchAutocomplete />} />
      <Route path="load-more" element={<LoadMoreData />} />
      <Route path="timer" element={<Timer />} />
      <Route path="wordweb" element={<Wordweb />} />
      <Route path="modal" element={<ShowModal />} />
      <Route path="password" element={<Password />} />
      <Route path="recursive-menu" element={<RecursiveMenu />} />
      <Route path="create-circles" element={<CreateCircles />} />
      <Route path="expanse" element={<Expanse />} />
      <Route path="memory-game" element={<MemoryGame />} />
      <Route path="tic-tac-toe" element={<TicTacToe />} />
      <Route path="lazy-loading" element={<LazyLoading />} />
      <Route path="carousel-reducer" element={<CarouselUsingReducer />} />
      <Route path="*" element={<Page404 />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
