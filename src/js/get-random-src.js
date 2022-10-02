const imagesForEuropeanCoast = ['card-room', 'DSC_01_01', 'DSC_01_02', 'DSC_01_03', 'DSC_01_04', 'DSC_01_05', 'DSC_01_06', 'DSC_01_07', 'DSC_01_08', 'DSC_01_09', 'DSC_01_10', 'DSC_01_11', 'DSC_01_12'];
const imagesForPythagoras = ['DSC_02_01', 'DSC_02_02', 'DSC_02_03', 'DSC_02_04', 'DSC_02_05', 'DSC_02_06', 'DSC_02_07', 'DSC_02_08', 'DSC_02_09', 'DSC_02_10', 'DSC_02_11', 'DSC_02_12', 'DSC_02_13', 'DSC_02_14', 'DSC_02_15', 'DSC_02_16', 'DSC_02_17', 'DSC_02_18', 'DSC_02_19', 'DSC_02_20', 'DSC_02_21', 'DSC_02_22', 'DSC_02_23'];

const imgEuropeanCoast = document.getElementById('img-european-coast');
const imgPythagoras = document.getElementById('img-pythagoras');

setInterval(() => {
  const randomSrcEuropeanCoast = imagesForEuropeanCoast[Math.floor(Math.random() * imagesForEuropeanCoast.length)];
  const randomSrcPythagoras = imagesForPythagoras[Math.floor(Math.random() * imagesForPythagoras.length)];
  imgEuropeanCoast.src = `../../../src/images/${randomSrcEuropeanCoast}.jpg`;
  imgPythagoras.src = `../../../src/images/${randomSrcPythagoras}.jpg`;
}, 5000);
