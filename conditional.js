function checkUserAge(){
  const typeAge = parseInt(document.getElementById('typeAge').value)

  if (isNaN(typeAge)){
    document.querySelector('li').innerText = "나이를 입력하세요."
  } else if (typeAge > 18){
    document.querySelector('li').innerText = "성인입니다."
  } else if (typeAge <= 18){
    document.querySelector('li').innerText = '미성년자입니다.'
  }

}



