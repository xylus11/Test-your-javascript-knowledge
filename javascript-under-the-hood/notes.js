
     console.log("hello");  // when javascript engine encounters the code snippet it will first execute the code in the global scope so the output will be printe on the console  
     function myFunc()  // next javascript engine will  the function definition for the my func but these aren't executed immediately so javascript engine will store the function definition in the memory  
     {
        console.log("hello from function "); 

     }

     myFunc();//after the function definition javascript definition will encounte the call to myfunc this will cause the javascript engine to execute the code inside the function body the output of the statement console log will eb printed on the console
