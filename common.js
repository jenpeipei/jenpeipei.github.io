function showOverlay(imageSrc) {
    var overlay = document.getElementById('overlay');
    var overlayImage = document.getElementById('overlayImage');
    overlayImage.src = imageSrc;
    overlay.style.display = 'flex';
  }

  function hideOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }

  function changeContainer0(containerType) {
    var oldContainers = document.querySelectorAll('.container');
    oldContainers.forEach(function(container) {
      container.style.display = 'none'; // 隐藏原始容器
    });
  
    var newContainer = document.createElement('div');
    newContainer.classList.add('container');
  
    if (containerType === 'all') {
      newContainer.innerHTML = `
      <div class="container">
      <div class="row justify-content-center">
        <div class="photo">
          <img src="white1.jpg" class="img-fluid" alt="" onclick="showOverlay('white1.jpg')">
        </div>
        <div class="photo">
          <img src="brown1.jpg" class="img-fluid" alt="" onclick="showOverlay('brown1.jpg')">
        </div>
        <div class="photo">
          <img src="red1.jpg" class="img-fluid" alt="" onclick="showOverlay('red1.jpg')"> 
        </div>
        <div class="photo">
          <img src="pink1.jpg" class="img-fluid" alt="" onclick="showOverlay('pink1.jpg')">
        </div>
        <div class="photo">
          <img src="purple1.jpg" class="img-fluid" alt="" onclick="showOverlay('purple1.jpg')">
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="photo2">
          <img src="yellow12.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow12.jpg')">
        </div>
        <div class="photo2">
          <img src="purple3.jpg" class="img-fluid" alt="" onclick="showOverlay('purple3.jpg')">
        </div>
        <div class="photo2">
          <img src="blue4.jpg" class="img-fluid" alt="" onclick="showOverlay('blue4.jpg')">
        </div>
        <div class="photo2">
          <img src="red9.jpg" class="img-fluid" alt="" onclick="showOverlay('red9.jpg')">
        </div>
        <div class="photo2">
          <img src="white7.jpg" class="img-fluid" alt="" onclick="showOverlay('white7.jpg')">
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="photo3">
          <img src="black4.jpg" class="img-fluid" alt="" onclick="showOverlay('black4.jpg')">
        </div>
        <div class="photo3">
          <img src="green11.jpg" class="img-fluid" alt="" onclick="showOverlay('green11.jpg')">
        </div>
        <div class="photo3">
          <img src="green4.jpg" class="img-fluid" alt="" onclick="showOverlay('green4.jpg')">
        </div>
        <div class="photo3">
          <img src="orange12.jpg" class="img-fluid" alt="" onclick="showOverlay('orange12.jpg')">
        </div>
        <div class="photo3">
          <img src="orange13.jpg" class="img-fluid" alt="" onclick="showOverlay('orange13.jpg')">
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="photo4">
          <img src="brown10.jpg" class="img-fluid" alt="" onclick="showOverlay('brown10.jpg')"> 
        </div>
        <div class="photo4">
          <img src="white10.jpg" class="img-fluid" alt="" onclick="showOverlay('white10.jpg')">
        </div>
        <div class="photo4">
          <img src="blue12.jpg" class="img-fluid" alt="" onclick="showOverlay('blue12.jpg')">
        </div>
        <div class="photo4">
          <img src="white13.jpg" class="img-fluid" alt="" onclick="showOverlay('white13.jpg')">
        </div>
        <div class="photo4">
          <img src="blue13.jpg" class="img-fluid" alt="" onclick="showOverlay('blue13.jpg')">
        </div>
      </div>
    </div>
`;
  }
  // 添加其他容器类型的逻辑

  document.body.appendChild(newContainer); // 将新容器添加到页面中
}


  

  function changeContainer(containerType) {
    var oldContainers = document.querySelectorAll('.container');
    oldContainers.forEach(function(container) {
      container.style.display = 'none'; // 隐藏原始容器
    });
  
    var newContainer = document.createElement('div');
    newContainer.classList.add('container');
  
    if (containerType === 'red') {
      newContainer.innerHTML = `
<div class="container">
  <div class="row justify-content-center">
    <div class="photo">
      <img src="red1.jpg" class="img-fluid" alt="" onclick="showOverlay('red1.jpg')">
    </div>
    <div class="photo">
      <img src="red10.jpg" class="img-fluid" alt="" onclick="showOverlay('red10.jpg')">
    </div>
    <div class="photo">
      <img src="red12.jpeg" class="img-fluid" alt="" onclick="showOverlay('red12.jpeg')"> 
    </div>
    <div class="photo">
      <img src="red13.jpg" class="img-fluid" alt="" onclick="showOverlay('red13.jpg')">
    </div>
    <div class="photo">
      <img src="red14.jpg" class="img-fluid" alt="" onclick="showOverlay('red14.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo2">
      <img src="red15.jpg" class="img-fluid" alt="" onclick="showOverlay('red15.jpg')">
    </div>
    <div class="photo2">
      <img src="red3.jpg" class="img-fluid" alt="" onclick="showOverlay('red3.jpg')">
    </div>
    <div class="photo2">
      <img src="red4.jpg" class="img-fluid" alt="" onclick="showOverlay('red4.jpg')">
    </div>
    <div class="photo2">
      <img src="red5.jpg" class="img-fluid" alt="" onclick="showOverlay('red5.jpg')">
    </div>
    <div class="photo2">
      <img src="red6.jpg" class="img-fluid" alt="" onclick="showOverlay('red6.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo3">
      <img src="red7.jpg" class="img-fluid" alt="" onclick="showOverlay('red7.jpg')">
    </div>
    <div class="photo3">
      <img src="red8.jpg" class="img-fluid" alt="" onclick="showOverlay('red8.jpg')">
    </div>
    <div class="photo3">
      <img src="red9.jpg" class="img-fluid" alt="" onclick="showOverlay('red9.jpg')">
    </div>
    <div class="photo3">
      <img src="red1.jpg" class="img-fluid" alt="" onclick="showOverlay('red1.jpg')">
    </div>
    <div class="photo3">
      <img src="red10.jpg" class="img-fluid" alt="" onclick="showOverlay('red10.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo4">
      <img src="red12.jpeg" class="img-fluid" alt="" onclick="showOverlay('red12.jpeg')"> 
    </div>
    <div class="photo4">
      <img src="red13.jpg" class="img-fluid" alt="" onclick="showOverlay('red13.jpg')">
    </div>
    <div class="photo4">
      <img src="red14.jpg" class="img-fluid" alt="" onclick="showOverlay('red14.jpg')">
    </div>
    <div class="photo4">
      <img src="red15.jpg" class="img-fluid" alt="" onclick="showOverlay('red15.jpg')">
    </div>
    <div class="photo4">
      <img src="red3.jpg" class="img-fluid" alt="" onclick="showOverlay('red3.jpg')">
    </div>
  </div>
</div>
`;
  }
  // 添加其他容器类型的逻辑

  document.body.appendChild(newContainer); // 将新容器添加到页面中
}




