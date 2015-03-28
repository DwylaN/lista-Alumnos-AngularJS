function alumnosController($scope) {
    // Alumnos existentes
	$scope.alumnos = [
		{ nombre: "Cesar" , telefono:"552444" , curso: "MongoDB" },
        { nombre: "Adrian" , telefono:"42342432" , curso: "NodeJS" }
	];
    
    // Guardar nuevos alumnos
    $scope.save=function(){
        $scope.alumnos.push({
            nombre:$scope.nuevoAlumno.nombre,
            curso:$scope.nuevoAlumno.curso,
            telefono:$scope.nuevoAlumno.telefono        
        })
        
        // Se oculta el form y mostramos el button "nuevo alumno"
        $scope.formVisibility=false;
        $scope.nuevoAlumno.nombre='';
        $scope.nuevoAlumno.curso='';
        $scope.nuevoAlumno.telefono='';
    }
    
    // Al inicio ocultamos el form y mostramos el button "nuevo alumno"
    $scope.formVisibility=false;
    //Mostrar u ocultar formulario
    $scope.showForm=function(){
        $scope.formVisibility=true;
    }
}