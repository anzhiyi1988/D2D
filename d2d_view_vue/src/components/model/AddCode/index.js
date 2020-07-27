import pinyin from "../../../global/pinyin.js";
import Axios from "axios";

export default {
    name: "AddCode",
    data() {
        return {
            form: this.$form.createForm(this, { name: "code_form" }),
            code: {
                groupId: "",
                name: "",
                tableName: "",
                valid: {
                    status: "success",
                    msg: ""
                },
                rows: [
                    {
                        gid: "",
                        dmz: "",
                        dmmc: "",
                        dmsfyx: "",
                        dmms: "",
                        valid: {
                            status: "success",
                            msg: ""
                        }
                    }
                ]
            }
        };
    },
    created() {
        this.getParams();
    },

    methods: {
        getParams() {
            this.code.groupId = this.$route.query.gId;
        },
        handleSubmit() {
            console.log(this.code);
            if (this.validate()) {
                let url = this.MYURL.model.AddCode;
                Axios.post(url, this.code)
                    .then(res => {
                        console.log("Code added successfully ：", res);
                        // TODO 这里应该有一个全局通知，让代码面板刷新数据。
                        window.close();
                    })
                    .catch(e => {
                        console.log(
                            "Failed to submit, please check url ：" + url,
                            e
                        );
                    });
            }
        },
        addRow(row) {
            let index = this.code.rows.indexOf(row);
            let _row = {
                gid: "",
                dmz: "",
                dmmc: "",
                dmsfyx: "",
                dmms: "",
                valid: {
                    status: "success",
                    msg: ""
                }
            };

            if (index < 0) {
                this.code.rows.push(_row);
            } else {
                this.code.rows.splice(index + 1, 0, _row);
            }
        },
        removeRow(row) {
            this.code.rows.splice(this.code.rows.indexOf(row), 1);
        },
        change(p) {
            this.code.tableName = "t_dm_" + pinyin.chineseToPinYin(p);
        },
        validate() {
            let flag = true;

            this.code.valid.status = "success";
            this.code.valid.msg = "";
            if (this.code.name.length === 0) {
                this.code.valid.status = "error";
                this.code.valid.msg = "No! No! No! Cannot be empty.";
                flag = false;
            }

            this.code.rows.forEach(row => {
                row.valid.status = "success";
                row.valid.msg = "";
                if (row.dmz.length < 1) {
                    flag = false;
                    row.valid.status = "error";
                    row.valid.msg = "Some value is null , check check !!";
                }
                if (row.dmmc.length < 1) {
                    flag = false;
                    row.valid.status = "error";
                    row.valid.msg = "Some value is null , check check !!";
                }
                if (row.dmsfyx.length < 1) {
                    flag = false;
                    row.valid.status = "error";
                    row.valid.msg = "Some value is null , check check !!";
                }
            });
            return flag;
        }
    }
};
