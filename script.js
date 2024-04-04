

function goToBookmark(value) {
    window.location.href = value;
  }

// alert("welcome on my page");

let subs=document.querySelectorAll(".submit");

// subs.forEach((sub)=>{
//   sub.addEventListener("click",(e)=>{
//     alert("submited");
//     });
//   });
//upper commented code and lower code works same

for(let sub of subs){
  sub.addEventListener("click",(e)=>{
  alert("submited");
  });
};

let anchorFontAwesome = document.querySelectorAll('a[href^="https"]');

anchorFontAwesome.forEach((a) => {
  a.target = '_blank';
  a.addEventListener("mouseenter",(e)=>{
    console.log("Mouse over anchor element:", a.textContent);
    a.style.display="inline";
    let icon = document.createElement("icon");
    icon.innerHTML = '  <i class="fas fa-up-right-from-square" style="display:inline"></i>';
    a.append(icon);
    icon.style.fontSize="16px";
    icon.style.transition="all 0.1s ease";
  });
  a.addEventListener("mouseleave",(e)=>{
    let icon = a.querySelector("icon");
    if (icon) {
      a.removeChild(icon);
    }
  });
});




let width = window.outerWidth;
let inwidth = calculateInnerWidth(width);
let zoom = width / inwidth;

if (zoom > 0) {
  document.body.style.zoom = zoom;
} else {
  document.body.style.zoom = zoom;
}

console.log(`width: ${width}px, innerWidth: ${inwidth}px, zoom: ${zoom} `);

window.addEventListener('resize', (e) => {
  let newWidth = window.outerWidth;
  width = newWidth;

  inwidth = calculateInnerWidth(width);

  zoom = width / inwidth;

  if (zoom > 0) {
    document.body.style.zoom = zoom;
  } else {
    document.body.style.zoom = zoom;
  }

  console.log(`width: ${width}px, innerWidth: ${inwidth}px, zoom: ${zoom} `);
});

function calculateInnerWidth(outerWidth) {
  if (outerWidth < 600) {
    return 629;
  } else if (outerWidth < 1441) {
    return 1407;
  } else if (outerWidth < 1710) {
    return 1700;
  } else {
    return 2560;
  }
}



let doctitle=document.title;
window.addEventListener("blur",()=>{
  document.title="ComeBack!😖";
})
window.addEventListener("focus",()=>{
  document.title=doctitle;
})



