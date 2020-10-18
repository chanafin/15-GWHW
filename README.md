Javascript / D3 Bacteria 

This project incorporates a Javascript script that includes a d3.

The first step is to perform the JSON call, which in this case is a call to the samples.json file within this folder. Console.log the JSON which is called 'data' here. It is important to accurately traverse the in order to correctly identify the which arrays/objects need to be identified. In this instance, the names, metadata and samples will be analyzed. Using D3 to select the #selDataSet Bootstrap element effectively connects the script to the bootstrap dropdown menu in the HTML. Each name is run through a for each loop and then apppended to the dropdown. 

 There are now two separate functions that need to be built to construct visuals in the dashboard. Buildmeta indentifies the bootstrap panel and clears the existing HTML within the panel. The metadata is filtered to match the sample



