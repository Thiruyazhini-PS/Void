function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // Request Fullscreen
        document.documentElement.requestFullscreen().catch((err) => {
            console.warn(`VOID_SYSTEM: Error enabling fullscreen (${err.message})`);
        });
    } else {
        // Exit Fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
