import db from '../models/index';


let createNew_Handbook = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.nameHandbook || !data.nameHandbookEnglish || !data.contentHandbook_TEXT || !data.contentHandbookEnglish_TEXT || !data.contentHandbookEnglish_HTML || !data.contentHandbook_HTML) {

                resolve({
                    errCode: 1,
                    message: 'Missing parameter for edit Clinic'
                });
            } else {
                await db.Handbook.create({
                    avatar_base64_Save_in_DB: data.avatar_base64_Save_in_DB,
                    nameHandbook: data.nameHandbook,
                    nameHandbookEnglish: data.nameHandbookEnglish,

                    contentHandbook_TEXT: data.contentHandbook_TEXT,
                    contentHandbookEnglish_TEXT: data.contentHandbookEnglish_TEXT,

                    contentHandbook_HTML: data.contentHandbook_HTML,
                    contentHandbookEnglish_HTML: data.contentHandbookEnglish_HTML,
                    // khoa ngoại của handbook join về tìm chuyên khoa bằng khóa chính
                    keyToFindChuyenkhoa: data.keyToFindChuyenkhoa
                });


                resolve({
                    errCode: 0,
                    message: 'Save thành công Clinic new !',
                });
            }

        } catch (error) {
            console.log('Lỗi tại server HAndbook service !');
            reject(error);
        }
    });
};

let getClinic = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Clinic.findAll({
            });
            data = await db.Clinic.findAll({
            });

            resolve({
                errCode: 0,
                message: 'Thành công load data all specialties!',
                data: data
            });

        } catch (error) {
            console.log('Lỗi tại server Clinic service !', error);
            reject(error);
        }
    });
}
// Get name 


// return new Promise(async (resolve, reject) => {
//     try {
//         // if (!inputId && !location) {
//         if (!inputId) {
//             resolve({
//                 message: 'Missming query!',
//                 errCode: 1
//             });

//         } else {

//             let data = await db.Clinic.findOne({
//                 where: {
//                     id: inputId,
//                 },
//             });

//             if (data && data.image) {
//                 data.image = new Buffer(data.image, 'base64').toString('binary');
//             }
//             resolve({
//                 errCode: 0,
//                 message: 'Get getDetailClinicById và province id successfully!',
//                 data
//             });
//         }
//     } catch (error) {
//         console.log('Lỗi tại get detail Clinic !');
//         reject(error);
//     }
// });

let editClinicById = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.descriptionHTML || !data.descriptionMarkdown || !data.descriptionHTMLEnglish || !data.descriptionMarkdownEnglish || !data.nameEnglish || !data.imageBase64File) {
                resolve({
                    errCode: 1,
                    message: 'Missing parameter '
                });
            } else {
                await db.Clinic.update({
                    image: data.imageBase64File,
                    name: data.name,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown,
                    nameEnglish: data.nameEnglish,
                    descriptionHTMLEnglish: data.descriptionHTMLEnglish,
                    descriptionMarkdownEnglish: data.descriptionMarkdownEnglish
                }, {
                    where: {
                        id: data.selectedClinic.value
                    },
                    raw: false
                });

                resolve({
                    errCode: 0,
                    message: 'Save thành công Clinic new !',
                });
            }
        } catch (error) {
            console.log('Lỗi tại edit  Clinic !');
            reject(error);
        }
    });
}

let getAllClinics = (clinic_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let clinics = '';
            if (clinic_id === 'ALL') {
                clinics = await db.Clinic.findAll({
                    // attributes: {
                    //     exclude: ['password']
                    // }
                });
            } else if (clinic_id && clinic_id !== 'ALL') {
                clinics = await db.Clinic.findOne({
                    where: {
                        id: clinic_id
                    },
                    // attributes: {
                    //     exclude: ['password']
                    // }
                });
            }
            resolve(clinics);
        } catch (err) {
            reject(err);
        }
    });
}

