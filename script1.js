Things = ["#trend","#seasonality","#residual"]
let id = [15,16,17]

for (let i = 0 ; i <= Things.length - 1; i++) {



const margin = {top: 10, right: 30, bottom: 30, left: 50},
    width = 1080 - margin.left - margin.right,
    height =150 - margin.top - margin.bottom;


    const svg = d3.select(Things[i]).append("svg").attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom).append("g").attr("transform", `translate(${margin.left},${margin.top})`);

//=========================================/
const x = d3.scaleTime().range([0,width]);
const y = d3.scaleLinear().range([height, 0]);
const xAxis = d3.axisBottom().scale(x);
svg.append("g").attr("transform", "translate(0," + height + ")").attr("class","myXaxis")
const yAxis = d3.axisLeft().scale(y);
svg.append("g").attr("class","myYaxis")
//=========================================/

  // When reading the csv, I must format variables:
 
raw = d3.csv("https://raw.githubusercontent.com/piper-of-dawn/technical_analysis/main/raw.csv",  function(d){
    return { Date : d3.timeParse("%Y-%m-%d")(d.Date)}
  });





raw.then(function(data){

function update(data){ 
console.log(id[i])
// Create the X axis:
  x.domain(d3.extent(data, function(d) { return parseTime(d.Date) }));
  
console.log(data, function(d) { return parseTime(d.Date) })
svg.selectAll(".myXaxis").transition()
    .duration(3000)
    .call(xAxis);



/*if(y_data == "nine"){
  console.log(d3.max(data.columns[2]))
}*/
let xdd = id[i]
var yx=data.columns[xdd];

console.log(data.columns[0])

  y.domain([0, d3.max(data, function(d) { return +d[yx]})]);
  svg.selectAll(".myYaxis")
    .transition()
    .duration(3000)
    .call(yAxis);

// Create a update selection: bind to the new data
  var u = svg.selectAll(".lineTest")
    .data([data], function(d){ return d[yx] });

  // Updata the line
  u
    .enter()
    .append("path")
    .attr("class","lineTest")
    .merge(u)
    .transition()
    .duration(3000)
    .attr("d", d3.line()
      .x(function(d) { return x(parseTime(d.Date)); })
      .y(function(d) { return y(d[yx]); })
        .curve(d3.curveCatmullRom))
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)

}

update(data);
 //return console.log(d3.extent(data, function(d) { return +d[yx]}))

   })  


}





