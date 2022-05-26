let q1 = []
let q2 = []

function pop(){
    console.log(q1[0])
    q1.shift()
}

function push(x){
    q2.push(x);
    while(q1.length!=0){
        q2.push(q1.shift())
    }

    let temp = q1;
        q1 =  q2;
        q2 = temp;
}

push(12)
push(10)
pop()
push(31)
push(7)
pop()