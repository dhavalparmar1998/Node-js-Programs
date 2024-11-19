function userinfo(dob){

}

function homeloanemi(p,r,n){

}
function simpleinterest(p,r,n){
    var si = p*r*n/100;
    var finalamount = si + p;
    return[si,finalamount];
}

module.exports = {
    userinfo,
    homeloanemi,
    simpleinterest
}