Javascript / D3 Bacteria 

This project incorporates a Javascript script that includes d3 calls that identify bootstrap elements from the HTML and allow the user to filter and then visualize data through a Dashboard that investigates Bellybutton Bacteria.

The first step is to perform the JSON call, which in this case is a call to the samples.json file within this folder. Console.log the JSON which is called 'data' here. It is important to familiarize and accurately traverse the  JSON in order to correctly identify which arrays/objects need to be identified. In this instance, the names, metadata and samples will be analyzed. Using D3 to select the #selDataSet Bootstrap element effectively connects the script to the bootstrap dropdown menu in the HTML. The name is iterrated through via a for each loop and each ID number is apppended to the dropdown. 

 There are now two separate functions that need to be built to construct the 4 visuals needed in the dashboard. A table containing the metadata or Demographic information for each ID is the next step. The function buildmeta indentifies the bootstrap panel and clears the existing HTML within the panel. The metadata is filtered to match the sample ID that has been selected through the drop down. Using Object.entries and a forEach loop, each entry is broken down into a key / value pair and then appended to the panel. Now, once an ID is selected from the dropdown, the panel is updated with corresponding metadata.

 There are still 3 visualizations that need to be created and all 3 will be created within the buildchart function and will use Plotly for each graph. Before constructing the plots, it is important to indentify the values from the filtered data that will be used in each graph. 'result_array' represents the entire sample specific to the selected ID. Once the array is identified, the required OTU, OTU labels, Wash Frequency and Sample Values can be extracted, as well as the samples with the highest recorded values, which is idenified by sorting the sample_value variable and slicing the top 10. 

 Once all the required values have been correctly extracted, each graph's data and layout are configured.

The link to this project is located here: 

https://chanafin.github.io/d3_bacteria/

