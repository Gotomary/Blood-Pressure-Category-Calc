const stolic = document.getElementById("stolic");
const diastolic = document.getElementById("diastolic");
const bpCategory = document.getElementById("outputTarget");

document.getElementById("btnCalc").addEventListener("click", calculateBP);

document.getElementById("btnClear").addEventListener("click", clear)

function calculateBP() {

  if (stolic.value > 180 || diastolic.value > 120) {
    console.log("Go to the ER!");
    bpCategory.style.backgroundColor = "#BC0000";
    bpCategory.innerHTML =
      `<p class="output-text text-light">
        You are in HYPERTENSIVE CRISIS. SEEK EMERGENCY CARE NOW!
      </p>`;
    return;
  }

  else if (stolic.value >= 140 || diastolic.value >= 90) {
    console.log("Stage 2 BP");
    bpCategory.style.backgroundColor = "#BC7100";
    bpCategory.innerHTML =
      `<p class="output-text text-light">
        You have HIGH BLOOD PRESSURE (Hypertension Stage 2)!
      </p>`;
    return;
  }

  else if (stolic.value < 120 && diastolic.value < 80) {
    console.log("Normal BP");
    bpCategory.style.backgroundColor = "#169D00";
    bpCategory.innerHTML =
      `<p class="output-text text-light">Your blood pressure is NORMAL.</p>`;
    return;
  }

  else if (stolic.value < 129 && diastolic.value < 80) {
    console.log("Elevated BP");
    bpCategory.style.backgroundColor = "#00CF91";
    bpCategory.style.color = "#000000";
    bpCategory.innerHTML =
      `<p class="output-text text-dark">Your blood pressure is ELEVATED.</p>`;
    return;
  }

  else 
  // if (stolic.value < 139 || diastolic.value < 89) 
  {
    console.log("Stage 1 BP");
    bpCategory.style.backgroundColor = "#DBD200";
    bpCategory.style.color = "#000000";
    bpCategory.innerHTML =
      `<p class="output-text text-dark">
        You have HIGH BLOOD PRESSURE (Hypertension Stage 1)!
      </p>`;
    return;
  }
}

function clear(){
  bpCategory.innerHTML = "";
  bpCategory.style.backgroundColor = "#80b3ff";
  stolic.value = "";
  diastolic.value = "";
}
