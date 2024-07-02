function ft_dropDown(code) {
    switch (code) {
        case 0:
            scrollBy(0, 100);
            break;
        case 1:
            scrollBy(0, prompt('How much?'));
            break;
        case 2:
            argY = prompt('Where do we goooooo?');
            setTimeout(scrollBy, 10000, 0, argY);
    }
}