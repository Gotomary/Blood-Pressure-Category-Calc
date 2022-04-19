const stolic = document.getElementById("stolic").value;
const diastolic = document.getElementById("diastolic").value;
const bpCategory = document.getElementById("outputTarget");

document.getElementById("btnCalc").addEventListener("click", calculateBP);

function calculateBP() {
  if (stolic < 120 && diastolic < 80) {
    bpCategory.style.backgroundColor = "#169D00";
    bpCategory.style.color = "#FFFFFF";
    bpCategory.innerHtml = 
      <p class="output-text text-light">Your blood pressure is NORMAL.</p>
    ;
  } else if (stolic < 129 && diastolic < 80) {
    bpCategory.style.backgroundColor = "#00CF91";
    bpCategory.style.color = "#000000";
    bpCategory.innerHtml = (
      <p class="output-text text-dark">Your blood pressure is ELEVATED.</p>
    );
  } else if (stolic < 139 || diastolic < 89) {
    bpCategory.style.backgroundColor = "#DBD200";
    bpCategory.style.color = "#000000";
    bpCategory.innerHtml = (
      <p class="output-text text-dark">
        You have HIGH BLOOD PRESSURE (Hypertension Stage 1)!
      </p>
    );
  } else if (stolic >= 140 || diastolic >= 90) {
    bpCategory.style.backgroundColor = "#BC7100";
    bpCategory.style.color = "#FFFFFF";
    bpCategory.innerHtml = (
      <p class="output-text text-light">
        You have HIGH BLOOD PRESSURE (Hypertension Stage 2)!
      </p>
    );
  } else if (stolic > 180 || diastolic > 120) {
    bpCategory.style.backgroundColor = "#BC0000";
    bpCategory.style.color = "#FFFFFF";
    bpCategory.innerHtml = (
      <p class="output-text text-light">
        You are in HYPERTENSIVE CRISIS. SEEK EMERGENCY CARE NOW!
      </p>
    );
  }
}

// Make more dry. For each if/else statement, define background, text color, and output in variables. Run a separate variable using those variables as parameters.

// function output(bgColor, textColor, outputText) {
//   bpCategory.style.backgroundColor = bgColor;
//   bpCategory.style.color = textColor;
//   bpCategory.innerText = outputText;
// }
