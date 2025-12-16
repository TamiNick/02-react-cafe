// import css from "./VoteOptions.module.css"

// interface VoteOptionsProps {
//     onVote,
//     onReset,
//     canReset: boolean
// }

// function VoteOptions () {
//     return <>
//     <div className={css.container}>
//   <button className={css.button}>Good</button>
//   <button className={css.button}>Neutral</button>
//   <button className={css.button}>Bad</button>
//   <button className={`${css.button} ${css.reset}`}>Reset</button>
//     </div>
// </>
// }


// export default VoteOptions


import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>Good</button>
      <button className={css.button} onClick={() => onVote("neutral")}>Neutral</button>
      <button className={css.button} onClick={() => onVote("bad")}>Bad</button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}