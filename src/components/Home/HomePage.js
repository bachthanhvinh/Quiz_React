import videoHomepage from "../../assets/video-homepage.mp4";
const HomePage = (props) => {
  return (
    <>
      <div className="homepage-container">
        <video autoPlay muted loop>
          <source src={videoHomepage} type="video/mp4" />
        </video>
        <div className="homepage-better">
          <h1 className="homepage-better__h2">There's a better way to ask</h1>
          <p className="homepage-better__p">
            You don't want to make a boring form. And your audience won't answer
            one . Create a typeform instead-and make everyon happy.
          </p>
          <div>
            <button className="btn bg-black text-white mb-4 mt-4">
              Get's Started. It's free
            </button>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
              </svg>
              No credit card required
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
              </svg>
              No time limit on Free plan
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
