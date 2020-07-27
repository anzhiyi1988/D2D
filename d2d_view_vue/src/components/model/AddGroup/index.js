import Axios from "axios";

export default {
    name: "AddGroup",
    props: {
        visible: {
            type: Boolean,
            require: true
        }
    },
    data() {
        return {
            loading: false,
            form: this.$form.createForm(this, { name: "logic_group_form" }),
            errorMsg: "",
            validateStatus: "success"
        };
    },

    methods: {
        handleSubmit() {
            let values = this.form.getFieldsValue();
            let name = values.logic_group_name;
            if (this.validateLogicName(name)) {
                this.loading = true;
                let data = { name: name };
                let url = this.MYURL.model.AddGroup;
                Axios.post(url, data)
                    .then(res => {
                        console.log("Group added successfully ：", res);
                        this.reloadFather();
                    })
                    .catch(e => {
                        console.log(
                            "Failed to submit, please check url ：" + url,
                            e
                        );
                    });

                setTimeout(() => {
                    this.loading = false;
                    this.$emit("listenVisible", false);
                }, 3000);
            }
        },
        handleCancel() {
            this.$emit("listenVisible", false);
        },
        validateLogicName(name) {
            if (typeof name == "undefined") {
                this.validateStatus = "error";
                this.errorMsg = "No! No! No! Cannot be empty.";
                return false;
            }

            // TODO ajax判断重复
            if (name === "中央") {
                this.validateStatus = "error";
                this.errorMsg =
                    "Repeat the name and change it for a new one, 3Q!";

                return false;
            }
            return true;
        },

        reloadFather() {
            console.log("i will tell upper to reload data.");
            this.$emit("listenGroupChange1");
        }
    }
};
