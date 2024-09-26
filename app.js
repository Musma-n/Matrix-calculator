const rows = document.querySelector("#rows");
const myForm = document.querySelector("#myForm");
const container1 = document.querySelector("#container1");
const container2 = document.querySelector("#container2");
const sumBtn = document.querySelector("#sumBtn");
const resultContainer = document.querySelector("#result-container");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Clear previous matrices and results
  container1.innerHTML = ''; 
  container2.innerHTML = ''; 
  resultContainer.innerHTML = ''; 

  const matrixSize = Number(rows.value);
  
  // Add Matrix 1 Label
  container1.innerHTML = '<div class="matrix-label" style="margin-top:15px">Matrix 1</div>';
  
  // Add Matrix 2 Label
  container2.innerHTML = '<div class="matrix-label" style="margin-top:15px">Matrix 2</div>';
  
  // Generate input fields for Matrix 1 and Matrix 2
  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      container1.innerHTML += `<input type="number" placeholder="" id="input1_${i}_${j}" style="width:40px;">`;
      container2.innerHTML += `<input type="number" placeholder="" id="input2_${i}_${j}" style="width:40px;">`;
    }
    container1.innerHTML += `<br/>`;
    container2.innerHTML += `<br/>`;
  }

  // Show the "Calculate" button after the matrices are generated
  sumBtn.style.display = "block";
});

const calculateMatrixValues = () => {
  const matrixSize = Number(rows.value);
  
  resultContainer.innerHTML = ''; 

  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      const input1 = document.querySelector(`#input1_${i}_${j}`);
      const input2 = document.querySelector(`#input2_${i}_${j}`);
      resultContainer.innerHTML += `<input type="number" value="${
        +input1.value + +input2.value
      }" disabled style="width:40px;">`;
    }
    resultContainer.innerHTML += `<br/>`;
  }
};

sumBtn.addEventListener("click", calculateMatrixValues);