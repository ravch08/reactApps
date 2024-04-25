import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-screen py-56">
      <div className="container flex flex-wrap items-center justify-between gap-6">
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
        <Link to="country" className="btn-link">
          Country Dropdown
        </Link>
        <Link to="fetch" className="btn-link">
          Fetch Load More
        </Link>
        <Link to="radio" className="btn-link">
          Radio
        </Link>
        <Link to="pagination" className="btn-link">
          Pagination
        </Link>
        <Link to="todos" className="btn-link">
          TO-DO List
        </Link>
        <Link to="rating" className="btn-link">
          Star Rating
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
        <Link to="create-circles" className="btn-link">
          Create Circles
        </Link>
        <Link to="expanse" className="btn-link">
          Expanse Tracker
        </Link>
      </div>
    </main>
  );
};

export default Home;
