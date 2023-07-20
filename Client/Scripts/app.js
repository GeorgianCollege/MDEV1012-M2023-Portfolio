"use strict";
(function () {
    function Start() {
        console.info(`App Started!`);
        $('.btn-danger').on('click', (event) => {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
            }
        });
    }
    window.addEventListener('load', Start);
})();
//# sourceMappingURL=app.js.map