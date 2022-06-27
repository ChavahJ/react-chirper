import { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { useNavigate } from "react-router-dom";

const NewTweet = ({ dispatch, id }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleChange = (event) => {
    const text = event.target.value;
    setText(text);
    // first time we are using React component state over Redux state
    // more complicated to put the state into the store
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleAddTweet(text, id));
    setText("");
    if (!id) {
      navigate("/");
    }
  };

  const charactersLeft = 280 - text.length;

  return (
    <div>
      <h1 className="center">Compose New Tweet</h1>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          maxLength={280}
          placeholder="What's up?"
          value={text}
          onChange={handleChange}
          type="textbox"></textarea>
        {charactersLeft <= 100 && (
          <div className="tweet-length">{charactersLeft}</div>
        )}

        <button type="submit" className="btn" disabled={text === ""}>
          Tweet Tweet
        </button>
      </form>
    </div>
  );
};

export default connect()(NewTweet);

// Create a controlled component
// React is in control of the text in the input field
// Submit button is disabled until user starts typing
// UI change based on current state of component
