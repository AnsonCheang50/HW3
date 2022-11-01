/*
    Creator : Anson Cheang
    Contact : Anson0906@gmail.com
    Source : TA, W3schools
    Description : essentially checks 
    for incorrect inputs, and create
    the multiplication table
*/

function MultiplicationTable()
{
    var hmin = document.getElementById("hmin").value;
    var hmax = document.getElementById("hmax").value;
    var vmin = document.getElementById("vmin").value;
    var vmax = document.getElementById("vmax").value;
    let t;
    //This clears the innerHTML making it so the table or error message is gone
    document.getElementById("wrong1").innerHTML = '';
    document.getElementById("wrong2").innerHTML = '';
    document.getElementById("wrong3").innerHTML = '';
    document.getElementById("wrong4").innerHTML = '';
    document.getElementById("graph").innerHTML = '';

    //The if statements
    if(hmin < -50 || hmin > 50 || hmin > hmax)
    {
        document.getElementById("wrong1").innerHTML = '<p> Value are not within range </p>';
    }
    else if(hmax < -50 || hmax > 50 || hmin > hmax)
    {
        document.getElementById("wrong2").innerHTML = '<p> Value are not within range </p>';
    }
    else if(vmin < -50 || vmin > 50 || vmin > vmax)
    {
        document.getElementById("wrong3").innerHTML = '<p> Value are not within range </p>';
    }
    else if(vmax < -50 || vmax > 50 || vmin > vmax)
    {
        document.getElementById("wrong4").innerHTML = '<p> Value are not within range </p>';
    }
    else
    {
        //the creation of the multiplication table
        t = '<table border = 1px>';
        t += '<tr>';
        t += '<th id="topleft"> ' + ' ' + ' </th>';
        for(var i = hmin; i <= hmax; i++)
        {
            t += '<th> ' + i + ' </th>';
        }

        t += '</tr>';

        for(var i = vmin; i <= vmax; i++)
        {
            t += '<tr>';
            t += '<th> ' + i + ' </th>';
            for(var j = hmin; j <= hmax; j++)
            {
                t += '<th> ' + i * j + ' </th>';
            }
            t += '</tr>';
        }

        t += '</table>';
        document.getElementById("graph").innerHTML = t;
    }
}