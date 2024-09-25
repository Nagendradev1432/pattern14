let rows=prompt("enter number of rows :")
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=rows;j++){
        if(i==1||j==1||j==rows||i==rows){
            res=res+1+" "
        }
        else if(i==2||j==2||j==rows-1||i==rows-1){
            res=res+2+" "
        }
        else if(i==3||j==3||i==rows-2||j==rows-2){
            res=res+3+" "
        }
        else if(j==4||j==rows-3||i==4||i==rows-3){
            res=res+4+" "
        }
        else if(i==5||j==5){
            res=res+5+" "
        }
        else{
            res=res+"  "
        }
    }
    console.log(res)
}


1 1 1 1 1 1 1 1 1 
1 2 2 2 2 2 2 2 1 
1 2 3 3 3 3 3 2 1 
1 2 3 4 4 4 3 2 1 
1 2 3 4 5 4 3 2 1 
1 2 3 4 4 4 3 2 1 
1 2 3 3 3 3 3 2 1 
1 2 2 2 2 2 2 2 1 
1 1 1 1 1 1 1 1 1

let rows=+prompt("enter nuber of rows :")
alpha=65,position=1
for(i=1;i<=rows;i++){
    res=""
    
    for(j=1;j<=i;j++){
        if(position%2==0){
        res=res+String.fromCharCode(alpha).toLowerCase()+" "
        }
        else{
            res=res+String.fromCharCode(alpha)+" "
        }
       alpha++
      position++
    }
    console.log(res)
}

OUTPUT:
A 
b C 
d E f 
G h I j 
K l M n O 



let rows=prompt("enter a number of rows :")
a=0,b=1
for(i=1;i<=rows;i++){
    res="",fib=0
    while(i!=fib){
        res=res+a+" "
        fib++
        c=a+b
        a=b
        b=c
    }
    console.log(res)
}

0 
1 1 
2 3 5 
8 13 21 34 
55 89 144 233 377 



let rows=prompt("enter number of rows :")
alpha=65
for(i=1;i<=rows;i++){
 res="",res1=""
 for(k=1;k<=rows-i;k++){
     res=res+"  "
 }
 for(j=1;j<=i;j++){
     res1=String.fromCharCode(alpha)+" "+res1
     alpha++
     
 }
 res=res+res1
//  console.log(res1)
 console.log(res)
 
}

A 
C B 
F E D 
J I H G 


let rows=prompt("enter a no.of rows :")
for(i=0;i<rows;i++){
    res="",alpha=65
    for(j=1;j<=rows-i;j++){
        res=res+String.fromCharCode(alpha)
        alpha++
    }
    if(i==0)
    console.log(res+res.slice(0,res.length-1).split("").reverse().join(""))
    else
    console.log(res+" ".repeat(2*i-1)+res.split("").reverse().join(""))
}



ABCDEFGHIJIHGFEDCBA
ABCDEFGHI IHGFEDCBA
ABCDEFGH   HGFEDCBA
ABCDEFG     GFEDCBA
ABCDEF       FEDCBA
ABCDE         EDCBA
ABCD           DCBA
ABC             CBA
AB               BA
A                 A




let rows=prompt("enter no.of rows :")
for(i=1;i<=2*rows-1;i++){
    cols=(i<=rows)?i:2*rows-i;
    spaces=(i<=rows)?rows-i:i-rows;
    res=""
    
    for(j=1;j<=cols;j++){
        if(j%2==0){
           res=res+"0" 
        }
        else{
            res=res+"1"
        }
        
    }
    for(k=1;k<=spaces;k++){
        res=res+" "
    }
    if(i==rows){
    console.log(res+res.slice(0,res.length-1).split("").reverse().join(""))
    }
    else{
        let str1=""
        for(p=0;p<res.length-1;p++){
            str1=str1+res[p]
        }
    console.log(res+str1.split("").reverse().join(""))
    }
    
}



1       1
10     01
101   101
1010 0101
101010101
1010 0101
101   101
10     01
1       1




let rows=prompt("enter no.of rows :")
for(i=1;i<=2*rows-1;i++){
    cols=(i<=rows)?i:2*rows-i;
    spaces=(i<=rows)?rows-i:i-rows;
    res=""
    
    for(j=1;j<=cols;j++){
        res=res+"*"
    }
    for(k=1;k<=spaces;k++){
        res=res+" "
    }
    if(i==rows){
    console.log(res+res.slice(0,res.length-1))
    }
    else{
        let str1=""
        for(p=0;p<res.length-1;p++){
            str1=str1+res[p]
        }
    console.log(res+str1.split("").reverse().join(""))
    }
    
}



*       *
**     **
***   ***
**** ****
*********
**** ****
***   ***
**     **
*       *


let rows=prompt("enter no.of rows :")
for(i=1;i<=2*rows-1;i++){
    cols=(i<=rows)?i:2*rows-i;
    spaces=(i<=rows)?rows-i:i-rows;
    res=""
    
    for(j=1;j<=cols;j++){
        res=res+"* "
    }
    for(k=1;k<=spaces;k++){
        res=res+"  "
    }
    if(i==rows){
    console.log(res+res.slice(0,res.length-2))
    }
    else{
        let str1=""
        for(p=0;p<res.length-3;p++){
            str1=str1+res[p]
        }
    console.log(res+str1.split("").reverse().join(""))
    }
    
}

*               *
* *           * *
* * *       * * *
* * * *   * * * *
* * * * * * * * * 
* * * *   * * * *
* * *       * * *
* *           * *
*               *




let rows=prompt("enter number of rows :")
for(i=1;i<=2*rows-1;i++){
    stars=(i<=rows)?i:2*rows-i;
    spaces=(i<=rows)?2*rows-(2*i)-1:(2*i)-(2*rows)-1;
    spaces=(spaces<0)?0:spaces;
    res=""
    for(j=1;j<=stars;j++){
        res=res+"* "
    }
    if(i==rows){
        console.log(res+res.slice(0,res.length-2))
    }
    else{
    console.log(res+"  ".repeat(spaces)+res)
    }
}


*               *
* *           * *
* * *       * * *
* * * *   * * * *
* * * * * * * * * 
* * * *   * * * *
* * *       * * *
* *           * *
*               *