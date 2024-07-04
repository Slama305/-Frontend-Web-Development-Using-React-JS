
var n ,p ,m,e;
do{
    var flag=true;
    if(!n){
        n= prompt("Enter your name:");
        var nv = /^[A-Za-z\s]+$/.test(n);
        if(!nv){
            alert("Your name not valid ...!");
            n=0;
            continue;
        }
    }
    if(!p){
        p = prompt("Enter your phone number :");
        var phv = /^\d{8}$/.test(p);
        if(!phv){
            alert("Your phone not valid ...!");
            p=0
            continue;
        }
    }
    if(!m){
       m = prompt("Enter your mobile number :");
        
        var mbv = /^(010|011|012)\d{8}$/.test(m);  
        if(!mbv){
            alert("Your mpbile not valid ...!");
            m=0;
            continue;
        }
    }
    if(!e){
        e = prompt("Enter your email:");
        var emv = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
        
        if(!emv){
            alert("Your email not valid ...!");
            e=0;
            continue;
        }
    } 
       flag=false;
        break;
    
}while(true);


alert("Welcome, " + n);