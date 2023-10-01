/*Diseña una clase "ProyectoInvestigación" con propiedades como "título", "investigadores" y "fecha de inicio". Implementa funciones
que permitan agregar, editar y eliminar proyectos de investigación en un registro. Además, crea una función que muestre los proyectos
en los que participa un investigador específico. */

class ProyectoInvestigación{
    ProyectoInvestigación(titulo,investigadores = [],fechaDeInicio){
        let _titulo=titulo;
        let _investigadores=investigadores;
        let _fechaDeInicio=fechaDeInicio;

        this.getTitulo = () => this._titulo;
        this.getInvestigadores = () => this._investigadores;
        this.getFechaDeInicio = () => this._fechaDeInicio;

        this.setTitulo = function (titulo){
            _titulo=titulo;
        };

        this.setInvestigadores = function (investigadores){
            _investigadores=investigadores
        };

        this.anyadirInvestigador = function (investigador){
           if(_investigadores.indexOf(investigador) == -1);
           _investigadores.push(investigador);
        }

        this.eliminarInvestigador = function (investigador) {
            let pos = _investigadores.indexOf(investigador);
            if (pos != -1);
            _investigadores.splice(pos,1);
        };
    }
}

class CentroInvestigacion{
    CentroInvestigacion(){
        let proyectosInvestigacion = [];

        this.agregarProyectoInvestigacion = function(titulo,investigadores,fechaDeInicio){
            let existente = false;
            for(let i =0;i<proyectosInvestigacion.length && !existente;i++){
                if(proyectosInvestigacion(i).getTitulo==titulo){
                    existente=true;
                }
            }
            if(!existente){
                proyectosInvestigacion.push(new ProyectoInvestigación(titulo,investigadores,fechaDeInicio));
            }
        }

        this.editarTituloProyectoInvestigacion = function(tituloActual,nuevoTitulo){
            let editado = false;
            for(let i = 0;i<proyectosInvestigacion.length && !editado;i++){
                if(proyectosInvestigacion(i).getTitulo==tituloActual){
                    proyectosInvestigacion(i).setTitulo(nuevoTitulo);
                    editado=true;
                }
            }
        }

        this.anyadirInvestigadorProyectoInvestigacion = function(titulo,investigador){
            let editado = false;
            for(let i = 0;i<proyectosInvestigacion.length && !editado;i++){
                if(proyectosInvestigacion(i).getTitulo==titulo){
                    proyectosInvestigacion(i).anyadirInvestigador(investigador);
                    editado=true;
                }
            }
        }

        this.eliminarInvestigadorProyectoInvestigacion = function(titulo,investigador){
            let editado = false;
            for(let i = 0;i<proyectosInvestigacion.length && !editado;i++){
                if(proyectosInvestigacion(i).getTitulo==titulo){
                    proyectosInvestigacion(i).eliminarInvestigador(investigador);
                    editado=true;
                }
            }
        }

        this.cambiarInvestigadoresProyectoInvestigacion = function(titulo,investigadores){
            let editado = false;
            for(let i = 0;i<proyectosInvestigacion.length && !editado;i++){
                if(proyectosInvestigacion(i).getTitulo==titulo){
                    proyectosInvestigacion(i).setInvestigadores(investigadores);
                    editado=true;
                }
            }
        }

        this.eliminarProyectoInvestigacion = function(titulo){
            let pos=-1;
            for(let i = 0;i<proyectosInvestigacion.length || !editado;i++){
                if(proyectosInvestigacion(i).getTitulo==titulo){
                    pos = i;
                }
            }
            if(pos!=-1){
            proyectosInvestigacion.splice(pos,1);
            }
        }

        this.proyectosInvestigadorX = function(investigador){
            let proyectosX=[];
            for(let i = 0;i<proyectosInvestigacion.length;i++){
                for(let j = 0;j<proyectosInvestigacion(i)._investigadores.length;j++){
                    if(proyectosInvestigacion(i)._investigadores(j)==investigador){
                        proyectosX.push(proyectosInvestigacion(i));
                    }
                }
            }
        }

    };
}