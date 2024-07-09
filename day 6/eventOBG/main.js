var inputs = document.getElementById('inputs');

inputs.addEventListener('input', function(e) {
    var v = e.target.value;
    var numin = v.replace(/[^0-9]/g, '');
    if (v !== numin) {
        e.target.value = numin;
    }
    // if (!isNaN(v)) {
    //     e.target.value = v;
    // }
});