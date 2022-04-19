import React, {useState} from "react";
import "./AnimalCard.css";

export interface AnimalCardData {
  id: number;
  name: string;
  animal: string;
  city: string;
  state: string;
  breed: string;
  images: string[];
  majors: string[];
  minors: string[];
  quote: string;
}

const AnimalCard = (props: {data: AnimalCardData}) => {
  const data = props.data;

  const [voteCount, setVoteCount] = useState(0);
  const [isFrozen, setIsFrozen] = useState(false);

  const [imageIdx, setImageIdx] = useState(0);
  const imageUrl = data.images[imageIdx];
  const nextImage = () => {
    const nextImageIdx = (imageIdx + 1) % data.images.length;
    setImageIdx(nextImageIdx);
  };

  return (
    <div className="AnimalCard">
      <div className="imageContainer">
        <img onClick={nextImage} src={imageUrl} />
      </div>
      <div className="cardBody">
        <h2>{data.name}</h2>
        <h5>{data.animal} - {data.breed} - {data.city}</h5>
        <p>Major(s): {data.majors.join(", ")}</p>
        {data.minors.length > 0 && <p>Minor(s): {data.minors.join(", ")}</p>}
        <p className="quote">{data.quote}</p>
        <div className="votes">
          <span>Current Votes: {voteCount}</span>
        </div>
        <div className="buttons">
          {!isFrozen && <button className="vote" onClick={() => setVoteCount(voteCount + 1)}>Vote for {data.name}</button>}
          <button className="freeze" onClick={() => setIsFrozen(!isFrozen)}>{isFrozen ? "Unfreeze" : "Freeze"} Voting</button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
