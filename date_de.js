$.fn.dataTable.ext.oSort['de-date-asc'] = function (a,b) {
    return compareDates(a,b, 'a');
};

$.fn.dataTable.ext.oSort['de-date-desc'] = function (a,b) {
    return compareDates(a,b, 'd')
}

/**
 * Utility Function - CompareDates
 * 
 * bekommt 2 DatenStrings und gibt zurück:
 * a > b -> 1
 * b > a -> -1
 * a = b -> 0
 * 
 * @param {String} a
 * @param {String} b
 * @param {String} ordering
 * 
 * @return {Integer} c
 */
function compareDates(a, b, ordering) {
    var aSplitted = a.split(".");
    var x = new Date(aSplitted[2], aSplitted[1]-1, aSplitted[0]);
    var bSplitted = b.split(".");
    var y = new Date(bSplitted[2], bSplitted[1]-1, bSplitted[0]);

    if (ordering == 'a') {
        return (x>y)-(x<y);
    }
    return (x<y)-(x>y);
}
