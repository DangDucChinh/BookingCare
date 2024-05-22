import chuyenkhoaService from '../services/chuyenkhoaService';

let handleCreateNewChuyenkhoa = async (req, res) => {
    try {
        let chuyenkhoa = await chuyenkhoaService.createNewChuyenkhoa(req.body);
        return res.status(200).json(chuyenkhoa);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            message: 'Lỗi từ server !'
        })
    }
}


let handle_getName_Id_Chuyenkhoa_by_id = async (req, res) => {
    let id = req.query.id; // ALL , ID; /req.query dunfg cho get , req.body dung cho post va phai co bodyparser ra urlencoded hoac json
    // req.params la lay truc tiep thanh phan tren duong dan tham so
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            message: 'Có lỗi ko có id được truyền từ frontend vào server , được viết trên uesrController',
            chuyenkhoas: []
        });
    }
    let chuyenkhoas = await chuyenkhoaService.getName_Id_Chuyenkhoa_by_id(id);
    return res.status(200).json(chuyenkhoas);
}


let handle_getAllChuyenkhoa = async(req, res)=>{
    try {
        let dataFromDB =  await chuyenkhoaService.getAllChuyenkhoa();
        return res.status(200).json(dataFromDB);

    } catch (error) {
        console.log(error);
        return res.status(200).json({
            message : 'Lỗi tại server , getAllChuyenkhoa',
            errCode : -1
        });
    }
}


module.exports = {
    handleCreateNewChuyenkhoa: handleCreateNewChuyenkhoa,
    handle_getName_Id_Chuyenkhoa_by_id: handle_getName_Id_Chuyenkhoa_by_id , 
    handle_getAllChuyenkhoa  :handle_getAllChuyenkhoa
}

// 