//There are 3 ways to write a JS code: Inline, Internal, External

//1. Inline: inside the html tag (not recommended)
//Example:
/*
<body onload="alert('Be Careful!!!)"></body>
*/


//2. Internal: use script tag
//We can write any JS code inside the script tag (<script></script>) like declaring variables,
//It is important where we put the script tag. It should be at the end of the body because html should load first, then JS should run.

//Example:
/*
(<script>
    var x = 10; y = 20;
    console.log(x+y)
    console.log('Dana')
    alert('Be Careful!!!')
    document.write('Dana');
</script>
*/


//3. External : Best practice
//here, we use src=(path of file) inside the script tag as follows: <script src="index.js"></script>

var x = 10; y = 20;
console.log(x+y)
console.log('Dana')
alert('Be Careful!!!')
document.write('Dana');



