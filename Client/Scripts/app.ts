// IIFE - Immediately Invoked Function Expression
// AKA - An anonymous, Self-Executing function (closure)
(function()
{
    function Start(): void
    {
        console.info(`App Started!`);
    }

    window.addEventListener('load', Start);
})();