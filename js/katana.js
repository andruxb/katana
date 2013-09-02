var katana ={
extend:function(e, o){
		if (typeof e == "string")
		return document.getElementById(e);
		for (var name in o){
		e[name] = o[name];

		}
		return e;
		},
obt:function(e){
	if (typeof e =="string")
		return katana.extend(document.getElementById(e),katana);
	else{
			return katana.extend(e ,katana);
		}
		},
esc: function(txt){
		return this.innerHTML= txt; 

		},
crear:function(e ,opc){
		if (opc != undefined)
			{
			var ele = katana.extend(document.createElement(e),katana);
			for (var i in opc){
				ele.setAttribute(i,opc[i]);
			}
			return ele;
			}
		else
			{
			return katana.extend(document.createElement(e),katana);
			}
		},
metele:function(e){
		return this.appendChild(e);


		},
error:function(e)
		{
		if (confirm(e)){

			return e;
		}
		else{

			return false;
		}


		},
obliga:function(){

		this.onblur= function(){
			for (var i in opc){
				switch(i){
					case "vacio":
						if (this.value== "")
							alert("Ta vacio");
					break;
					case "num":
						var patern =/([0-9])/;
						if (this.value.match(patern))
							alert("No seas perejil");


					case "max":
					var c = this.value;
						if (c.length > opc[i])
							katana.error("Se ha excedido los caracteres");
					break;
					case "correo":
					var patern =/([@])/;
						if (this.value.match(patern))
							return true;
						else
						{
							alert("Usted no coloco un email válido");
						}
						//tarea validar si existe @
					break;
					default:
					break;
					}
				this.focus();

					}
			
			}

				
		},
		css: function(opc){
			for(var name in opc)
			{
				eval("this.style."+name+" = opc[name]");

			}

		}

}




window.$ =	katana;
