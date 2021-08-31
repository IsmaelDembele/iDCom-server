
exports.generateID = (userID) =>{
    const temp = userID.split('-');
    let num = parseInt( temp[1])+1;
    if( parseInt( num) < 10000000 ){
      temp[1] = (num+10000000).toString().slice(1);
    }else{
      temp[0] = String.fromCharCode(temp[0].charCodeAt(0) + 1);
      temp[1] = '0000001'
    }
    return ""+temp[0]+'-'+temp[1];
  }