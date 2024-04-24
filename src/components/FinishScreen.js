function FinishScreen({ points, maxPossiblePoints,dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "💯";
  return (<>
    <p className="result">
      You scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {Math.ceil(percentage)}%) <span>{emoji}</span>
    </p>

<button
className="btn btn-ui"
onClick={() => dispatch({ type: "restart" })}
>
Restart Quiz!
</button>
</>
  );
}

export default FinishScreen;
