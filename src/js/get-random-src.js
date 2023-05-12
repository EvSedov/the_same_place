const imagesForQuietPlace = ['DSC_04_08', 'DSC_04_01', 'DSC_04_02', 'DSC_04_03', 'DSC_04_04', 'DSC_04_05', 'DSC_04_06', 'DSC_04_07', 'DSC_04_09', 'DSC_04_10', 'DSC_04_11', 'DSC_04_12', 'DSC_04_13', 'DSC_04_14', 'DSC_04_15', 'DSC_04_16', 'DSC_04_17', 'DSC_04_18'];
const imagesForComfortableStudio = ['DSC_05_06', 'DSC_05_01', 'DSC_05_02', 'DSC_05_03', 'DSC_05_04', 'DSC_05_05', 'DSC_05_07'];
const imagesForIdealStudio = ['DSC_06_03', 'DSC_06_01', 'DSC_06_02', 'DSC_06_04', 'DSC_06_05', 'DSC_06_06'];
const imagesForBrightStudio = ['DSC_07_04', 'DSC_07_01', 'DSC_07_02', 'DSC_07_03', 'DSC_07_05', 'DSC_07_06', 'DSC_07_07', 'DSC_07_08', 'DSC_07_09'];

const imgQuietPlace = document.getElementById('img-quiet-place');
const imgComfortableStudio = document.getElementById('img-comfortable-studio');
const imgIdealStudio = document.getElementById('img-ideal-studio');
const imgBrightStudio = document.getElementById('img-bright-studio');

if (imgQuietPlace.id) {
  setInterval(() => {
    const randomSrcQuietPlace = imagesForQuietPlace[Math.floor(Math.random() * imagesForQuietPlace.length)];
    imgQuietPlace.src = (process.env.NODE_ENV === 'production')
      ? require('../images/' + randomSrcQuietPlace + '.jpg')
      : `../images/${randomSrcQuietPlace}.jpg`;
  }, 7000);
};

if (imgComfortableStudio.id) {
  setInterval(() => {
    const randomSrcComfortableStudio = imagesForComfortableStudio[Math.floor(Math.random() * imagesForComfortableStudio.length)];
    imgComfortableStudio.src = (process.env.NODE_ENV === 'production')
      ? require('../images/' + randomSrcComfortableStudio + '.jpg')
      : `../images/${randomSrcComfortableStudio}.jpg`;
  }, 7000);
};

if (imgIdealStudio.id) {
  setInterval(() => {
    const randomSrcIdealStudio = imagesForIdealStudio[Math.floor(Math.random() * imagesForIdealStudio.length)];
    imgIdealStudio.src = (process.env.NODE_ENV === 'production')
      ? require('../images/' + randomSrcIdealStudio + '.jpg')
      : `../images/${randomSrcIdealStudio}.jpg`;
  }, 7000);
};

if (imgBrightStudio.id) {
  setInterval(() => {
    const randomSrcBrightStudio = imagesForBrightStudio[Math.floor(Math.random() * imagesForBrightStudio.length)];
    imgBrightStudio.src = (process.env.NODE_ENV === 'production')
      ? require('../images/' + randomSrcBrightStudio + '.jpg')
      : `../images/${randomSrcBrightStudio}.jpg`;
  }, 7000);
};
