var opinions = ["This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];

var takeOpinion = function() {
  return _.sample(opinions);
};

var departamentOpinions = function() {
  return _.times(10, takeOpinion);
};

var employeeSatisfaction = function() {
  var array = _.times(5, departamentOpinions);
  return array;
};

console.log(employeeSatisfaction());