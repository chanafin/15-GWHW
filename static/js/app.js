
d3.json('samples.json').then(function(data){
  //console.log(data)
    names = data.names;
    meta = data.metadata;
    samples = data.samples;
    var selector = d3.select('#selDataset')
    names.forEach(name => {
        selector.append("option").text(name).property('value', name)
    })
    buildchart(names[0]), buildmeta(names[0]);
});

function buildmeta(sample) {
    var panel = d3.select('#sample-metadata');
    panel.html("");
    var filteredmeta = meta.filter(d => d.id == sample)
    var profile = filteredmeta[0]
    Object.entries(profile).forEach(([key, value])=> {
        panel.append('h6').text(`${key}: ${value}`)
        })    
    }

