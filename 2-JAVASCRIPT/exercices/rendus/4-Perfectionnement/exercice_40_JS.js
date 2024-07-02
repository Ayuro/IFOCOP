var intervalId;

function ft_interval() {
    if (intervalId == null)
        intervalId = setInterval(ft_alert, 5000);
    else
        clearInterval(intervalId);
}

function ft_alert() {
    alert('Wake up mathafacka!');
}
