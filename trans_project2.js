// Vehicle class
class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  // Car class
  class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  // Plane class
  class Plane extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  // Employee class
  class Employee {
    constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  // Driver class
  class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  // Pilot class
  class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  // Reservation class
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationID = reservationID;
    }
  }
  
  // Create objects for three cars and two planes
  const car1 = new Car('Morcdees', 'Manufacturer 1', 1, 'gas');
  const car2 = new Car('Hamar', 'Manufacturer 2', 2, 'electric');
  const car3 = new Car('Hilux', 'Manufacturer 3', 3, 'gas');
  
  const plane1 = new Plane('Plane 1', 'Manufacturer 4', 4, 'private');
  const plane2 = new Plane('Plane 2', 'Manufacturer 5', 5, 'public');
  
  // Create reservations array
  const reservations = [];
  
  // Function to assign vehicle to employee
  function assignVehicleToEmployee(employeeId, vehicleId) {
    const employee = employees.find(emp => emp.id === employeeId);
    const vehicle = vehicles.find(v => v.id === vehicleId);
  
    if (employee instanceof Pilot && vehicle instanceof Car) {
      console.log('Pilots cannot be assigned cars.');
    } else if (employee instanceof Driver && vehicle instanceof Plane) {
      console.log('Drivers cannot be assigned planes.');
    } else {
      const reservation = new Reservation(new Date(), employeeId, vehicleId, reservations.length + 1);
      reservations.push(reservation);
      console.log('Reservation created:', reservation);
    }
  }
  
  // Create employees
  const employee1 = new Driver('Employee 1', 1, '1990-01-01', 'DL1234');
  const employee2 = new Pilot('Employee 2', 2, '1995-05-05', 'PL5678');
  
  // Store employees in an array
  const employees = [employee1, employee2];
  
  // Store vehicles in an array
  const vehicles = [car1, car2, car3, plane1, plane2];
  
  // Assign vehicles to employees
  assignVehicleToEmployee(1, 1); 
  assignVehicleToEmployee(2, 4); 
  assignVehicleToEmployee(1, 4); 
  
  // Print reservations using map function
  const reservationContents = reservations.map(reservation => ({
    reservationID: reservation.reservationID,
    employeeName: employees.find(emp => emp.id === reservation.employeeId).name,
    vehicleName: vehicles.find(v => v.id === reservation.vehicleId).name
  }));
  
  console.log('Reservations:');
  console.log(reservationContents);