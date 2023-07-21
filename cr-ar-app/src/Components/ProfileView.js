import "../Styles/ProfileViewStyles.css";
import PersonImage from "../Images/man.png";

function ProfileView() {
  return (
    <div className="body-wrapper">
      <div className="card">
        <div className="imgBx">
          <img src={PersonImage} />
        </div>
        <div className="content">
          <div className="details">
            <h2>
              Gowsikan Nakuleswaran
              <br />
              <span>2019/E/039</span>
            </h2>
            <div className="data">
              <h5>
                342
                <br />
                <span>Posts</span>
              </h5>
              <h5>
                120k
                <br />
                <span>Followers</span>
              </h5>
              <h5>
                285
                <br />
                <span>Following</span>
              </h5>
            </div>
            <div className="actionBtn">
              <button>Follow</button>
              <button>Message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-1">
        <div className="content-1">
          <div className="details-1">
            <div className="course-wrapper">
              <h2>Current Courses Taken</h2>
            </div>
            <div className="wrapper-3">
              <div className="course-wrapper-2">
                <h4>Software Construction</h4>
                <h4>Operating System</h4>
                <h4>Machine Learning</h4>
                <h4>Embedded System</h4>
                <h4>Robotics and Automation</h4>
                <h4>Software Construction</h4>
                <h4>Signals and Systems</h4>
              </div>
              <div className="approved">
                <label className="rectangle-322">Approved</label>
                <label className="rectangle-322">Approved</label>
                <label className="rectangle-322-red">Pending</label>
                <label className="rectangle-322">Approved</label>
                <label className="rectangle-322">Approved</label>
                <label className="rectangle-322-red">Pending</label>
                <label className="rectangle-322">Approved</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-2">
        <div className="content-2">
          <div className="biodata-wrapper">
            <h2>Bio Data</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;