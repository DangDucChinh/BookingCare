import handbookService from '../services/handbookService';

let handleCreate_New_Handbook = async (req, res) => {
    try {

        let clinic = await handbookService.createNew_Handbook(req.body);
        return res.status(200).json(clinic);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            message: 'Lỗi từ server !'
        })
    }
}



let handleGetClinic = async (req, res) => {
    let id = req.query.id; // ALL , ID; /req.query dunfg cho get , req.body dung cho post va phai co bodyparser ra urlencoded hoac json
    // req.params la lay truc tiep thanh phan tren duong dan tham so
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            message: 'Có lỗi ko có id được truyền từ frontend vào server , được viết trên uesrController',
            clinics: []
        });
    }

    let clinics = await clinicService.getAllClinics(id);  

    return res.status(200).json({
        errCode: 0,
        message: 'no no no ',
        clinics: clinics
    });
}

let handleGetDetailClinicById = async(req, res) => {
    try {         
        let Clinic = await clinicService.getDetailClinicById(req.query.id);
        // let Clinic = await clinicService.getDetailClinicById(req.query.id, req.query.location);
        // nhận hai tham số là id special và location để có thể tiến hành lọc 

        return res.status(200).json(Clinic);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            message: 'Đây à '
        })
    }
};

let handleUpdate_Clinic_By_id = async(req, res)=>{
    let errCodeMess = await clinicService.updateClinic_By_Id_Service(req.body);
    return res.status(200).json({
        message : errCodeMess.message, 
        errCode : errCodeMess.errCode
    });
};

let handleGetAllClinics = async(req, res)=>{
    try {
        let Clinic = await ClinicService.getAllClinics(); 
        return res.status(200).json(Clinic);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            message: 'Lỗi từ server !'
        })
    }
};

let handleDelete_Clinic_By_id = async (req, res)=>{
    let errCodeMess = await clinicService.deleteClinic_By_Id_Service(req.params.id); 
    return res.status(200).json({
        errCode : errCodeMess.errCode,
        message : errCodeMess.message
    });
}

// handleGetName_Chuyenkhoa_by_id
// new  



let handleGetAll_Handbook = async (req, res) => {
    let id = req.query.id; 
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            message: 'Có lỗi ko có id được truyền từ frontend vào server , được viết trên hndbookcontroller',
            data: []
        });
    }
    let handbooks = await handbookService.get_All_Handbook(id);
    return res.status(200).json({
        errCode: 0,
        message: 'thanh cong lay duoc all hanbooks ',
        data: handbooks
    });
}



module.exports = {
    // handleCreateNewClinic: handleCreateNewClinic,
    // handleGetClinic: handleGetClinic , // có thể lấy by id hoặc mặc định là lấy tất cả 
    // handleGetDetailClinicById : handleGetDetailClinicById , 
    // handleUpdate_Clinic_By_id :     handleUpdate_Clinic_By_id , 
    // handleDelete_Clinic_By_id : handleDelete_Clinic_By_id , 
    handleCreate_New_Handbook : handleCreate_New_Handbook , 
    handleGetAll_Handbook : handleGetAll_Handbook
}

// 