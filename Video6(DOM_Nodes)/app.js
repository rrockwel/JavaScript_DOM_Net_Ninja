/// Nodes within the DOM

const banner = document.querySelector('#page-banner');
console.log(banner.nodeType);
console.log(banner.nodeName);
console.log(banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);
