import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
import patientController from "../controllers/patientController";
import specialtyController from "../controllers/specialtyController";

import clinicController from "../controllers/clinicController";

import chuyenkhoaController from "../controllers/chuyenkhoaController";
import handbookController from "../controllers/handbookController";

import authenticateUser from "../middleware/is-auth";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);

    router.get('/api/login', userController.getLogin); 
    router.post('/api/login', userController.handleLogin);

    router.post('/api/logout', userController.handleLogout);

    router.post('/post-user',authenticateUser ,homeController.postUser);

    router.get('/api/get-all-user' ,  userController.handleGetAllUser); 

    router.post('/api/create-new-user', userController.handleCreateNewUser); 

    router.delete('/api/delete-user/:id', userController.handleDelete);
    router.put('/api/update-user/:id', userController.handleUpdate);

    /// api
    router.get('/api/get-all-codes', userController.handleGetAllCodes);


    // api doctor at home-page 
    router.get('/api/top-doctor-home', doctorController.handleGetTopDoctorHome);
    router.get('/api/get-all-doctor', doctorController.handleGetAllDoctor);
    router.post('/api/save-infor-doctor', doctorController.handleSaveInforDoctor);
    router.get('/api/get-detail-doctor-by-id', doctorController.handleGetDetailDoctorById);
    router.post('/api/bulk-create-schedule', doctorController.handleBulkCreateSchedule);

    router.get('/api/get-schedule-doctor-by-date', doctorController.handleGetScheduleDoctorByDate);
    router.get('/api/delete-schedule-doctor-by-date', doctorController.handleDeleteScheduleDoctorByDate);

    router.get('/api/get-extra-infor-doctor-by-id', doctorController.handleGetExtraInforDoctorById);
    router.get('/api/get-profile-doctor-by-id', doctorController.handleGetProfileDoctorById);

    // patient controller : 
    router.post('/api/patient-book-appointment', patientController.handlePostBookAppointment);
    router.post('/api/verify-book-appointment', patientController.handlePostVerifyBookAppointment);

    // specialty controller : 
    router.post('/api/create-new-specialty', specialtyController.handleCreateNewSpecialty);
    router.get('/api/get-specialty', specialtyController.handleGetSpecialty);
    router.post('/api/edit-specialty-by-id', specialtyController.handleEditSpecialtyById);
    router.get('/api/get-detail-specialty-by-id', specialtyController.handleGetDetailSpecialtyById);

    // clinic controller
    router.post('/api/create-new-clinic', clinicController.handleCreateNewClinic);
    router.get('/api/get-clinic', clinicController.handleGetClinic);

    router.put('/api/update-clinic-by-id/:id', clinicController.handleUpdate_Clinic_By_id);
    router.delete('/api/delete-clinic-by-id/:id', clinicController.handleDelete_Clinic_By_id);
    router.get('/api/get-detail-clinic-by-id', clinicController.handleGetDetailClinicById);
    router.get('/api/top-medical-facility-home', clinicController.handle_Get_Medical_Facility_Home);



    // chuyên khoa
    router.post('/api/create-new-chuyen-khoa',  chuyenkhoaController.handleCreateNewChuyenkhoa);
    router.get('/api/get-name-id-chuyen-khoa-by-id', chuyenkhoaController.handle_getName_Id_Chuyenkhoa_by_id);

    // handbook 
    router.post('/api/create-new-handbook',  handbookController.handleCreate_New_Handbook); 
    router.get('/api/get-handbook-by-id', handbookController.handleGetAll_Handbook);

    

    return app.use("/", router);
}

module.exports = initWebRoutes;

