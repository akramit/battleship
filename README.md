# Javascript

## Document Object Model API 
Javascript communicates to HTML with the help of DOM API and can read, update the HTML elements.
For Example - Consider the following HTML element
```
<body>
    <h1>Green Planet</h1>
    <p id="greenplanet">
        All Is Well !!
    </p>
</body>
```
JS can access the element by the "id" greenplanet and change its contents. 
```
var planet = document.getElementById("greenplanet");
planet.innerHTML = "Red Alert. Green planet on fire!!"
```
Similarly, JS can modify the look and feel of the page i.e. modify/apply CSS changes. 

### Some Basic Commands
1. ```getElementById("id")```
2. ```getElementByClassName("class-name")```
3. ```element.innerHTML``` - Content of the element
4. ```window.onload=init``` - Wait for the page load before executing the script ```init```


