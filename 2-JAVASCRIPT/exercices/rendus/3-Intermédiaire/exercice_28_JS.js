function ft_force() {
    let words = [];
    var i = 0;
    while (confirm('Will you continu?') == true) {
      words[i] = prompt();
      i++;
    }
    for (t=0;t<i;t++) {
        alert(words[t]);
    }
}
