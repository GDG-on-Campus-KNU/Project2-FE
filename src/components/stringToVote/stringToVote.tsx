const stringToVote = (voteText: string) => {
  voteText = voteText.replace(/\\/gi, "");
  voteText = voteText.replace(/'/gi, '"');
  const votes = JSON.parse(voteText).map((vote: Array<string | number>) => {
    return { content: vote[0], count: vote[1] };
  });

  return votes;
};

export default stringToVote;
