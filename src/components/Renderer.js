import React, {useState} from "react";
import uniData from 


function averageTestData() {
    
  
    const dataArray = require('./csvjson.json');
    
    // Initialize an empty array to store the compiled data
    let compiledData = [];
    
    // Loop through each object in the array
    dataArray.forEach(obj => {
      // Extract values from the object
      const originalFilename = obj.original_filename;
      const col1 = obj.col1;
      const col2 = obj.col2;
      const col3 = obj.col3;
      const col4 = obj.col4;
      const col5 = obj.col5;
      const col6 = obj.col6;
    
      // Create a subarray with original filename as the first element
      const subarray = [originalFilename, col1, col2, col3, col4, col5, col6];
    
      // Push the subarray into the compiledData array
      compiledData.push(subarray);
    });
    
    // Now, 'compiledData' is a 2D array with the desired structure
    
    
    // Mapping of messy college file names to clean college names
    const collegeNameMapping = {
      "Caltech Common Data Set 2022-23_Published_June 2023.pdf": "California Institute of Technology",
      "vanderbiltcds.pdf": "Vanderbilt University",
      "stanfordCDS.pdf": "Stanford University",
      "harvard_cds_2021-2022.pdf": "Harvard University",
      "yalecds.pdf": "Yale University",
      "princetoncds.pdf": "Princeton University",
      "ucsdcds.pdf": "University of California, San Diego",
      "ucicds.pdf": "University of California, Irvine",
      "cmucds.pdf": "Carnegie Mellon University",
      "dartmouthcds.pdf": "Dartmouth College",
      "ucbcds.pdf": "University of California, Berkeley",
      "browncds.pdf": "Brown University",
      "dartmouthCDS.pdf": "Dartmouth College",
      "purduecds.pdf": "Purdue University",
      "northwesterdcs.pdf": "Northwestern University",
      "ricecds.pdf": "Rice University",
      "dukecds.pdf": "Duke University",
      "Columbia College and Columbia Engineering 2022–2023 Common Data Set.pdf": "Columbia University",
      "upenn.pdf": "University of Pennsylvania",
      "uchicagocds.pdf": "University of Chicago",
      "CDS_2022-2023_Cornell-University-v5.pdf": "Cornell University",
      "Common Data Set 2022-23 — MIT Institutional Research.pdf": "Massachusetts Institute of Technology (MIT)",
      "princetonCDS.pdf": "Princeton University"
    
    
      // Add more mappings as needed
    };
    
    // Assuming 'compiledData' is the 2D array with original file names as the first element in each subarray
    const updatedCompiledData = compiledData.map(subarray => {
      const originalFilename = subarray[0];
      const cleanCollegeName = collegeNameMapping[originalFilename] || originalFilename;
    
      // Replace the first element (original filename) with the clean college name
      return [cleanCollegeName, ...subarray.slice(1)];
    });
  
  // now it is like this
    /* 
  
    ["harvar", "gpaImporant", "", "", "X", ""] */
    
    // Now, 'updatedCompiledData' has the clean college names instead of messy file names
    resultArray = []
    thisCollData = []
    for (let i = 0; i < updatedCompiledData.length; i++) {
      if (i == 0) {
        lastColl = updatedCompiledData[i][0]
      }
      thisColl = updatedCompiledData[i][0]
      if (lastColl == thisColl){ // college did not change
        //console.log(i + "  " + updatedCompiledData[i]);;
        if (updatedCompiledData[i][1].localeCompare("SAT Composite") == 0){
          thisCollData.push(updatedCompiledData[i][3])
    
        }
  
    
    
        if (updatedCompiledData[i][1].localeCompare("ACT Composite") == 0){
          thisCollData.push(updatedCompiledData[i][3])
    
        }
    
    
    
      }
      else {
        resultArray.push(thisCollData);
        thisCollData = [updatedCompiledData[i][0]]
      }
    
      lastColl = updatedCompiledData[i][0]
    }
    
    
    //console.log(resultArray)
    
    result = []
    
    for (let i = 0; i < resultArray.length; i++)
    {
        //test[i] = Object.assign({}, test[i]); 
        let temp = {
          name: resultArray[i][0],
          sat: resultArray[i][1],
          act: resultArray[i][2],
        }
    
        result.push(temp);
    
    }
    
    return result;
  
  }
  
  
  function factorImportanceData() {
    // Load the JSON file locally
    const dataArray = require('./csvjson.json');
  
    // Initialize an empty array to store the compiled data
    let compiledData = [];
  
    // Loop through each object in the array
    dataArray.forEach(obj => {
      // Extract values from the object
      const originalFilename = obj.original_filename;
      const col1 = obj.col1;
      const col2 = obj.col2;
      const col3 = obj.col3;
      const col4 = obj.col4;
      const col5 = obj.col5;
      const col6 = obj.col6;
  
      // Create a subarray with original filename as the first element
      const subarray = [originalFilename, col1, col2, col3, col4, col5, col6];
  
      // Push the subarray into the compiledData array
      compiledData.push(subarray);
    });
  
    // Now, 'compiledData' is a 2D array with the desired structure
  
  
    // Mapping of messy college file names to clean college names
    const collegeNameMapping = {
      "Caltech Common Data Set 2022-23_Published_June 2023.pdf": "California Institute of Technology",
      "vanderbiltcds.pdf": "Vanderbilt University",
      "stanfordCDS.pdf": "Stanford University",
      "harvard_cds_2021-2022.pdf": "Harvard University",
      "yalecds.pdf": "Yale University",
      "princetoncds.pdf": "Princeton University",
      "ucsdcds.pdf": "University of California, San Diego",
      "ucicds.pdf": "University of California, Irvine",
      "cmucds.pdf": "Carnegie Mellon University",
      "dartmouthcds.pdf": "Dartmouth College",
      "ucbcds.pdf": "University of California, Berkeley",
      "browncds.pdf": "Brown University",
      "dartmouthCDS.pdf": "Dartmouth College",
      "purduecds.pdf": "Purdue University",
      "northwesterdcs.pdf": "Northwestern University",
      "ricecds.pdf": "Rice University",
      "dukecds.pdf": "Duke University",
      "Columbia College and Columbia Engineering 2022–2023 Common Data Set.pdf": "Columbia University",
      "upenn.pdf": "University of Pennsylvania",
      "uchicagocds.pdf": "University of Chicago",
      "CDS_2022-2023_Cornell-University-v5.pdf": "Cornell University",
      "Common Data Set 2022-23 — MIT Institutional Research.pdf": "Massachusetts Institute of Technology (MIT)",
      "princetonCDS.pdf": "Princeton University"
  
  
      // Add more mappings as needed
    };
  
    // Assuming 'compiledData' is the 2D array with original file names as the first element in each subarray
    const updatedCompiledData = compiledData.map(subarray => {
      const originalFilename = subarray[0];
      const cleanCollegeName = collegeNameMapping[originalFilename] || originalFilename;
  
      // Replace the first element (original filename) with the clean college name
      return [cleanCollegeName, ...subarray.slice(1)];
    });
  
    // Now, 'updatedCompiledData' has the clean college names instead of messy file names
    resultArray = []
    thisCollData = []
    for (let i = 0; i < updatedCompiledData.length; i++) {
      if (i == 0) {
        lastColl = updatedCompiledData[i][0]
      }
      thisColl = updatedCompiledData[i][0]
      if (lastColl == thisColl){ // college did not change
        //console.log(i + "  " + updatedCompiledData[i]);;
        if (updatedCompiledData[i][1].localeCompare("Academic GPA") == 0){
          //resultArray.push(updatedCompiledData[i])
  
          // updatedCompiledDatA IS section C7 with tyhe checks
          // check lengths
          // ["harvar", "sat importance", "", "", "x", ""]
          if (updatedCompiledData[i][2].length == 1){
            // very important
            thisCollData.push(4);
          }
          else if (updatedCompiledData[i][3].length == 1){
            thisCollData.push(3);
          }
          else if (updatedCompiledData[i][4].length == 1){
            thisCollData.push(2);
          }
          else {
            thisCollData.push(0);
          }
  
        }
  
        if (updatedCompiledData[i][1].localeCompare("Standardized test scores") == 0){
          //resultArray.push(updatedCompiledData[i])
          if (updatedCompiledData[i][2].length == 1){
            // very important
            thisCollData.push(4);
          }
          else if (updatedCompiledData[i][3].length == 1){
            thisCollData.push(3);
          }
          else if (updatedCompiledData[i][4].length == 1){
            thisCollData.push(2);
          }
          else {
            thisCollData.push(0);
          }
  
        }
  
        if (updatedCompiledData[i][1].localeCompare("First generation") == 0){
          //resultArray.push(updatedCompiledData[i])
          if (updatedCompiledData[i][2].length == 1){
            // very important
            thisCollData.push(4);
          }
          else if (updatedCompiledData[i][3].length == 1){
            thisCollData.push(3);
          }
          else if (updatedCompiledData[i][4].length == 1){
            thisCollData.push(2);
          }
          else {
            thisCollData.push(0);
          }
  
        }
      }
      else {
        resultArray.push(thisCollData);
        thisCollData = [updatedCompiledData[i][0]]
      }
  
      lastColl = updatedCompiledData[i][0]
    }
  
  
    //console.log(resultArray)
  
   result = []
  
    for (let i = 0; i < resultArray.length; i++)
    {
        //test[i] = Object.assign({}, test[i]); 
        let temp = {
          name: resultArray[i][0],
          gpa: resultArray[i][1],
          standardized: resultArray[i][2],
          firstgen: resultArray[i][3]
        }
  
        result.push(temp);
  
    }
  
    return result;
  
    
  }