function changeContainer2(containerType) {
    var oldContainers = document.querySelectorAll('.container');
    oldContainers.forEach(function(container) {
      container.style.display = 'none'; // 隐藏原始容器
    });
  
    var newContainer = document.createElement('div');
    newContainer.classList.add('container');
  
    if (containerType === 'orange') {
      newContainer.innerHTML = `
<div class="container">
  <div class="row justify-content-center">
    <div class="photo">
      <img src="orange1.jpg" class="img-fluid" alt="" onclick="showOverlay('orange1.jpg')">
    </div>
    <div class="photo">
      <img src="orange10.jpg" class="img-fluid" alt="" onclick="showOverlay('orange10.jpg')">
    </div>
    <div class="photo">
      <img src="orange12.jpg" class="img-fluid" alt="" onclick="showOverlay('orange12.jpg')"> 
    </div>
    <div class="photo">
      <img src="orange13.jpg" class="img-fluid" alt="" onclick="showOverlay('orange13.jpg')">
    </div>
    <div class="photo">
      <img src="orange2.jpg" class="img-fluid" alt="" onclick="showOverlay('orange2.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo2">
      <img src="orange3.jpg" class="img-fluid" alt="" onclick="showOverlay('orange3.jpg')">
    </div>
    <div class="photo2">
      <img src="orange5.jpg" class="img-fluid" alt="" onclick="showOverlay('orange5.jpg')">
    </div>
    <div class="photo2">
      <img src="orange9.jpg" class="img-fluid" alt="" onclick="showOverlay('orange9.jpg')">
    </div>
    <div class="photo2">
      <img src="orange1.jpg" class="img-fluid" alt="" onclick="showOverlay('orange1.jpg')">
    </div>
    <div class="photo2">
      <img src="orange10.jpg" class="img-fluid" alt="" onclick="showOverlay('orange10.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo3">
      <img src="orange12.jpg" class="img-fluid" alt="" onclick="showOverlay('orange12.jpg')">
    </div>
    <div class="photo3">
      <img src="orange13.jpg" class="img-fluid" alt="" onclick="showOverlay('orange13.jpg')">
    </div>
    <div class="photo3">
      <img src="orange2.jpg" class="img-fluid" alt="" onclick="showOverlay('orange2.jpg')">
    </div>
    <div class="photo3">
      <img src="orange3.jpg" class="img-fluid" alt="" onclick="showOverlay('orange3.jpg')">
    </div>
    <div class="photo3">
      <img src="orange5.jpg" class="img-fluid" alt="" onclick="showOverlay('orange5.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo4">
      <img src="orange9.jpg" class="img-fluid" alt="" onclick="showOverlay('orange9.jpg')"> 
    </div>
    <div class="photo4">
      <img src="orange1.jpg" class="img-fluid" alt="" onclick="showOverlay('orange1.jpg')">
    </div>
    <div class="photo4">
      <img src="orange10.jpg" class="img-fluid" alt="" onclick="showOverlay('orange10.jpg')">
    </div>
    <div class="photo4">
      <img src="orange12.jpg" class="img-fluid" alt="" onclick="showOverlay('orange12.jpg')">
    </div>
    <div class="photo4">
      <img src="orange13.jpg" class="img-fluid" alt="" onclick="showOverlay('orange13.jpg')">
    </div>
  </div>
</div>
`;
  }
  // 添加其他容器类型的逻辑

  document.body.appendChild(newContainer); // 将新容器添加到页面中
}



