function checkUserAge(){
  const typeAge = parseInt(document.getElementById('typeAge').value)

  if (typeAge > 18){
    document.querySelector('li').innerText = "성인입니다."
  } else {
    document.querySelector('li').innerText = '미성년자입니다.'
  }

}



