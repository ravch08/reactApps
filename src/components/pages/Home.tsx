import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-screen py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 px-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <Link to="login-using-context" className="btn-link">
            Login with Context
          </Link>
          <Link to="carousel" className="btn-link">
            Carousel
          </Link>
          <Link to="accordion" className="btn-link">
            Accordion
          </Link>
          <Link to="hex-generator" className="btn-link">
            Hex Generator
          </Link>
          <Link to="navtabs" className="btn-link">
            NavTabs
          </Link>
          <Link to="quiz" className="btn-link">
            Quiz
          </Link>
          <Link to="counter" className="btn-link">
            Counter
          </Link>
          <Link to="multiselect-dropdown" className="btn-link">
            Multiselect Dropdown
          </Link>
          <Link to="memory-game" className="btn-link">
            Memory Game
          </Link>
          <Link to="count-reducer" className="btn-link">
            Counter Reducer
          </Link>
          <Link to="country-capital" className="btn-link">
            Country Capital Game
          </Link>
          <Link to="country" className="btn-link">
            Country Dropdown
          </Link>
          <Link to="interactive-grid" className="btn-link">
            Interactive Grid
          </Link>
          <Link to="radio" className="btn-link">
            Radio
          </Link>
          <Link to="debouncing" className="btn-link">
            Debounce & Fetch
          </Link>
          <Link to="carousel-reducer" className="btn-link">
            Carousel using Reducer
          </Link>
          <Link to="pagination" className="btn-link">
            Pagination
          </Link>
          <Link to="pagination-limit" className="btn-link">
            Pagination with Limit
          </Link>

          <Link to="checked-todolist" className="btn-link">
            Checked TODOList
          </Link>
          <Link to="rating" className="btn-link">
            Star Rating
          </Link>
          <Link to="qr-code" className="btn-link">
            QR Code Generator
          </Link>
          <Link to="scroll-indicator" className="btn-link">
            Scroll Indicator
          </Link>
          <Link to="smiley" className="btn-link">
            Smiley Tap
          </Link>
          <Link to="search-autocomplete" className="btn-link">
            Search Autocomplete
          </Link>
          <Link to="timer" className="btn-link">
            Timer
          </Link>
          <Link to="modal" className="btn-link">
            Modal
          </Link>
          <Link to="recursive-menu" className="btn-link">
            Recursive Menu
          </Link>
          <Link to="load-more" className="btn-link">
            Fetch Load More
          </Link>
          <Link to="password" className="btn-link">
            Check Password
          </Link>
          <Link to="wordweb" className="btn-link">
            WordWeb
          </Link>
          <Link to="create-circles" className="btn-link">
            Create Circles
          </Link>
          <Link to="expanse" className="btn-link">
            Expanse Tracker
          </Link>
          <Link to="tic-tac-toe" className="btn-link">
            Tic Tac Toe
          </Link>
          <Link to="lazy-loading" className="btn-link">
            Lazy Loading
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
