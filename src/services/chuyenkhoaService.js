import db from '../models/index';


let createNewChuyenkhoa = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.nameChuyenkhoa || !data.contentChuyenkhoa || !data.imageChuyenkhoa_save_in_db) {
                console.log('missing parameter\n',data); 
                resolve({
                    errCode: 1,
                    message: 'Missing parameter for edit Clinic'
                });
            } else {
                console.log('Success 1'); 
                await db.Chuyenkhoa.create({
                    nameChuyenkhoa: data.nameChuyenkhoa,
                    contentChuyenkhoa: data.contentChuyenkhoa,
                    imageChuyenkhoa : data.imageChuyenkhoa_save_in_db
                });
                console.log('Success 2'); 
                resolve({
                    errCode: 0,
                    message: 'Save thành công Clinic new !',
                });
            }
        } catch (error) {
            console.log('Lỗi tại server Chuyen Khoa service !');
            reject(error);
        }
    });
};

let getName_Id_Chuyenkhoa_by_id = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if(inputId === 'ALL'){
                let data = await db.Chuyenkhoa.findAll({
                    attributes:['id','nameChuyenkhoa']
                });

                console.log(data);
                resolve({
                    errCode: 0,
                    message: 'Thành công load data all chuyen khoa!',
                    data: data
                });
            }else{
                resolve({
                    errCode: 1,
                    message: `Id is ${inputId}`,
                    data: []
                });
            }
        } catch (error) {
            console.log('Lỗi tại server Chuyen khoa get Chuyen khoa service !', error);
            reject(error);
        }
    });
}

let getAllChuyenkhoa = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctorsFromDb = await db.Chuyenkhoa.findAll({
                // where: {
                //     roleId: 'R2'
                // },
                attributes: {
                    exclude: ['imageChuyenkhoa']
                }
            });

            resolve({
                message: 'Get all chuyen khoa from database successfully!',
                errCode: 0,
                data: doctorsFromDb
            });


        } catch (error) {
            reject(error);
        }
    });
}



module.exports = {
    createNewChuyenkhoa: createNewChuyenkhoa,
    getName_Id_Chuyenkhoa_by_id : getName_Id_Chuyenkhoa_by_id  ,
    getAllChuyenkhoa  :getAllChuyenkhoa
}