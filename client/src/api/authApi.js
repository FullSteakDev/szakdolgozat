import axios from 'axios'
axios.defaults.withCredentials = true


// customer
export async function onRegistrationCustomer(registrationDataCustomer) {
    return await axios.post('/api/register-customers', registrationDataCustomer)
}

export async function onLoginCustomer(LoginDataCustomer) {
    return await axios.post('/api/login-customers', LoginDataCustomer)
}

export async function fetchProtectedCustomer() {
    return await axios.get('/api/protected-customers')
}

export async function fetchProducts() {
    return await axios.get('/api/products')
}

export async function fetchProductsCustomer() {
    return await axios.get('/api/products-customer')
}

export async function reserveProductsCustomer(name, description, price, material) {
    return await axios.post(`/api/reserve-products/${name}/${description}/${price}/${material}`)
}

export async function removeProduct(Id) {
    return await axios.delete(`/api/remove-product/${Id}`)
}

export async function fetchTravels() {
    return await axios.get('/api/travels')
}

export async function fetchTravelsCustomer() {
    return await axios.get('/api/travels-customer')
}

export async function reserveTravelsCustomer(name, departure, destination, date, price, length) {
    return await axios.post(`/api/reserve-travels/${name}/${departure}/${destination}/${date}/${price}/${length}`)
}

export async function removeTravel(Id) {
    return await axios.delete(`/api/remove-travel/${Id}`)
}


// employee
export async function onLoginEmployee(LoginDataEmployee) {
    return await axios.post('/api/login-employees', LoginDataEmployee)
}

export async function fetchProtectedEmployee() {
    return await axios.get('/api/protected-employees')
}

export async function fetchProjectsEmployee() {
    return await axios.get('/api/projects-employee')
}

export async function editProgressEmployee(ProgressEmployee) {
    return await axios.put('/api/progress-employee', ProgressEmployee);
}
  

// management
export async function onLoginManager(LoginDataManager) {
    return await axios.post('/api/login-managers', LoginDataManager)
}

export async function fetchProtectedManager() {
    return await axios.get('/api/protected-managers')
}

export async function fetchEmployeestoManagement() {
    return await axios.get('/api/get-employees')
}

export async function promoteEmployee(PromoteEmployee) {
    return await axios.put('/api/promote-employee', PromoteEmployee)
}

export async function fireEmployee(employeeId) {
    return await axios.delete(`/api/fire-employee/${employeeId}`)
}

export async function fetchTools() {
    return await axios.get('/api/tools')
}

export async function fetchEquipments() {
    return await axios.get('/api/equipments')
}

export async function fetchVehicles() {
    return await axios.get('/api/vehicles')
}

export async function editAmortisation(EditAmortisation) {
    return await axios.put('/api/edit-amortisation', EditAmortisation)
}

export async function deleteProperties(Id) {
    return await axios.delete(`/api/delete-properties/${Id}`)
}

export async function fetchProjectstoManagement() {
    return await axios.get('/api/get-projects')
}

export async function createProjectstoEmployee(CreateEmployeeProjects) {
    return await axios.post('/api/create-projects', CreateEmployeeProjects)
}

export async function editProjects(EditProjects) {
    return await axios.put('/api/edit-projects', EditProjects)
}

export async function deleteProjectsMan(projectId) {
    return await axios.delete(`/api/delete-projects/${projectId}`)
}


// all
export async function onLogout() {
    return await axios.get('/api/logout')
}