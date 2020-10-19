Javascript / D3 Bacteria 

This project incorporates a Javascript script that includes a d3 calls, which identify bootstrap elements from the HTML and allow the user to filter and then visualize data.

The first step is to perform the JSON call, which in this case is a call to the samples.json file within this folder. Console.log the JSON which is called 'data' here. It is important to accurately traverse the in order to correctly identify the which arrays/objects need to be identified. In this instance, the names, metadata and samples will be analyzed. Using D3 to select the #selDataSet Bootstrap element effectively connects the script to the bootstrap dropdown menu in the HTML. Each name is run through a for each loop and then apppended to the dropdown. 

 There are now two separate functions that need to be built to construct the 4 visuals needed in the dashboard. A table containing the metadata or Demographic information for each ID. The function Buildmeta indentifies the bootstrap panel and clears the existing HTML within the panel. The metadata is filtered to match the sample that has been selected. Using an Object.entries and a forEach, each entry is broken down into a key / value pair and then appended to the panel. Now, once an ID is selected from the dropdown, the panel with update with corresponding metadata.

 There are still 3 visualizations that need to be created. All 3 will be created within the buildchart function and will use Plotly for each visualization. Before constructing the plots, it is important to indentify the values from the filtered data that will be used in each. 'result_array' represents the entire sample specific to the selected id. Once the array is identified, the requite OTU, OTU labels and Sample Values can be extracted, as well as the  

The link to this project is located here: 

https://chanafin.github.io/d3_bacteria/