function changeContainer3(containerType) {
    var oldContainers = document.querySelectorAll('.container');
    oldContainers.forEach(function(container) {
      container.style.display = 'none'; // 隐藏原始容器
    });
  
    var newContainer = document.createElement('div');
    newContainer.classList.add('container');
  
    if (containerType === 'yellow') {
      newContainer.innerHTML = `
<div class="container">
  <div class="row justify-content-center">
    <div class="photo">
      <img src="yellow10.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow10.jpg')">
    </div>
    <div class="photo">
      <img src="yellow12.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow12.jpg')">
    </div>
    <div class="photo">
      <img src="yellow13.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow13.jpg')"> 
    </div>
    <div class="photo">
      <img src="yellow14.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow14.jpg')">
    </div>
    <div class="photo">
      <img src="yellow2.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow2.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo2">
      <img src="yellow5.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow5.jpg')">
    </div>
    <div class="photo2">
      <img src="yellow14.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow14')">
    </div>
    <div class="photo2">
      <img src="yellow6.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow6.jpg')">
    </div>
    <div class="photo2">
      <img src="yellow9.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow9.jpg')">
    </div>
    <div class="photo2">
      <img src="yellow10.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow10.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo3">
      <img src="yellow12.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow12.jpg')">
    </div>
    <div class="photo3">
      <img src="yellow13.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow13.jpg')">
    </div>
    <div class="photo3">
      <img src="yellow14.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow14.jpg')">
    </div>
    <div class="photo3">
      <img src="yellow2.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow2.jpg')">
    </div>
    <div class="photo3">
      <img src="yellow5.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow5.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo4">
      <img src="yellow6.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow6.jpg')"> 
    </div>
    <div class="photo4">
      <img src="yellow9.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow9.jpg')">
    </div>
    <div class="photo4">
      <img src="yellow10.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow10.jpg')">
    </div>
    <div class="photo4">
      <img src="yellow12.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow12.jpg')">
    </div>
    <div class="photo4">
      <img src="yellow13.jpg" class="img-fluid" alt="" onclick="showOverlay('yellow13.jpg')">
    </div>
  </div>
</div>
`;
  }
  // 添加其他容器类型的逻辑

  document.body.appendChild(newContainer); // 将新容器添加到页面中
}



