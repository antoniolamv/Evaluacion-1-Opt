/*Diseña una clase "ProyectoInvestigación" con propiedades como "título", "investigadores" y "fecha de inicio". Implementa funciones
que permitan agregar, editar y eliminar proyectos de investigación en un registro. Además, crea una función que muestre los proyectos
en los que participa un investigador específico. */

class ProyectoInvestigacion{
    constructor(titulo,investigadores = [],fechaDeInicio){
        let _titulo=titulo;
        let _investigadores=investigadores;
        let _fechaDeInicio=fechaDeInicio;

        this.getTitulo = () => _titulo;
        this.getInvestigadores = () => _investigadores;
        this.getFechaDeInicio = () => _fechaDeInicio;

        this.setTitulo = function (titulo){
            _titulo=titulo;
        };

        this.setInvestigadores = function (investigadores){
            _investigadores=investigadores
        };

        this.anyadirInvestigador = function (investigador){
           if(_investigadores.indexOf(investigador) == -1){
           _investigadores.push(investigador);
           }
        };

        this.eliminarInvestigador = function (investigador) {
            let pos = _investigadores.indexOf(investigador);
            if (pos != -1){
            _investigadores.splice(pos,1);
            }
        };
    }
}

class CentroInvestigacion{
    constructor(){
        let proyectosInvestigacion = [];

        this.agregarProyectoInvestigacion = function (titulo,investigadores,fechaDeInicio){
            let existente = false;
            if(proyectosInvestigacion.length>0){
                for(let i =0;i<proyectosInvestigacion.length && !existente;i++){
                    if(proyectosInvestigacion[i].getTitulo()==titulo){
                        existente=true;
                    };
                };
            };
            if(!existente){
                proyectosInvestigacion.push(new ProyectoInvestigacion(titulo,investigadores,fechaDeInicio));
            };

            /*Prueba*/
            for(let i=0;i<proyectosInvestigacion.length;i++){
                console.log(`Los proyectos de investigación existentes son: ${proyectosInvestigacion[i].getTitulo()}`);
            };
        };

        this.editarTituloProyectoInvestigacion = function (tituloActual,nuevoTitulo){

            /*Prueba*/
            for(let i=0;i<proyectosInvestigacion.length;i++){
                console.log(`Los proyectos de investigación actualmente son: ${proyectosInvestigacion[i].getTitulo()}`);
            };

            let editado = false;
            for(let i = 0;i<proyectosInvestigacion.length && !editado;i++){
                if(proyectosInvestigacion[i].getTitulo()==tituloActual){
                    proyectosInvestigacion[i].setTitulo(nuevoTitulo);
                    editado=true;
                };
            };

            /*Prueba*/
            for(let i=0;i<proyectosInvestigacion.length;i++){
                console.log(`Los proyectos de investigación luego de cambiar el titulo son: ${proyectosInvestigacion[i].getTitulo()}`);
            };
        };

        this.anyadirInvestigadorProyectoInvestigacion = function (titulo,investigador){
            let editado = false;
            for(let i = 0;i<proyectosInvestigacion.length && !editado;i++){
                if(proyectosInvestigacion[i].getTitulo()==titulo){
                    proyectosInvestigacion[i].anyadirInvestigador(investigador);
                    editado=true;

                    /*Prueba*/
                     for(let j=0;j<proyectosInvestigacion[i].getInvestigadores().length;j++){
                     console.log(`Los investigadores en el proyecto ${proyectosInvestigacion[i].getTitulo()} existentes son: ${proyectosInvestigacion[i].getInvestigadores()[j]}`);
                     };
                };
            };
        };

        this.eliminarInvestigadorProyectoInvestigacion = function (titulo,investigador){
            let editado = false;
            for(let i = 0;i<proyectosInvestigacion.length && !editado;i++){
                if(proyectosInvestigacion[i].getTitulo()==titulo){
                    proyectosInvestigacion[i].eliminarInvestigador(investigador);
                    editado=true;

                    /*Prueba*/
                    for(let j=0;j<proyectosInvestigacion[i].getInvestigadores().length;j++){
                        console.log(`Los investigadores en el proyecto ${proyectosInvestigacion[i].getTitulo()} existentes son: ${proyectosInvestigacion[i].getInvestigadores()[j]}`);
                    };
                };
            };
        };

        this.cambiarInvestigadoresProyectoInvestigacion = function (titulo,investigadores){
            let editado = false;
            for(let i = 0;i<proyectosInvestigacion.length && !editado;i++){
                if(proyectosInvestigacion[i].getTitulo()==titulo){
                    proyectosInvestigacion[i].setInvestigadores(investigadores);
                    editado=true;

                    /*Prueba*/
                    for(let j=0;j<proyectosInvestigacion[i].getInvestigadores().length;j++){
                        console.log(`Los investigadores en el proyecto ${proyectosInvestigacion[i].getTitulo()} existentes son: ${proyectosInvestigacion[i].getInvestigadores()[j]}`);
                    };
                };
            };
        };

        this.eliminarProyectoInvestigacion = function (titulo){
            let pos=-1;
            for(let i = 0;i<proyectosInvestigacion.length && pos==-1;i++){
                if(proyectosInvestigacion[i].getTitulo()==titulo){
                    pos = i;
                };
            };
            if(pos!=-1){
            proyectosInvestigacion.splice(pos,1);
            };

            /*Prueba*/
            for(let i=0;i<proyectosInvestigacion.length;i++){
                console.log(`Los proyectos de investigación existentes son: ${proyectosInvestigacion[i].getTitulo()}`);
            };
        };

        this.proyectosInvestigadorX = function (investigador){
            let proyectosX=[];
            for(let i = 0;i<proyectosInvestigacion.length;i++){
                if(proyectosInvestigacion[i].getInvestigadores().includes(investigador)){
                    proyectosX.push(proyectosInvestigacion[i]);
                }
            };

            /*Prueba*/

            for(let i=0;i<proyectosX.length;i++){
                console.log(`Los proyectos de investigación donde se encuentra el/la ${investigador} son: ${proyectosX[i].getTitulo()}`);
            };
        };

    }
}

const centro1 = new CentroInvestigacion();
centro1.agregarProyectoInvestigacion("Seres Vivos", ["Dr. Gonzalo","Dra. Jon"],"12/03/2020");
centro1.agregarProyectoInvestigacion("Vacuna",["Dr. Sanchez","Dr. Riors","Dr. Sanz"],"20/11/2017");
centro1.agregarProyectoInvestigacion("Bacterias",["Dra. Claro","Dra. Jon"],"30/01/2005");
centro1.agregarProyectoInvestigacion("Bacterias",["Dra. 008","Dr. 007"],"18/01/2007");
centro1.proyectosInvestigadorX("Dra. Jon");
centro1.anyadirInvestigadorProyectoInvestigacion("Seres Vivos","Dr. Lebroc");
centro1.cambiarInvestigadoresProyectoInvestigacion("Vacuna",["Dra. Lour"]);
centro1.editarTituloProyectoInvestigacion("Bacterias","Pluricelularidad");
centro1.eliminarInvestigadorProyectoInvestigacion("Pluricelularidad","Dra. Claro");
centro1.eliminarProyectoInvestigacion("Vacuna");