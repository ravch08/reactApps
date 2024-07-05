import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-screen py-56">
      <div className="container mx-auto">
        <h1 className="mb-16 text-center text-5xl font-bold uppercase">
          React Apps
        </h1>
        <div className="flex flex-wrap items-center justify-between gap-6">
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
          <Link to="counter" className="btn-link">
            Counter
          </Link>
          <Link to="step-counter" className="btn-link">
            Step Counter
          </Link>
          <Link to="count-reducer" className="btn-link">
            Counter Reducer
          </Link>
          <Link to="country" className="btn-link">
            Country Dropdown
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
          <Link to="todolist" className="btn-link">
            TODO List
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
          <Link to="sticky-notes" className="btn-link">
            Sticky Notes
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
