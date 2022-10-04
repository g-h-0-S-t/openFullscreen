javascript: (() => {
    let ele = document.body;
    if (ele) {
        if (ele.requestFullscreen) {
            ele.requestFullscreen();
        } else if (ele.webkitRequestFullscreen) { /* Safari */
            ele.webkitRequestFullscreen();
        } else if (ele.msRequestFullscreen) { /* IE11 */
            ele.msRequestFullscreen();
        }
    }
})();
