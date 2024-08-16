import backIcon from "../../assets/icons/back_white.svg";
import menuIcon from "../../assets/icons/menu_btn.svg";
import verifiedBadge from "../../assets/icons/verified_badge.svg";
import commentsIcon from "../../assets/icons/comments_icon.svg";
import forwardIcon from "../../assets/icons/forward_icon.svg";
import likeIcon from "../../assets/icons/like_icon.svg";
import saveIcon from "../../assets/icons/save_icon.svg";
import reshareIcon from "../../assets/icons/reshare_icon.svg";
import elon_pic from "../../assets/images/elon_pic_2.svg";

function RandomJokeCard() {
  return (
    <>
      <div className="card text-center">
        <div className="d-flex justify-content-start">
          <img src={backIcon} alt="" className="me-4" />
          <div
            className="inter-text"
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >
            Post
          </div>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <div className="d-flex align-items-center">
            {/* <div className="elonProfilePic "></div> */}
            <img className="elonProfilePic" src={elon_pic} />
            <div className="ms-1">
              <div
                className="inter-text position-relative"
                style={{ fontSize: "14px", fontWeight: "bold" }}
              >
                Elon Musk
                <div className="verifiedBadge position-absolute">
                  <img src={verifiedBadge} alt="" className="me-4" />
                </div>
              </div>
              <div
                className="inter-text"
                style={{
                  fontSize: "12px",
                  fontWeight: "normal",
                  letterSpacing: "0.002rem",
                  color: "#A0A0A0",
                  textAlign: "left",
                }}
              >
                @elonmusk
              </div>
            </div>
          </div>
          <img src={menuIcon} alt="" className="align-self-baseline" />
        </div>
        <div style={{ padding: "0.6rem 0px 0px 0px" }}>
          <p className="joke-text">
            Even some of the best AI software engineers in the world don’t
            realize how advanced Tesla AI has become
          </p>
        </div>

        <div style={{ padding: "0.5rem 0px 0px 0px" }}>
          <p className="tweet_insight">
            11:18 PM · Jul 30, 2024 · <span>20.5M</span> Views
          </p>
        </div>

        <hr />
        <div className="d-flex justify-content-between tweet_actions px-4">
          <div>
            <img src={commentsIcon} />
            4.9K
          </div>
          <div>
            <img src={reshareIcon} />
            5.3K
          </div>
          <div>
            <img src={likeIcon} />
            59K
          </div>
          <div>
            <img src={saveIcon} />
            1.1K
          </div>
          <div>
            <img src={forwardIcon} />
          </div>
        </div>
        <hr />

        <div className="row">
          <div
            className="d-flex justify-content-center dm-sans-text"
            style={{
              color: "rgba(255, 255, 255, 0.4)",
              fontWeight: "bolder",
              fontSize: "8px",
            }}
          >
            &copy; chai aur code
          </div>
        </div>
      </div>
    </>
  );
}

export default RandomJokeCard;
