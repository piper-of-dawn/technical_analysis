const margin = {top: 10, right: 30, bottom: 30, left: 50},
    width = 1080 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
const parseTime = d3.timeFormat("%B %d, %Y");

    const svg = d3.select("#my_dataviz").append("svg").attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom).append("g").attr("transform", `translate(${margin.left},${margin.top})`);

const x = d3.scaleTime().range([0,width]);
const y = d3.scaleLinear().range([height, 0]);
const xAxis = d3.axisBottom().scale(x);
svg.append("g").attr("transform", "translate(0," + height + ")").attr("class","myXaxis")

const yAxis = d3.axisLeft().scale(y);
svg.append("g").attr("class","myYaxis")


function quarter(array){
  return d =>  {return d.d3.timeFormat("%Y");}
}
 
raw = d3.csv("https://raw.githubusercontent.com/piper-of-dawn/technical_analysis/main/raw.csv")




function create (y_id){

raw.then(function(data){



function update(data){ 

// Create the X axis:
  x.domain(d3.extent(data, function(d) { return +d.Index }));
  

svg.selectAll(".myXaxis").transition()
    .duration(3000)
    .call(xAxis);


/*if(y_data == "nine"){
  console.log(d3.max(data.columns[2]))
}*/
var yx=data.columns[y_id];
console.log(data.columns[y_id])

  y.domain(d3.extent (data, function(d) { return +d[yx]}));
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
      .x(function(d) { return x(+d.Index); })
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

// At the beginning, I run the update function on the first dataset:
create(13);