function changeContainer4(containerType) {
    var oldContainers = document.querySelectorAll('.container');
    oldContainers.forEach(function(container) {
      container.style.display = 'none'; // 隐藏原始容器
    });
  
    var newContainer = document.createElement('div');
    newContainer.classList.add('container');
  
    if (containerType === 'green') {
      newContainer.innerHTML = `
<div class="container">
  <div class="row justify-content-center">
    <div class="photo">
      <img src="green1.jpg" class="img-fluid" alt="" onclick="showOverlay('green1.jpg')">
    </div>
    <div class="photo">
      <img src="green11.jpg" class="img-fluid" alt="" onclick="showOverlay('green11.jpg')">
    </div>
    <div class="photo">
      <img src="green4.jpg" class="img-fluid" alt="" onclick="showOverlay('green4.jpg')"> 
    </div>
    <div class="photo">
      <img src="green5.jpg" class="img-fluid" alt="" onclick="showOverlay('green5.jpg')">
    </div>
    <div class="photo">
      <img src="green6.jpg" class="img-fluid" alt="" onclick="showOverlay('green6.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo2">
      <img src="green8.jpg" class="img-fluid" alt="" onclick="showOverlay('green8.jpg')">
    </div>
    <div class="photo2">
      <img src="green1.jpg" class="img-fluid" alt="" onclick="showOverlay('green1.jpg')">
    </div>
    <div class="photo2">
      <img src="green11.jpg" class="img-fluid" alt="" onclick="showOverlay('green11.jpg')">
    </div>
    <div class="photo2">
      <img src="green4.jpg" class="img-fluid" alt="" onclick="showOverlay('green4.jpg')">
    </div>
    <div class="photo2">
      <img src="green5.jpg" class="img-fluid" alt="" onclick="showOverlay('green5.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo3">
      <img src="green6.jpg" class="img-fluid" alt="" onclick="showOverlay('green6.jpg')">
    </div>
    <div class="photo3">
      <img src="green8.jpg" class="img-fluid" alt="" onclick="showOverlay('green8.jpg')">
    </div>
    <div class="photo3">
      <img src="green1.jpg" class="img-fluid" alt="" onclick="showOverlay('green1.jpg')">
    </div>
    <div class="photo3">
      <img src="green11.jpg" class="img-fluid" alt="" onclick="showOverlay('green11.jpg')">
    </div>
    <div class="photo3">
      <img src="green4.jpg" class="img-fluid" alt="" onclick="showOverlay('green4.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo4">
      <img src="green5.jpg" class="img-fluid" alt="" onclick="showOverlay('green5.jpg')"> 
    </div>
    <div class="photo4">
      <img src="green6.jpg" class="img-fluid" alt="" onclick="showOverlay('green6.jpg')">
    </div>
    <div class="photo4">
      <img src="green8.jpg" class="img-fluid" alt="" onclick="showOverlay('green8.jpg')">
    </div>
    <div class="photo4">
      <img src="green1.jpg" class="img-fluid" alt="" onclick="showOverlay('green1.jpg')">
    </div>
    <div class="photo4">
      <img src="green11.jpg" class="img-fluid" alt="" onclick="showOverlay('green11.jpg')">
    </div>
  </div>
</div>
`;
  }
  // 添加其他容器类型的逻辑

  document.body.appendChild(newContainer); // 将新容器添加到页面中
}



function changeContainer5(containerType) {
    var oldContainers = document.querySelectorAll('.container');
    oldContainers.forEach(function(container) {
      container.style.display = 'none'; // 隐藏原始容器
    });
  
    var newContainer = document.createElement('div');
    newContainer.classList.add('container');
  
    if (containerType === 'blue') {
      newContainer.innerHTML = `
<div class="container">
  <div class="row justify-content-center">
    <div class="photo">
      <img src="blue1.jpg" class="img-fluid" alt="" onclick="showOverlay('blue1.jpg')">
    </div>
    <div class="photo">
      <img src="blue10.jpg" class="img-fluid" alt="" onclick="showOverlay('blue10.jpg')">
    </div>
    <div class="photo">
      <img src="blue12.jpg" class="img-fluid" alt="" onclick="showOverlay('blue12.jpg')"> 
    </div>
    <div class="photo">
      <img src="blue13.jpg" class="img-fluid" alt="" onclick="showOverlay('blue13.jpg')">
    </div>
    <div class="photo">
      <img src="blue2.jpg" class="img-fluid" alt="" onclick="showOverlay('blue2.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo2">
      <img src="blue3.jpg" class="img-fluid" alt="" onclick="showOverlay('blue3.jpg')">
    </div>
    <div class="photo2">
      <img src="blue4.jpg" class="img-fluid" alt="" onclick="showOverlay('blue4.jpg')">
    </div>
    <div class="photo2">
      <img src="blue5.jpg" class="img-fluid" alt="" onclick="showOverlay('blue5.jpg')">
    </div>
    <div class="photo2">
      <img src="blue6.jpg" class="img-fluid" alt="" onclick="showOverlay('blue6.jpg')">
    </div>
    <div class="photo2">
      <img src="blue7.jpg" class="img-fluid" alt="" onclick="showOverlay('blue7.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo3">
      <img src="blue8.jpg" class="img-fluid" alt="" onclick="showOverlay('blue8.jpg')">
    </div>
    <div class="photo3">
      <img src="blue1.jpg" class="img-fluid" alt="" onclick="showOverlay('blue1.jpg')">
    </div>
    <div class="photo3">
      <img src="blue10.jpg" class="img-fluid" alt="" onclick="showOverlay('blue10.jpg')">
    </div>
    <div class="photo3">
      <img src="blue12.jpg" class="img-fluid" alt="" onclick="showOverlay('blue12.jpg')">
    </div>
    <div class="photo3">
      <img src="blue13.jpg" class="img-fluid" alt="" onclick="showOverlay('blue13.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo4">
      <img src="blue2.jpg" class="img-fluid" alt="" onclick="showOverlay('blue2.jpg')"> 
    </div>
    <div class="photo4">
      <img src="blue3.jpg" class="img-fluid" alt="" onclick="showOverlay('blue3.jpg')">
    </div>
    <div class="photo4">
      <img src="blue4.jpg" class="img-fluid" alt="" onclick="showOverlay('blue4.jpg')">
    </div>
    <div class="photo4">
      <img src="blue5.jpg" class="img-fluid" alt="" onclick="showOverlay('blue5.jpg')">
    </div>
    <div class="photo4">
      <img src="blue6.jpg" class="img-fluid" alt="" onclick="showOverlay('blue6.jpg')">
    </div>
  </div>
</div>
`;
  }
  // 添加其他容器类型的逻辑

  document.body.appendChild(newContainer); // 将新容器添加到页面中
}



