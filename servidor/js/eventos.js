
var inicioApp = function(){
	var Aceptar = function(){
		var usuario=$("#txtUsuario").val();
		var clave =$("#txtClave").val();
		var parametros="opc=validaentrada"+
		"&usuario="+usuario+
		"&clave="+clave+
		"&aleatorio="+Math.random();
		$.ajax({
			cache:false,
			type: "POST",
			dataType:"json",
			url: "php/validaentrada.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					alert("Bienvenidos amiwos del iutube")
					//Ocultar la wea
					$("#secInicio").hide("slow");
					//Mostrar la otra wea
					$("#frmUsuarios").show("slow");
					//Focusear la wea
					$("#txtNombreUsuario").focus();


				} else {
					alert("Usuario o Clave incorrecta(s)")
					}
			},
			error: function(xhr,ajaxOptions,thrownError){

			}
		});
	} 

	var buscarUsuario = function(){
		var usuario = $("#txtNombreUsuario").val();
		var parametros = "opc=buscarUsuario"+
						 "&usuario="+usuario+
						 "&aleatorio="+Math.random();
		if (usuario != "") {
			$.ajax({
			cache:false,
			type: "POST",
			dataType:"json",
			url: "php/buscarusuario.php",
			data: parametros,
			success: function(response){
				if (response.respuesta){
					$("#txtNombre").val(response.nombre);
					$("#txtClaveUsuario").val(response.clave);
					}else{
						$("#txtNombre").focus();
					}
				
			},	
			error: function(xhr,ajaxOptions,thrownError){

			}
		});
	} 
		}
	}
	var teclaNombreUsuario = function(tecla){
		if (tecla.which == 13) { //Enter
			buscarUsuario();
		}
	}

	var Guardar = function(){
		var usuario = $("#txtNombreUsuario").val();
		var nombre = $("#txtNombre").val();
		var clave = $("#txtClaveUsuario").val();
		var parametros = "opc=guardarusuario"+
						 "&usuario="+usuario+
						 "&clave="+clave+
						 "&nombre="+nombre+
						 "&aleatorio="+Math.random();

		if (usuario != "" && nombre != "" && clave != "") {
			$.ajax({
			cache:false,
			type: "POST",
			dataType:"json",
			url: "php/guardarusuario.php",
			data: parametros,
			success: function(response){
				if (response.respuesta == true){
					alert("Guardado correctamente");
					$("#frmUsuarios > input").val("");
				}else{
					alert("Ocurrio un error, se jodio todo");
				}
				
			},	
			error: function(xhr,ajaxOptions,thrownError){

			}
		});
		}else{
			alert("Llene todos los campos");
		}
	}

	var Borrar = function(){
		var usuario = $("#txtNombreUsuario").val;
		var nombre = $("#txtNombre").val;
		var pregunta = prompt("Esta seguro de querer borrar a: "+nombre+"/ (si/no)", "no");

		if (person != null) {
		    document.getElementById("demo").innerHTML =
		    "Hello " + person + "! How are you today?";
		}
	}

	$("#btnAceptar").on("click",Aceptar);
	$("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
	$("#btnGuardar").on("click",Guardar);
	$("#btnBorrar").on("click",Borrar)

}

$(document).ready(inicioApp);