import { connect } from "react-redux";
import Tweet from "../components/Tweet";

const Dashboard = (props) => {
  return (
    <div>
      <h1 className="center">Your Timeline</h1>
      <ul className="dashboard-list">
        {props.tweetIds.map((id) => (
          <li key={id}>
            <Tweet id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

// using implicit return, returning one thing (no curly braces)
// what data does the Dashboard component need from the state of our Redux store
// Dashboard renders all different tweets
// Data needs: the tweets from the state of our store, passed as destructed props
// return object with tweet IDs in it
// grab IDs, then sort, callback is returning a single expression: use implicit returns
// first import connect from react-redux
// make sure exported properly
// pass mapStateToProps to connect, get a function back as a return value
const mapStateToProps = ({ tweets }) => ({
  tweetIds: Object.keys(tweets).sort(
    (a, b) => tweets[b].timestamp - tweets[a].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);

// If you pass mapStateToProps to connect, then you get a function back
// The function has a return value
// And then for that function we're passing the Dashboard as an argument