function changeContainer6(containerType) {
    var oldContainers = document.querySelectorAll('.container');
    oldContainers.forEach(function(container) {
      container.style.display = 'none'; // 隐藏原始容器
    });
  
    var newContainer = document.createElement('div');
    newContainer.classList.add('container');
  
    if (containerType === 'purple') {
      newContainer.innerHTML = `
<div class="container">
  <div class="row justify-content-center">
    <div class="photo">
      <img src="purple1.jpg" class="img-fluid" alt="" onclick="showOverlay('purple1.jpg')">
    </div>
    <div class="photo">
      <img src="purple2.jpg" class="img-fluid" alt="" onclick="showOverlay('purple2.jpg')">
    </div>
    <div class="photo">
      <img src="purple3.jpg" class="img-fluid" alt="" onclick="showOverlay('purple3.jpg')"> 
    </div>
    <div class="photo">
      <img src="purple4.jpg" class="img-fluid" alt="" onclick="showOverlay('purple4.jpg')">
    </div>
    <div class="photo">
      <img src="purple5.jpg" class="img-fluid" alt="" onclick="showOverlay('purple5.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo2">
      <img src="purple6.jpg" class="img-fluid" alt="" onclick="showOverlay('purple6.jpg')">
    </div>
    <div class="photo2">
      <img src="purple7.jpg" class="img-fluid" alt="" onclick="showOverlay('purple7.jpg')">
    </div>
    <div class="photo2">
      <img src="purple9.jpg" class="img-fluid" alt="" onclick="showOverlay('purple9.jpg')">
    </div>
    <div class="photo2">
      <img src="purple1.jpg" class="img-fluid" alt="" onclick="showOverlay('purple1.jpg')">
    </div>
    <div class="photo2">
      <img src="purple2.jpg" class="img-fluid" alt="" onclick="showOverlay('purple2.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo3">
      <img src="purple3.jpg" class="img-fluid" alt="" onclick="showOverlay('purple3.jpg')">
    </div>
    <div class="photo3">
      <img src="purple4.jpg" class="img-fluid" alt="" onclick="showOverlay('purple4.jpg')">
    </div>
    <div class="photo3">
      <img src="purple5.jpg" class="img-fluid" alt="" onclick="showOverlay('purple5.jpg')">
    </div>
    <div class="photo3">
      <img src="purple6.jpg" class="img-fluid" alt="" onclick="showOverlay('purple6.jpg')">
    </div>
    <div class="photo3">
      <img src="purple7.jpg" class="img-fluid" alt="" onclick="showOverlay('purple7.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo4">
      <img src="purple9.jpg" class="img-fluid" alt="" onclick="showOverlay('purple9.jpg')"> 
    </div>
    <div class="photo4">
      <img src="purple1.jpg" class="img-fluid" alt="" onclick="showOverlay('purple1.jpg')">
    </div>
    <div class="photo4">
      <img src="purple2.jpg" class="img-fluid" alt="" onclick="showOverlay('purple2.jpg')">
    </div>
    <div class="photo4">
      <img src="purple3.jpg" class="img-fluid" alt="" onclick="showOverlay('purple3.jpg')">
    </div>
    <div class="photo4">
      <img src="purple4.jpg" class="img-fluid" alt="" onclick="showOverlay('purple4.jpg')">
    </div>
  </div>
</div>
`;
  }
  // 添加其他容器类型的逻辑

  document.body.appendChild(newContainer); // 将新容器添加到页面中
}



