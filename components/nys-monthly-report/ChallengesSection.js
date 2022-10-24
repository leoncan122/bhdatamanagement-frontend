import React from "react";

const ChallengesSection = ({ selectedEvents, selectedEventsOutputs }) => {
  function handleCopy() {
    const data = document.querySelector("#challengesList").innerText;
    console.log("data", data);
    navigator.clipboard.writeText(data);
  }

  return (
    <div className="px-5">
      <h1 className="font-black mb-7">Challenges</h1>
      <p>{`${
        selectedEventsOutputs.filter((event) => event.eventchallenges !== "")
          .length
      } delivery challenges were reported and are listed below.`}</p>

      <ul id="challengesList">
        {selectedEventsOutputs.map((event) => {
          if (event.eventchallenges !== "") {
            return (
              <li key={event.id} style={{ listStyleType: "disc" }}>
                {" "}
                <p>{event.eventchallenges}</p>
              </li>
            );
          }
        })}
      </ul>

      <button
        onClick={handleCopy}
        className="px-5 mt-5 py-2 text-lg border hover:bg-black hover:text-white rounded shadow"
      >
        Copy list to clipboard
      </button>
    </div>
  );
};

export default ChallengesSection;
