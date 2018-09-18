arrayToTable = function (data, options = {}) {
    var table = $('<table />'),
        thead,
        tfoot,

        cCount = 10,
        rCount = 25,
        tables = [];
    rows = [],
        defaults = {
            th: true,
            thead: false,
            tfoot: false,
            attrs: {}
        }

    options = $.extend(defaults, options);
    var i_column = 0;
    var p_count=cCount;
    currentPage = 1 ;
    table.attr(options.attrs);
    if (data.length == 0) {
        return false;
    }
    var column_key = Object.keys(data[0]);
    var Colum_l = column_key.length;
    var total_pages =Math.ceil( Colum_l /cCount  );
    var current_column=0;
    for (i = 0; i < total_pages; i++) {
        var table = $('<table />');
        var tr_h = $('<tr />');
        tr_h.append($('<th />').html(''));
        for (j = current_column; j < cCount; j++) {
            tr_h.append($('<th />').html(column_key[j]));
        }
        table.append(tr_h);
        // var tr_d = $('<tr />');
        // for (j = current_column; j < cCount; j++) {
        //     row.append($('<th />').html(column_key[j]));
        // }
        // row = $('<tr />');
        // for(j = 0; j < data[i].length; j++){
        // 	if(i == 0 && options.th){
        // 		row.append($('<th />').html(data[i][j]));
        // 	}else{
        // 		row.append($('<td />').html(data[i][j]));
        // 	}

        // }
        // rows.push(row);
    }

    // if(options.thead){
    // 	thead = rows.shift();
    // 	thead = $('<thead />').append(thead);
    // 	table.append(thead);
    // }

    // if(options.tfoot){
    // 	tfoot = rows.pop();
    // }

    // for (i = 0; i < rows.length; i++) {
    // 	table.append(rows[i]);
    // };

    // if(options.tfoot){
    // 	tfoot = $('<tfoot />').append(tfoot);
    // 	table.append(tfoot);
    // }
    return table;
}

function Generatehtml() {

}
$.getJSON('sample_data.json', function (data) {
    var table = arrayToTable(data, {
        thead: true,
        cCount: 10,
        cCount: 25,
        siderheaderField: 'sitename',
        attrs: {
            class: 'table'
        }
    });
    $('body').append(table);
});

$(document).ready(function () {
    Generatehtml();
});

// http://jsfiddle.net/Jaganathan/R2Her/