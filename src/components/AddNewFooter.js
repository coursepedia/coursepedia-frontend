import React from "react";

function AddNewFooter() {
  return (
    <div>
      <footer className="footer bg-light page-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Your Website 2019</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://www.twitter.com">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href="https://www.facebook.com">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                {/* <li className="list-inline-item">
                  <a href="https://www.linkedin.com">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">Privacy Policy</li>
                <li className="list-inline-item">Terms of Use</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AddNewFooter;
