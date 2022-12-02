const imagesForPythagoras = ['DSC_02_01', 'DSC_02_02', 'DSC_02_03', 'DSC_02_04', 'DSC_02_05', 'DSC_02_06', 'DSC_02_07', 'DSC_02_08', 'DSC_02_09', 'DSC_02_10', 'DSC_02_11', 'DSC_02_12', 'DSC_02_13', 'DSC_02_14', 'DSC_02_15', 'DSC_02_16', 'DSC_02_17', 'DSC_02_18', 'DSC_02_19', 'DSC_02_20', 'DSC_02_21', 'DSC_02_22', 'DSC_02_23'];
const imagesForChkalov = ['chkalov', 'DSC_03_01', 'DSC_03_02', 'DSC_03_03', 'DSC_03_04', 'DSC_03_05', 'DSC_03_06', 'DSC_03_07', 'DSC_03_08', 'DSC_03_09', 'DSC_03_10', 'DSC_03_11', 'DSC_03_12', 'DSC_03_13', 'DSC_03_14', 'DSC_03_15', 'DSC_03_16', 'DSC_03_17', 'DSC_03_18', 'DSC_03_19', 'DSC_03_20', 'DSC_03_21', 'DSC_03_22', 'DSC_03_23', 'DSC_03_24', 'DSC_03_25', 'DSC_03_26', 'DSC_03_27', 'DSC_03_28', 'DSC_03_29', 'DSC_03_30', 'DSC_03_31'];
const imagesForQuietPlace = ['DSC_04_13', 'DSC_04_01', 'DSC_04_02', 'DSC_04_03', 'DSC_04_04', 'DSC_04_05', 'DSC_04_06', 'DSC_04_07', 'DSC_04_09', 'DSC_04_10', 'DSC_04_11', 'DSC_04_12'];


const imgQuietPlace = document.getElementById('img-quiet-place');
const imgPythagoras = document.getElementById('img-pythagoras');
const imgChkalov = document.getElementById('img-chkalov');

if (imgQuietPlace.id) {
  setInterval(() => {
    const randomSrcQuietPlace = imagesForQuietPlace[Math.floor(Math.random() * imagesForQuietPlace.length)];
    imgQuietPlace.src = (process.env.NODE_ENV === 'production')
      ? require('../images/' + randomSrcQuietPlace + '.jpg')
      : `../images/${randomSrcQuietPlace}.jpg`;
  }, 7000);
}

if (imgPythagoras.id) {
  setInterval(() => {
    const randomSrcPythagoras = imagesForPythagoras[Math.floor(Math.random() * imagesForPythagoras.length)];
    imgPythagoras.src = (process.env.NODE_ENV === 'production')
      ? require('../images/' + randomSrcPythagoras + '.jpg')
      : `../images/${randomSrcPythagoras}.jpg`;
  }, 7000);
}

if (imgChkalov.id) {
  setInterval(() => {
    const randomSrcChkalov = imagesForChkalov[Math.floor(Math.random() * imagesForChkalov.length)];
    imgChkalov.src = (process.env.NODE_ENV === 'production')
      ? require('../images/' + randomSrcChkalov + '.jpg')
      : `../images/${randomSrcChkalov}.jpg`;
  }, 7000);
}
