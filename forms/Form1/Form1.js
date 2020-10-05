let rows = Number(prompt("Enter a number of rows: Must be between 1 and 10"))
let columns = Number(prompt("Enter a number of columns: Must be between 1 and 10"))
let x,y,chr;
for (x=1;x<=rows;x++)
  { chr= ''
  for (y=1;y<=columns;y++)
    {
    chr=chr+("*");
    }
  document.write(chr);
  document.write("<br />") 
    chr= '';
}