export default function Renderer(){
    // schools as a variable
    // very important: 4
    // important: 3
    // considered: 2
    // not consider: 0
    const schoolImportanceExample = {gpa: 0, standardized: 0, firstgen: 0};
    // section C7 (important factors)
    

    // return format: {"name", "gpaImportance", standardizedimportnace, fristgenimprtance, gpaVERAGE, sAT}
    
    const schoolAveragesExample = {gpa: 0, sat: 0, act: 0};
    // sections 

    // person's input
    const input = {gpa: 0, sat: 0, act: 0, firstgen: false};

    // school array with all school objects
    const allSchoolNames = [];
    const allSchoolsAverages = averageTestData();
    const allSchoolsImportance = factorImportanceData();

    for (let i = 0; i < allSchoolsImportance.length; i++)
    {
        allSchoolsImportance[i] = Object.assign({}, allSchoolsImportance[i]); 
    }


    const schoolProportions = [];
    for (let i = 0; i < allSchoolNames.length; i++) {
        let total = 0.0;
        let curr = 0.0;
        let name = allSchoolsImportance[i].name;
        let testingImportance = allSchoolsImportance[i].standardized;
        let gradesImportance = allSchoolsImportance[i].gpa;
        let firstgenImportance = allSchoolsImportance[i].firstgen;
    
        let importance = [name, testingImportance, gradesImportance, firstgenImportance];
    
        let satAverage = allSchoolsAverages[i].sat;
        let actAverage = allSchoolsAverages[i].act;
        let gradesAverage = allSchoolsAverages[i].gpa;
    
        for (let j = 0; j < importance.length; j++) {
            if (importance[j] === 4) {
                importance[j] = 100;
                total += 100;
            } else if (importance[j] === 3) {
                importance[j] = 75;
                total += 75;
            } else if (importance[j] === 2) {
                importance[j] = 50;
                total += 50;
            }
        }
        console.log(total);
    
        // gpa calculation 
        let gradesPercent = 0;
        if (allSchoolsAverages[1] !== 0) {
          if (input.gpa >= gradesAverage) {
              if (input.gpa - gradesAverage > 0.2) {
                  gradesPercent += importance[1];
            
              } else if (input.gpa - gradesAverage > 0.1) {
                  gradesPercent = importance[1] * 0.9;
              } else if (input.gpa - gradesAverage > 0.05) {
                  gradesPercent = importance[1] * 0.8;
              } else {
                  gradesPercent = importance[1] * 0.7;
              }
          } else {
              if (gradesAverage - input.gpa < 0.05) {
                  gradesPercent = importance[1] * 0.4;
              } else if (gradesAverage - input.gpa < 0.1) {
                  gradesPercent = importance[1] * 0.3;
              } else if (gradesAverage - input.gpa < 0.2) {
                  gradesPercent = importance[1] * 0.2;
              } else {
                  gradesPercent = importance[1] * 0.1;
              }
          }
          console.log(gradesPercent);
    
        }
        curr += gradesPercent;
    
        // sat and act
        let satPercent = 0;
        if (allSchoolsAverages.sat !== 0) {
          if (input.sat >= satAverage) {
              if (input.sat - satAverage > 50) {
                  satPercent += importance[2];
              } else if (input.sat - satAverage > 30) {
                  satPercent = importance[2] * 0.9;
              } else if (input.sat - satAverage > 10) {
                  satPercent = importance[2] * 0.8;
              } else {
                  satPercent = importance[2] * 0.7;
              }
          } else {
              if (satAverage - input.sat < 10) {
                  satPercent = importance[2] * 0.4;
              } else if (satAverage - input.sat < 30) {
                  satPercent = importance[2] * 0.3;
              } else if (satAverage - input.sat < 50) {
                  satPercent = importance[2] * 0.2;
              } else {
                  satPercent = importance[2] * 0.1;
              }
          } 
        }
        
        //  act
        let actPercent = 0;
        if (allSchoolsAverages.act !== 0) {
          if (input.act >= actAverage) {
              if (input.act - actAverage > 3) {
                  actPercent += importance[22];
              } else if (input.act - actAverage > 2) {
                  actPercent = importance[2] * 0.9;
              } else if (input.act - actAverage > 1) {
                  actPercent = importance[2] * 0.8;
              } else {
                  actPercent = importance[2] * 0.7;
              }
          } else {
              if (actAverage - input.act < 1) {
                  actPercent = importance[2] * 0.4;
              } else if (actAverage - input.act < 2) {
                  actPercent = importance[2] * 0.3;
              } else if (actAverage - input.act < 3) {
                  actPercent = importance[2] * 0.2;
              } else {
                  actPercent = importance[2] * 0.1;
              }
          }
        }
        if (actPercent > satPercent) {
          curr += actPercent;
        } else {
          curr += satPercent;
        }
        
        console.log("act: " + actPercent)
        if (allSchoolsImportance[i].firstgen !== 0) {
          if (input.firstgen === true) {
            curr += importance[3];
          }
        }
        
        let result = {proportion: curr / total, name: importance[i].name};
        schoolProportions.push(result);
    }
    
    schoolProportions.sort((a, b) => parseFloat(b.proportion) - parseFloat(a.proportion));

    for (let i = 0; i < 8; i++) {
        console.log(schoolProportions[i].name);
    }
    
    const listItems = schoolProportions.map(schoolProportions=>
            <li> {schoolProportions[i]} </li>
        );
    
        return <ul> {listItems} </ul>;
        //{schoolProportions.map
    }

