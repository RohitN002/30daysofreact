import React, { useState } from 'react';
 
function RatingSystem() {
  // State to track selected emoji and feedback text
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  // Function to handle emoji selection
  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    setShowFeedbackForm(true);
  };

  // Function to handle feedback submission
  const handleSubmit = () => {
    console.log(`Selected Emoji: ${selectedEmoji}`);
    console.log(`Feedback: ${feedbackText}`);
    // Additional logic for submitting feedback (e.g., sending to server)
    // Reset states
    setSelectedEmoji(null);
    setFeedbackText('');
    setShowFeedbackForm(false);
  };

  return (
    <div>
      {/* Emoji buttons */}
      <div id="feedback">
        <button onClick={() => handleEmojiSelect('😍')}>😍</button>
        <button onClick={() => handleEmojiSelect('😀')}>😀</button>
        <button onClick={() => handleEmojiSelect('🙁')}>🙁</button>
        <button onClick={() => handleEmojiSelect('😭')}>😭</button>
      </div>

      {/* Feedback form */}
      {showFeedbackForm && (
        <div>
          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Enter your feedback..."
          ></textarea>
          <button id="submit" onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default RatingSystem;
