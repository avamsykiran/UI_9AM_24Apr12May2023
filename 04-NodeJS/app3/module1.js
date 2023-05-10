
export const getFactors = n => {
    let factors = [1];

    for(let i = 2;i<=n/2;i++){
        if(n%i==0){
            factors = [...factors,i];        
        }
    }

    factors = [...factors,n];

    return factors;
};

const isPrime = n => getFactors(n).length==2;

export default isPrime;