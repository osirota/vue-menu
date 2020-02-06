<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang='scss'>
  @font-face {
  font-family: 'HindVadodara-Bold';
  src: url('./assets/fonts/HindVadodara-Bold.eot');
  src: url('./assets/fonts/HindVadodara-Bold.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/HindVadodara-Bold.svg#HindVadodara-Bold') format('svg'),
       url('./assets/fonts/HindVadodara-Bold.ttf') format('truetype'),
       url('./assets/fonts/HindVadodara-Bold.woff') format('woff'),
       url('./assets/fonts/HindVadodara-Bold.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Ubuntu-Light';
  src: url('./assets/fonts/Ubuntu-Light.eot');
  src: url('./assets/fonts/Ubuntu-Light.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Ubuntu-Light.svg#Ubuntu-Light') format('svg'),
       url('./assets/fonts/Ubuntu-Light.ttf') format('truetype'),
       url('./assets/fonts/Ubuntu-Light.woff') format('woff'),
       url('./assets/fonts/Ubuntu-Light.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'HindVadodara-Light';
  src: url('./assets/fonts/HindVadodara-Light.eot');
  src: url('./assets/fonts/HindVadodara-Light.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/HindVadodara-Light.svg#HindVadodara-Light') format('svg'),
       url('./assets/fonts/HindVadodara-Light.ttf') format('truetype'),
       url('./assets/fonts/HindVadodara-Light.woff') format('woff'),
       url('./assets/fonts/HindVadodara-Light.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'HindVadodara-Regular';
  src: url('./assets/fonts/HindVadodara-Regular.eot');
  src: url('./assets/fonts/HindVadodara-Regular.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/HindVadodara-Regular.svg#HindVadodara-Regular') format('svg'),
       url('./assets/fonts/HindVadodara-Regular.ttf') format('truetype'),
       url('./assets/fonts/HindVadodara-Regular.woff') format('woff'),
       url('./assets/fonts/HindVadodara-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Ubuntu-Regular';
  src: url('./assets/fonts/Ubuntu-Regular.eot');
  src: url('./assets/fonts/Ubuntu-Regular.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Ubuntu-Regular.svg#Ubuntu-Regular') format('svg'),
       url('./assets/fonts/Ubuntu-Regular.ttf') format('truetype'),
       url('./assets/fonts/Ubuntu-Regular.woff') format('woff'),
       url('./assets/fonts/Ubuntu-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'HindVadodara-Regular';
}
.container {
  max-width: 1180px;
  margin: 0 auto;
  @media (min-width: 320px) {
    width: 100%;
  }
}
</style>