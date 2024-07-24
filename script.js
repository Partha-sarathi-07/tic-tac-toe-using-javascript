const game = document.querySelector('.tic');
var i = 0;
var arr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

game.addEventListener("click", (e)=>{
  var cliked;
  var xo;

  // To if i is even then o will be put in the box else x
  if(i % 2 == 0){  
    e.target.innerHTML = "<img src = 'images/o.png' width = '120px' height = '100px'>";
    cliked = e.target.dataset.cellId;//To identify which cell is clicked for this in html data-cell-id="" should be declared
    xo = 'o'
  }
  else{
    e.target.innerHTML = "<img src = 'images/x.png' width = '50px' height = '50px'>";
    cliked = e.target.dataset.cellId;
    xo = 'x'
  }
    ++i;
    var win = valueput(cliked, xo);
    if(win != 0)
    {
      strikebuddy(win); // this function add the <hr> tag for striking
      document.querySelector('.players').innerHTML = "<p style = 'margin-left : 60px'>CONGRATULATIONS!!!</p>";
      setTimeout(function() {
        window.location.reload();
      }, 2100);
    }
    else if(i == 9)
    {
      document.querySelector('.players').innerHTML = "<p style = 'margin-left : 65px'>OOPS!! DRAWWWW...</p>";
      setTimeout(function() {
        window.location.reload();
      }, 2100);
    }
});



const valueput = (cliked, xo)=>{
  var r = -1;
  var c = -1;
  if(cliked <= 3)
  {
    if(xo === 'o'){
      arr[0][cliked - 1] = -1;
      r = 0;
      c = cliked - 1;
    }
    else {
      arr[0][cliked - 1] = 1;
      r = 0;
      c = cliked - 1;
    }
  }
  else if(cliked <= 6)
  {
    if(xo === 'o'){
      arr[1][cliked - 3 - 1] = -1;
      r = 1;
      c = cliked - 3 - 1;
    }
    else {
      arr[1][cliked - 3 - 1] = 1;
      r = 1;
      c = cliked - 3 - 1;
    }
  }
  else{
    if(xo === 'o'){
      arr[2][cliked - 6 - 1] = -1;
      r = 2;
      c = cliked - 6 - 1;
    }
    else{
      arr[2][cliked - 6 - 1] = 1;
      r = 2;
      c = cliked - 6 - 1;
    }
  }
  return winner(arr, r, c);
}

const winner = (arr, r, c)=>{
  var row = 0;
  var col = 0;
  if(r == c)
  {
    var dia = arr[0][0] + arr[1][1] + arr[2][2]
    if(Math.abs(dia) == 3)
    return 7;
  }
  else if((r == 0 && c == 2) || (r == 2 && c == 0) || (r == c))
  {
    var dia = arr[0][2] + arr[1][1] + arr[2][0]
    if(Math.abs(dia) == 3)
      return 8;
  }
  for(var i = 0; i < 3; i++)
  {
    row = row + arr[r][i];
    col = col + arr[i][c];
  }

  if(Math.abs(row) == 3){
    if(r == 0)
      return 1;
    else if(r == 1)
      return 2;
    return 3;
  }
  if(Math.abs(col) == 3)
  {
    if(c == 0)
      return 4;
    else if(c == 1)
      return 5;
    return 6;
  }
  return 0;

    
}

const strikebuddy = (win) =>{
  const line = document.querySelector('.strike');
  if(win == 1)
    line.innerHTML = "<hr class = 'top'>";
  else if(win == 2)
    line.innerHTML = "<hr class = 'middle'>";
  else if(win == 3)
    line.innerHTML = "<hr class = 'down'>";
  else if(win == 4)
    line.innerHTML = "<hr class = 'lef'>";
  else if(win == 5)
    line.innerHTML = "<hr class = 'mid'>";
  else if(win == 6)
    line.innerHTML = "<hr class = 'rig'>";
  else if(win == 7)
    line.innerHTML = "<hr class = 'lrdia'>";
  else
    line.innerHTML = "<hr class = 'rldia'>";
    

}