function changeContainer7(containerType) {
    var oldContainers = document.querySelectorAll('.container');
    oldContainers.forEach(function(container) {
      container.style.display = 'none'; // 隐藏原始容器
    });
  
    var newContainer = document.createElement('div');
    newContainer.classList.add('container');
  
    if (containerType === 'pink') {
      newContainer.innerHTML = `
<div class="container">
  <div class="row justify-content-center">
    <div class="photo">
      <img src="pink1.jpg" class="img-fluid" alt="" onclick="showOverlay('pink1.jpg')">
    </div>
    <div class="photo">
      <img src="pink10.jpg" class="img-fluid" alt="" onclick="showOverlay('pink10.jpg')">
    </div>
    <div class="photo">
      <img src="pink11.jpg" class="img-fluid" alt="" onclick="showOverlay('pink11.jpg')"> 
    </div>
    <div class="photo">
      <img src="pink12.jpg" class="img-fluid" alt="" onclick="showOverlay('pink12.jpg')">
    </div>
    <div class="photo">
      <img src="pink2.jpg" class="img-fluid" alt="" onclick="showOverlay('pink2.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo2">
      <img src="pink3.jpg" class="img-fluid" alt="" onclick="showOverlay('pink3.jpg')">
    </div>
    <div class="photo2">
      <img src="pink4.jpg" class="img-fluid" alt="" onclick="showOverlay('pink4.jpg')">
    </div>
    <div class="photo2">
      <img src="pink5.jpg" class="img-fluid" alt="" onclick="showOverlay('pink5.jpg')">
    </div>
    <div class="photo2">
      <img src="pink6.jpg" class="img-fluid" alt="" onclick="showOverlay('pink6.jpg')">
    </div>
    <div class="photo2">
      <img src="pink7.jpg" class="img-fluid" alt="" onclick="showOverlay('pink7.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo3">
      <img src="pink8.jpg" class="img-fluid" alt="" onclick="showOverlay('pink8.jpg')">
    </div>
    <div class="photo3">
      <img src="pink9.jpg" class="img-fluid" alt="" onclick="showOverlay('pink9.jpg')">
    </div>
    <div class="photo3">
      <img src="pink1.jpg" class="img-fluid" alt="" onclick="showOverlay('pink1.jpg')">
    </div>
    <div class="photo3">
      <img src="pink10.jpg" class="img-fluid" alt="" onclick="showOverlay('pink10.jpg')">
    </div>
    <div class="photo3">
      <img src="pink11.jpg" class="img-fluid" alt="" onclick="showOverlay('pink11.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo4">
      <img src="pink12.jpg" class="img-fluid" alt="" onclick="showOverlay('brown10.jpg')"> 
    </div>
    <div class="photo4">
      <img src="pink2.jpg" class="img-fluid" alt="" onclick="showOverlay('white10.jpg')">
    </div>
    <div class="photo4">
      <img src="pink3.jpg" class="img-fluid" alt="" onclick="showOverlay('blue12.jpg')">
    </div>
    <div class="photo4">
      <img src="pink4.jpg" class="img-fluid" alt="" onclick="showOverlay('white13.jpg')">
    </div>
    <div class="photo4">
      <img src="pink5.jpg" class="img-fluid" alt="" onclick="showOverlay('blue13.jpg')">
    </div>
  </div>
</div>
`;
  }
  // 添加其他容器类型的逻辑

  document.body.appendChild(newContainer); // 将新容器添加到页面中
}



