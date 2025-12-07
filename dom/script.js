let pageTitle = document.title;
document.title = "Wellcome Our Dom Session";

//  <script>
//       // --- ১. getElementById (আইডি দিয়ে ধরা) ---
//       const title = document.getElementById("main-title");
//       console.log("1. ID Result:", title);
//       title.style.color = "blue"; // কালার নীল করলাম

//       // --- ২. getElementsByClassName (ক্লাস দিয়ে ধরা - লিস্ট দেয়) ---
//       const boxes = document.getElementsByClassName("box");
//       console.log("2. Class Result:", boxes);

//       // শুধু প্রথম বক্সে স্টাইল দিচ্ছি (Index 0)
//       boxes[0].style.backgroundColor = "yellow";
//       boxes[1].style.backgroundColor = "lightgreen";

//       // --- ৩. getElementsByTagName (ট্যাগ দিয়ে ধরা - লিস্ট দেয়) ---
//       const para = document.getElementsByTagName("p");
//       console.log("3. Tag Result:", para);
//       para[0].innerText = "প্যারাগ্রাফ টেক্সট পরিবর্তন করা হলো!";

//       // --- ৪. querySelector (CSS এর মতো, শুধু প্রথমটা দেয়) ---
//       const firstBox = document.querySelector(".box");
//       console.log("4. Query Selector (First):", firstBox);
//       firstBox.style.border = "3px solid red"; // প্রথম বক্সের বর্ডার লাল

//       // --- ৫. querySelectorAll (CSS এর মতো, সবগুলো দেয়) ---
//       const allBoxes = document.querySelectorAll(".box");
//       console.log("5. Query Selector All:", allBoxes);

//       // সবগুলোতে লুপ চালিয়ে ফন্ট বোল্ড করা (Advanced)
//       for (const box of allBoxes) {
//         box.style.fontWeight = "bold";
//       }
//     </script>

const title = document.getElementById("main-title");

title.style.color = "tomato";

const boxes = document.getElementsByClassName("box");

boxes[0].style.backgroundColor = "yellow";

const paras = document.getElementsByTagName("p");

for (let i = 0; i < paras.length; i++) {
  if (i % 2 === 0) {
    // even
    paras[i].style.color = "pink";
  }

  if (i % 2 === 1) {
    // odd
    paras[i].style.color = "tomato";
  }
}

//   --- ৪. querySelector (CSS এর মতো, শুধু প্রথমটা দেয়) ---
const firstBox = document.querySelector(".box");

firstBox.style.border = "3px solid red"; // প্রথম বক্সের বর্ডার লাল

//       // --- ৫. querySelectorAll (CSS এর মতো, সবগুলো দেয়) ---
const allBoxes = document.querySelectorAll(".box");

for (const box of allBoxes) {
  box.style.fontWeight = "bold";
}

function boxColorChange(event) {
  const boxcolor = boxes[1].style.backgroundColor;

  if (boxcolor === "red") {
    boxes[1].style.backgroundColor = "yellow";
  } else {
    boxes[1].style.backgroundColor = "red";
  }

  console.log(boxes[1].style.backgroundColor);
}
