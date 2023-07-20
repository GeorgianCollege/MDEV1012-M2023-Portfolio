// IIFE - Immediately Invoked Function Expression
// AKA - An anonymous, Self-Executing function (closure)
(function()
{
    function Start(): void
    {
        console.info(`App Started!`);

        $('.btn-danger').on('click', (event)=>{
            if(!confirm("Are you sure?"))
            {
                event.preventDefault();
            }
        });
    }

    window.addEventListener('load', Start);
})();