function changeContainer8(containerType) {
    var oldContainers = document.querySelectorAll('.container');
    oldContainers.forEach(function(container) {
      container.style.display = 'none'; // 隐藏原始容器
    });
  
    var newContainer = document.createElement('div');
    newContainer.classList.add('container');
  
    if (containerType === 'white') {
      newContainer.innerHTML = `
<div class="container">
  <div class="row justify-content-center">
    <div class="photo">
      <img src="white1.jpg" class="img-fluid" alt="" onclick="showOverlay('white1.jpg')">
    </div>
    <div class="photo">
      <img src="white10.jpg" class="img-fluid" alt="" onclick="showOverlay('white10.jpg')">
    </div>
    <div class="photo">
      <img src="white13.jpg" class="img-fluid" alt="" onclick="showOverlay('white13.jpg')"> 
    </div>
    <div class="photo">
      <img src="white15.jpg" class="img-fluid" alt="" onclick="showOverlay('white15.jpg')">
    </div>
    <div class="photo">
      <img src="white2.jpg" class="img-fluid" alt="" onclick="showOverlay('white2.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo2">
      <img src="white3.jpg" class="img-fluid" alt="" onclick="showOverlay('white3.jpg')">
    </div>
    <div class="photo2">
      <img src="white4.jpg" class="img-fluid" alt="" onclick="showOverlay('white4.jpg')">
    </div>
    <div class="photo2">
      <img src="white6.jpg" class="img-fluid" alt="" onclick="showOverlay('white6.jpg')">
    </div>
    <div class="photo2">
      <img src="white7.jpg" class="img-fluid" alt="" onclick="showOverlay('white7.jpg')">
    </div>
    <div class="photo2">
      <img src="white1.jpg" class="img-fluid" alt="" onclick="showOverlay('white1.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo3">
      <img src="white10.jpg" class="img-fluid" alt="" onclick="showOverlay('white10.jpg')">
    </div>
    <div class="photo3">
      <img src="white13.jpg" class="img-fluid" alt="" onclick="showOverlay('white13.jpg')">
    </div>
    <div class="photo3">
      <img src="white15.jpg" class="img-fluid" alt="" onclick="showOverlay('white15.jpg')">
    </div>
    <div class="photo3">
      <img src="white2.jpg" class="img-fluid" alt="" onclick="showOverlay('white2.jpg')">
    </div>
    <div class="photo3">
      <img src="white3.jpg" class="img-fluid" alt="" onclick="showOverlay('white3.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo4">
      <img src="white4.jpg" class="img-fluid" alt="" onclick="showOverlay('white4.jpg')"> 
    </div>
    <div class="photo4">
      <img src="white6.jpg" class="img-fluid" alt="" onclick="showOverlay('white6.jpg')">
    </div>
    <div class="photo4">
      <img src="white7.jpg" class="img-fluid" alt="" onclick="showOverlay('white7.jpg')">
    </div>
    <div class="photo4">
      <img src="white1.jpg" class="img-fluid" alt="" onclick="showOverlay('white1.jpg')">
    </div>
    <div class="photo4">
      <img src="white10.jpg" class="img-fluid" alt="" onclick="showOverlay('white10.jpg')">
    </div>
  </div>
</div>
`;
  }
  // 添加其他容器类型的逻辑

  document.body.appendChild(newContainer); // 将新容器添加到页面中
}



function changeContainer9(containerType) {
    var oldContainers = document.querySelectorAll('.container');
    oldContainers.forEach(function(container) {
      container.style.display = 'none'; // 隐藏原始容器
    });
  
    var newContainer = document.createElement('div');
    newContainer.classList.add('container');
  
    if (containerType === 'black') {
      newContainer.innerHTML = `
<div class="container">
  <div class="row justify-content-center">
    <div class="photo">
      <img src="black1.jpg" class="img-fluid" alt="" onclick="showOverlay('black1.jpg')">
    </div>
    <div class="photo">
      <img src="black10.jpg" class="img-fluid" alt="" onclick="showOverlay('black10.jpg')">
    </div>
    <div class="photo">
      <img src="black2.jpg" class="img-fluid" alt="" onclick="showOverlay('black2.jpg')"> 
    </div>
    <div class="photo">
      <img src="black3.jpg" class="img-fluid" alt="" onclick="showOverlay('black3.jpg')">
    </div>
    <div class="photo">
      <img src="black4.jpg" class="img-fluid" alt="" onclick="showOverlay('black4.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo2">
      <img src="black5.jpg" class="img-fluid" alt="" onclick="showOverlay('black5.jpg')">
    </div>
    <div class="photo2">
      <img src="black6.jpg" class="img-fluid" alt="" onclick="showOverlay('black6.jpg')">
    </div>
    <div class="photo2">
      <img src="black7.jpg" class="img-fluid" alt="" onclick="showOverlay('black7.jpg')">
    </div>
    <div class="photo2">
      <img src="black8.jpg" class="img-fluid" alt="" onclick="showOverlay('black8.jpg')">
    </div>
    <div class="photo2">
      <img src="black9.jpg" class="img-fluid" alt="" onclick="showOverlay('black9.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo3">
      <img src="black1.jpg" class="img-fluid" alt="" onclick="showOverlay('black1.jpg')">
    </div>
    <div class="photo3">
      <img src="black10.jpg" class="img-fluid" alt="" onclick="showOverlay('black10.jpg')">
    </div>
    <div class="photo3">
      <img src="black2.jpg" class="img-fluid" alt="" onclick="showOverlay('black2.jpg')">
    </div>
    <div class="photo3">
      <img src="black3.jpg" class="img-fluid" alt="" onclick="showOverlay('black3.jpg')">
    </div>
    <div class="photo3">
      <img src="black4.jpg" class="img-fluid" alt="" onclick="showOverlay('black4.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo4">
      <img src="black5.jpg" class="img-fluid" alt="" onclick="showOverlay('brown10.jpg')"> 
    </div>
    <div class="photo4">
      <img src="black6.jpg" class="img-fluid" alt="" onclick="showOverlay('white10.jpg')">
    </div>
    <div class="photo4">
      <img src="black7.jpg" class="img-fluid" alt="" onclick="showOverlay('blue12.jpg')">
    </div>
    <div class="photo4">
      <img src="black8.jpg" class="img-fluid" alt="" onclick="showOverlay('white13.jpg')">
    </div>
    <div class="photo4">
      <img src="black9.jpg" class="img-fluid" alt="" onclick="showOverlay('blue13.jpg')">
    </div>
  </div>
</div>
`;
  }
  // 添加其他容器类型的逻辑

  document.body.appendChild(newContainer); // 将新容器添加到页面中
}



