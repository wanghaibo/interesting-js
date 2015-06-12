function wrapTable(table) {
    var clone = table.cloneNode(true),
        wrap = document.createElement('div');
    wrap.className = 'swipe-table';
    wrap.appendChild(clone);
    table.parentNode.replaceChild(wrap, table);
}
var tables = document.querySelectorAll('table');
for (var i=0,len=tables.length;i<len;i++) {
    wrapTable(tables[i]);
}
