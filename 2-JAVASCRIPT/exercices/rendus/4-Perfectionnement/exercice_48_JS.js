var table = [5,8,13,2];

function ft_sort(arg) {
    var i;
    var tmp;
    i = 0;
    while (arg[i] != null) {
        var j = 0;
        while (arg[j] != null) {
            if (arg[i] < arg[j]) {
                tmp = arg[j];
                arg[j] = arg[i];
                arg[i] = tmp;
            }
            j++;
        }
        i++;
    }
    i = 0;
    var str;
    while (i < arg['length']) {
        if (i == 0) {
            str = arg[i] + ' ';
            i++;
        }
        str += arg[i] + ' ';
        i++;
    }
    alert(str);
}