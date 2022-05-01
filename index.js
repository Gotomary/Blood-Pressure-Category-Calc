const stolic = document.getElementById("stolic");
const diastolic = document.getElementById("diastolic");
const bpCategory = document.getElementById("outputTarget");

document.getElementById("btnCalc").addEventListener("click", calculateBP);

function calculateBP() {
  if (stolic.value > 180 || diastolic.value > 120) {
    console.log("Go to the ER!");
    return;
  }

  if (stolic.value >= 140 || diastolic.value >= 90) {
    console.log("Stage 2 BP");
    return;
  }

  if (stolic.value < 120 && diastolic.value < 80) {
    console.log("Normal BP");
    return;
  }

  if (stolic.value < 129 && diastolic.value < 80) {
    console.log("Elevated BP");
    return;
  }

  if (stolic.value < 139 || diastolic.value < 89) {
    console.log("Stage 1 BP");
    return;
  }
}

// function calculateBP() {
//   if (stolic < 120 && diastolic < 80) {
//     console.log("Normal BP");
//     // bpCategory.style.backgroundColor = "#169D00";
//     // bpCategory.style.color = "#FFFFFF";
//     // bpCategory.innerHTML =
//     //   <p class="output-text text-light">Your blood pressure is NORMAL.</p>
//     // ;
//   } else if (stolic < 129 && diastolic < 80) {
//     console.log("Elevated BP");
//     // bpCategory.style.backgroundColor = "#00CF91";
//     // bpCategory.style.color = "#000000";
//     // bpCategory.innerHtml =
//     //   <p class="output-text text-dark">Your blood pressure is ELEVATED.</p>
//     // ;
//   } else if (stolic < 139 || diastolic < 89) {
//     console.log("Stage 1 BP");
//     // bpCategory.style.backgroundColor = "#DBD200";
//     // bpCategory.style.color = "#000000";
//     // bpCategory.innerHtml =
//     //   <p class="output-text text-dark">
//     //     You have HIGH BLOOD PRESSURE (Hypertension Stage 1)!
//     //   </p>
//     // ;
//   } else if (stolic >= 140 || diastolic >= 90) {
//     console.log("Stage 2 BP");
//     // bpCategory.style.backgroundColor = "#BC7100";
//     // bpCategory.style.color = "#FFFFFF";
//     // bpCategory.innerHtml =
//     //   <p class="output-text text-light">
//     //     You have HIGH BLOOD PRESSURE (Hypertension Stage 2)!
//     //   </p>
//     // ;
//   } else if (stolic > 180 || diastolic > 120) {
//     console.log("Go to the ER!")
//     // bpCategory.style.backgroundColor = "#BC0000";
//     // bpCategory.style.color = "#FFFFFF";
//     // bpCategory.innerHtml =
//     //   <p class="output-text text-light">
//     //     You are in HYPERTENSIVE CRISIS. SEEK EMERGENCY CARE NOW!
//     //   </p>
//     // ;
//   }
// }

// Make more dry. For each if/else statement, define background, text color, and output in variables. Run a separate variable using those variables as parameters.

// function output(bgColor, textColor, outputText) {
//   bpCategory.style.backgroundColor = bgColor;
//   bpCategory.style.color = textColor;
//   bpCategory.innerText = outputText;
// }