function changeContainer10(containerType) {
    var oldContainers = document.querySelectorAll('.container');
    oldContainers.forEach(function(container) {
      container.style.display = 'none'; // 隐藏原始容器
    });
  
    var newContainer = document.createElement('div');
    newContainer.classList.add('container');
  
    if (containerType === 'brown') {
      newContainer.innerHTML = `
<div class="container">
  <div class="row justify-content-center">
    <div class="photo">
      <img src="brown1.jpg" class="img-fluid" alt="" onclick="showOverlay('brown1.jpg')">
    </div>
    <div class="photo">
      <img src="brown10.jpg" class="img-fluid" alt="" onclick="showOverlay('brown10.jpg')">
    </div>
    <div class="photo">
      <img src="brown2.jpg" class="img-fluid" alt="" onclick="showOverlay('brown2.jpg')"> 
    </div>
    <div class="photo">
      <img src="brown3.jpg" class="img-fluid" alt="" onclick="showOverlay('brown3.jpg')">
    </div>
    <div class="photo">
      <img src="brown4.jpg" class="img-fluid" alt="" onclick="showOverlay('brown4.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo2">
      <img src="brown6.jpg" class="img-fluid" alt="" onclick="showOverlay('brown6.jpg')">
    </div>
    <div class="photo2">
      <img src="brown7.jpg" class="img-fluid" alt="" onclick="showOverlay('brown7.jpg')">
    </div>
    <div class="photo2">
      <img src="brown8.jpg" class="img-fluid" alt="" onclick="showOverlay('brown8.jpg')">
    </div>
    <div class="photo2">
      <img src="brown9.jpg" class="img-fluid" alt="" onclick="showOverlay('brown9.jpg')">
    </div>
    <div class="photo2">
      <img src="brown1.jpg" class="img-fluid" alt="" onclick="showOverlay('brown1.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo3">
      <img src="brown10.jpg" class="img-fluid" alt="" onclick="showOverlay('brown10.jpg')">
    </div>
    <div class="photo3">
      <img src="brown2.jpg" class="img-fluid" alt="" onclick="showOverlay('brown2.jpg')">
    </div>
    <div class="photo3">
      <img src="brown3.jpg" class="img-fluid" alt="" onclick="showOverlay('brown3.jpg')">
    </div>
    <div class="photo3">
      <img src="brown4.jpg" class="img-fluid" alt="" onclick="showOverlay('brown4.jpg')">
    </div>
    <div class="photo3">
      <img src="brown6.jpg" class="img-fluid" alt="" onclick="showOverlay('brown6.jpg')">
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="photo4">
      <img src="brown7.jpg" class="img-fluid" alt="" onclick="showOverlay('brown10.jpg')"> 
    </div>
    <div class="photo4">
      <img src="brown8.jpg" class="img-fluid" alt="" onclick="showOverlay('white10.jpg')">
    </div>
    <div class="photo4">
      <img src="brown9.jpg" class="img-fluid" alt="" onclick="showOverlay('blue12.jpg')">
    </div>
    <div class="photo4">
      <img src="brown1.jpg" class="img-fluid" alt="" onclick="showOverlay('white13.jpg')">
    </div>
    <div class="photo4">
      <img src="brown10.jpg" class="img-fluid" alt="" onclick="showOverlay('blue13.jpg')">
    </div>
  </div>
</div>
`;
  }
  // 添加其他容器类型的逻辑

  document.body.appendChild(newContainer); // 将新容器添加到页面中
}