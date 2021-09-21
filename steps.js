function steps(n)
{
    for(let i=0;i<n;i++)
    {
        process.stdout.write("'");
        for(let j=0;j<=i;j++)
        {
            process.stdout.write('#');
        }
        for(let k=n;k>i+1;k--){
             process.stdout.write(' ');
        }
         process.stdout.write("'");
        console.log()
    }
}

steps(5)