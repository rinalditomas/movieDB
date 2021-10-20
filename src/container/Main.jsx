import Row from "../components/row/Row";
import Banner from "../components/banner/Banner";
import request from "../constants/request";
import "../App.css";

function Main() {
  return (
    <div >
      <Banner fetchUrl={request.netflix} />
      <Row title="Trending" fetchUrl={request.trending} isLarge />
      <Row title="Upcoming" fetchUrl={request.upcoming} />
      <Row title="Popular Movie" fetchUrl={request.popularMovie} />
      <Row title="Popular Tv Show" fetchUrl={request.popularTv} />
      <Row title="Romance" fetchUrl={request.romance} />
      <Row title="Action" fetchUrl={request.action} />
    </div>
  );
}

export default Main;
