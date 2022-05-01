function calculateBP() {
  if (stolic > 180 || diastolic > 120) {
    console.log("Go to the ER!");
  } else if (stolic >= 140 || diastolic >= 90) {
    console.log("Stage 2 BP");
  } else if (stolic < 139 || diastolic < 89) {
    console.log("Stage 1 BP");
  } else if (stolic < 129 && diastolic < 80) {
    console.log("Elevated BP");
  } else if (stolic < 120 && diastolic < 80) {
    console.log("Normal BP");
  }
}
