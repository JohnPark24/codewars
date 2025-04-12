function travel(r, zipcode) {
  let addresses = r.split(',');
  let zipData = {};
  addresses.forEach(address => {
    let houseNum = address.split(' ')[0];
    let part = address.split(' ');
    let zipEx = `${part[part.length -2]} ${part[part.length -1]}`;
    let street = part.slice(1,-2).join(' ');
    
    if(!zipData[zipEx]){
      zipData[zipEx] = {streets: [], houses: []};
    }
    zipData[zipEx].streets.push(street);
    zipData[zipEx].houses.push(houseNum);
  });
  
  if(!zipData[zipcode]){
    return `${zipcode}:/`;
  }
  return `${zipcode}:${zipData[zipcode].streets.join(',')}/${zipData[zipcode].houses.join(',')}`;
}