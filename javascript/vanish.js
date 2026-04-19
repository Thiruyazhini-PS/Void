window.onload = () => {
    const page = document.getElementById('canvas');

    // 1. Wait 3 seconds before starting the vanish
    setTimeout(() => {
        page.classList.add('vanish-effect');
        
        // 2. Completely remove the element from the code after it fades
        setTimeout(() => {
            page.remove();
            console.log("Connection Lost.");
        }, 2000); // This matches the 2s transition in the CSS
        
    }, 3000); 
};
