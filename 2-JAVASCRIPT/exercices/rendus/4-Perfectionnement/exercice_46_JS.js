function ft_upAndDown(code) {
    switch (code) {
        case 0:
            intervalId = setInterval(scrollBy, 100, 0, -10);
            break;
        case 1:
            intervalId = setInterval(scrollBy, 100, 0, 10);
    }
}

function ft_stop() {
    clearInterval(intervalId);
}