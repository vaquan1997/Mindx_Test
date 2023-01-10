//Câu 1
let c = 0;
let N = 6;
    document.write("Câu 1: <br/>");
    document.write(" hailstone("+N+"): ")
    function HailstoneNumbers(N)
    {
        document.write(N + " ");
  
        if (N == 1 && c == 0) {
            return c;
        }
        else if (N == 1 && c != 0) {
            c++;
            return c;
        }
        else if (N % 2 == 0) {
            c++;
            HailstoneNumbers(N / 2);
        }
        else if (N % 2 != 0) {
            c++;
            HailstoneNumbers(3 * N + 1);
        }
        return c;
    }       
        let x;

        x = HailstoneNumbers(N);
        document.write("<br/>Steps: " + x);
        
        

//Câu 2:
document.write("<br/>Câu 2: (ở console log) copy test case  " + x);
function freeShipping(order){
    let isFreeShip = false
    let sumMoney = 0;
    for ( const property in order) {
        sumMoney = sumMoney + order[property]
    } 
    if (sumMoney > 50.00) {
        isFreeShip = true;
    }
    return isFreeShip;
}


