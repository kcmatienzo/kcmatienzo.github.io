function CreateTable(){

    var rows = document.getElementById("rows").value;
    var columns = document.getElementById("columns").value;
    var stable = '<table border="1">' + "\n";
    var result = '';
        
    if (rows.length === 0)
    {
    alert("Number of rows cannot be 0!");
    return false;
    }
    if (columns.length === 0)
    {
    alert("Number of columns cannot be 0!");
    return false;
    }
    
    for (var i = 1; i <= rows; i++)
    {
	    result += '<tr>';

	    for (var j =1; j <= columns; j++)
	    {
		    result += '<td>';
		    result += '(' + i + ',' + j+')';
		    result += '</td>';
	    }
        result += '</tr>' + "\n";
    }
    var endTable = '</table>';
    document.getElementById("JavaTableResults").innerHTML = stable + result + endTable;

}

