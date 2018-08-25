
function DataTableGenerator(nombreDiv) {

    $('#'+nombreDiv).dataTable({
        "language": {
	        "sProcessing":     "Procesando...",
	        "sLengthMenu":     "Mostrar _MENU_ registros",
	        "sZeroRecords":    "No se encontraron resultados",
	        "sEmptyTable":     "Ningún dato disponible en esta tabla",
	        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
	        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
	        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
	        "sInfoPostFix":    "",
	        "sSearch":         "Buscar:",
	        "sUrl":            "",
	        "sInfoThousands":  ",",
	        "sLoadingRecords": "Cargando...",
	        "oPaginate": {
	            "sFirst":    "Primero",
	            "sLast":     "Último",
	            "sNext":     "Siguiente",
	            "sPrevious": "Anterior"
	        },
	        "oAria": {
	            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
	            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
	        }
       	}
    });
}

function DataTableGeneratorNoPagination(nombreDiv) {
	$('#'+ nombreDiv + ' thead th').each( function () {
        var title = $(this).text();
        $(this).html( title+'<br><input type="text" placeholder="Buscar '+title+'" />' );
    } );

    // DataTable
    var table = $('#'+nombreDiv).DataTable({
    	dom: 'Bfrtip',

    lengthChange: false,
    bPaginate: 		false,
        buttons: [
        	'colvis'
        ],
    	"language": {
	        "sProcessing":     "Procesando...",
	        "sLengthMenu":     "Mostrar _MENU_ registros",
	        "sZeroRecords":    "No se encontraron resultados",
	        "sEmptyTable":     "Ningún dato disponible en esta tabla",
	        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
	        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
	        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
	        "sInfoPostFix":    "",
	        "sSearch":         "Buscar:",
	        "sUrl":            "",
	        "sInfoThousands":  ",",
	        "sLoadingRecords": "Cargando...",
	        "oPaginate": {
	            "sFirst":    "Primero",
	            "sLast":     "Último",
	            "sNext":     "Siguiente",
	            "sPrevious": "Anterior"
	        },
	        "oAria": {
	            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
	            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
	        }
       	}

    });


    table.buttons().container()
    .appendTo( '#'+ nombreDiv + '_wrapper .col-md-6:eq(0)' );

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.header() ).on( 'keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });
}


function DataTableGeneratorOrderBy(nombreDiv, col, tipo) {

    $('#'+nombreDiv).dataTable({
    	"order": [[ col, tipo ]],
        "language": {
	        "sProcessing":     "Procesando...",
	        "sLengthMenu":     "Mostrar _MENU_ registros",
	        "sZeroRecords":    "No se encontraron resultados",
	        "sEmptyTable":     "Ningún dato disponible en esta tabla",
	        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
	        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
	        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
	        "sInfoPostFix":    "",
	        "sSearch":         "Buscar:",
	        "sUrl":            "",
	        "sInfoThousands":  ",",
	        "sLoadingRecords": "Cargando...",
	        "oPaginate": {
	            "sFirst":    "Primero",
	            "sLast":     "Último",
	            "sNext":     "Siguiente",
	            "sPrevious": "Anterior"
	        },
	        "oAria": {
	            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
	            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
	        }
       	}
    });
}




function DataTableGeneratorExport(nombreDiv){

   	// Setup - add a text input to each footer cell
    $('#'+ nombreDiv + ' tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Buscar '+title+'" />' );
    } );



    // DataTable
    var table = $('#'+nombreDiv).DataTable({
    	dom: 'Bfrtip',

    lengthChange: false,
        buttons: [
        	'copy',
        	 {
                extend: 'pdfHtml5',
                orientation: 'landscape',
                pageSize: 'Letter',
                customize: function ( doc ) {
                	doc.pageMargins = [25, 25, 25, 80];
                	doc['footer']=(function(page, pages) {
						return {
							columns: [
								'Consultoría Integral SM2 Innovación',
								{
									alignment: 'center',
					        		image: 'data:image/png;base64,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',

								},
								{
									alignment: 'right',
									text: [
									{ text: page.toString(), italics: true },
									' de ',
									{ text: pages.toString(), italics: true }
									]
								}
							],
							margin: [15, 5]
						}
					});
				},

            },
        	'colvis',
        	'print'
        ],
    	"language": {
	        "sProcessing":     "Procesando...",
	        "sLengthMenu":     "Mostrar _MENU_ registros",
	        "sZeroRecords":    "No se encontraron resultados",
	        "sEmptyTable":     "Ningún dato disponible en esta tabla",
	        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
	        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
	        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
	        "sInfoPostFix":    "",
	        "sSearch":         "Buscar:",
	        "sUrl":            "",
	        "sInfoThousands":  ",",
	        "sLoadingRecords": "Cargando...",
	        "oPaginate": {
	            "sFirst":    "Primero",
	            "sLast":     "Último",
	            "sNext":     "Siguiente",
	            "sPrevious": "Anterior"
	        },
	        "oAria": {
	            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
	            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
	        }
       	}
    });


    table.buttons().container()
    .appendTo( '#'+ nombreDiv + '_wrapper .col-md-6:eq(0)' );

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });








}

function DataTableGeneratorNoPagination2(nombreDiv) {
	$('#'+ nombreDiv + ' thead th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="'+title+'" />' );
    } );

    // DataTable
    var table = $('#'+nombreDiv).DataTable({
    	dom: 'Brtip',
      //dom: 'Bfrtip',
    lengthChange: false,
    bPaginate: 		false,
        buttons: [
        	 {
                extend: 'pdfHtml5',
                orientation: 'landscape',
                pageSize: 'LEGAL'
            },
        	'print'
        ],
    	"language": {
	        "sProcessing":     "Procesando...",
	        "sLengthMenu":     "Mostrar _MENU_ registros",
	        "sZeroRecords":    "No se encontraron resultados",
	        "sEmptyTable":     "Ningún dato disponible en esta tabla",
	        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
	        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
	        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
	        "sInfoPostFix":    "",
	        "sSearch":         "Buscar:",
	        "sUrl":            "",
	        "sInfoThousands":  ",",
	        "sLoadingRecords": "Cargando...",
	        "oPaginate": {
	            "sFirst":    "Primero",
	            "sLast":     "Último",
	            "sNext":     "Siguiente",
	            "sPrevious": "Anterior"
	        },
	        "oAria": {
	            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
	            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
	        }
       	}

    });


    table.buttons().container()
    .appendTo( '#'+ nombreDiv + '_wrapper .col-md-6:eq(0)' );

    // Apply the search
    table.columns().every( function () {
        var that = this;

        $( 'input', this.header() ).on( 'keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });
}
