const calculator = {
  add: function(a, b){
    console.log(a + b)
  }
  ,
  mul: function(a,b){
    console.log(a * b)
  },

  powerOf: function(a, b){
    console.log(a ** b)
  },

  sub: function(a, b){
    console.log(a - b)
  },

  div: function(a,b){
    console.log(a / b)
  }}

calculator.sub(5, 3)
calculator.add(1, 3)
calculator.powerOf(1, 4)
calculator.div(4,2)