// add solution here
function theBeatlesPlay(musicians,instruments)
{
let arr=[];

  for(let i =0;i<musicians.length;i++)
  {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts(fact)
{
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var i = 0;
while (i<facts.length) {
  fact[i] = `${facts[i]} !!!`;
  i++;
}
return fact;
}

function iLoveTheBeatles(n)
{
  let arr=[];
  do
  {
    arr.push("I love the Beatles!");
  n++;
  }
  while (n<15)

  return arr;
}