let updateClinic_By_Id_Service = (newClinicFromObjReqBody) => {
    return new Promise(async (resolve, reject) => {
        try {
            let errCodeMess = {};
            if (!newClinicFromObjReqBody.id) {
                errCodeMess.errCode = 2;
                errCodeMess.message = 'Ko thay id cua clinic can update'
                resolve(errCodeMess);
            }

            let clinicGettedFromMySQL = await db.Clinic.findOne({
                where: {
                    id: newClinicFromObjReqBody.id
                },
                raw: true
            });

            if (!clinicGettedFromMySQL) {
                errCodeMess.errCode = 0;
                errCodeMess.message = `Ko the tim thay Clinic tu mysql mac du da nhan dc : ${newClinicFromObjReqBody.name}  truyen vao`;

                resolve(errCodeMess);
            } else {
                if (!newClinicFromObjReqBody.avatar_Save_in_DB) {
                    await db.Clinic.update(
                        {
                            name: newClinicFromObjReqBody.name,
                            nameEnglish: newClinicFromObjReqBody.nameEnglish,
                            descriptionHTML: newClinicFromObjReqBody.descriptionHTML,
                            address: newClinicFromObjReqBody.address,
                            addressEnglish: newClinicFromObjReqBody.addressEnglish,
                            descriptionHTMLEnglish: newClinicFromObjReqBody.descriptionHTMLEnglish,
                            descriptionMarkdown: newClinicFromObjReqBody.descriptionMarkdown,
                            descriptionMarkdownEnglish: newClinicFromObjReqBody.descriptionMarkdownEnglish,

                        },
                        { where: { id: newClinicFromObjReqBody.id } }
                    );
                } else {
                    await db.Clinic.update(
                        {
                            name: newClinicFromObjReqBody.name,
                            nameEnglish: newClinicFromObjReqBody.nameEnglish,
                            descriptionHTML: newClinicFromObjReqBody.descriptionHTML,
                            address: newClinicFromObjReqBody.address,
                            addressEnglish: newClinicFromObjReqBody.addressEnglish,
                            descriptionHTMLEnglish: newClinicFromObjReqBody.descriptionHTMLEnglish,
                            descriptionMarkdown: newClinicFromObjReqBody.descriptionMarkdown,
                            descriptionMarkdownEnglish: newClinicFromObjReqBody.descriptionMarkdownEnglish,
                            image: newClinicFromObjReqBody.avatar_Save_in_DB,
                        },
                        { where: { id: newClinicFromObjReqBody.id } }
                    );
                }

                errCodeMess.errCode = 0;
                errCodeMess.message = 'Thành công update Clinic này';

                resolve(errCodeMess);
            }
        } catch (error) {
            reject("Loi tai server , phan ClinicService , let updateClinicByAPI : ", error);
        }
    });
};

let deleteClinic_By_Id_Service = (clinicId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let errCodeMess = {};
            let clinicGettedFromDatabase = await db.Clinic.findOne({
                where: {
                    id: clinicId
                },
                raw: true
            });


            if (!clinicGettedFromDatabase) {
                errCodeMess.errCode = 0,
                    errCodeMess.message = `Ko tồn tại clinic id này ${clinicId} !!!!`;
            } else {

                await db.Clinic.destroy({
                    where: {
                        id: clinicId
                    }
                });

                errCodeMess.errCode = 0,
                    errCodeMess.message = 'Delete clinic succesfully!';
            }

            resolve(errCodeMess);
        } catch (err) {
            reject(err);
        }
    });
}

let get_All_Handbook = (clinic_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let clinics = '';
            if (clinic_id === 'ALL') {
                clinics = await db.Handbook.findAll({
                });
            } else if (clinic_id && clinic_id !== 'ALL') {
                clinics = await db.Handbook.findOne({
                    where: {
                        id: clinic_id
                    },
                });
            }
            resolve(clinics);
        } catch (err) {
            reject(err);
        }
    });
}


module.exports = {
    createNew_Handbook: createNew_Handbook,
    get_All_Handbook: get_All_Handbook
}