<template>
    <div class="mainbar">
        <div class="container p-5">
            <form @submit.prevent="submitForm">
                <div class="row">
                    <h2><b>Basic</b></h2>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>First Name</label>
                        <input v-model="first_name" type="text" class="form-control" maxlength="50" required><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Middle Name</label>
                        <input v-model="middle_name" type="text" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Last Name</label>
                        <input v-model="last_name" type="text" class="form-control" maxlength="50" required><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Date Of Birth ( BS )</label>
                        <input v-model="dob_bs" type="date" class="form-control" maxlength="50" required><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Date Of Birth ( AD )</label>
                        <input v-model="dob_ad" type="date" class="form-control" maxlength="50" required><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Citizenship No</label>
                            <input v-model="citizen_no" type="text" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Email</label>
                            <input v-model="email" type="email" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h2><b>Family</b></h2>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Father Name</label>
                        <input v-model="father_name" type="text" class="form-control" maxlength="50" required><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Mother Name</label>
                        <input v-model="mother_name" type="text" class="form-control" maxlength="50" required><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Marital Status</label>
                            <select v-model="martial_status" class="form-control">
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="widowed">Widowed</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Husband / Wife Name</label>
                        <input v-model="huswif_name" type="text" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Job</label>
                        <input v-model="job" type="text" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h2><b>Permanent Address</b></h2>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Province</label>
                        <input v-model="permanent_province" type="text" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Ward No</label>
                        <input v-model="permanent_ward_no" type="text" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Village / Tole Name</label>
                        <input v-model="permanent_viltol" type="text" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>House No</label>
                        <input v-model="permanent_house_no" type="text" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Contact No</label>
                        <input v-model="permanent_contact_no" type="number" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h2><b>Temporary Address</b></h2>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Province</label>
                        <input v-model="temporary_province" type="text" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Ward No</label>
                        <input v-model="temporary_ward_no" type="text" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Village / Tole Name</label>
                        <input v-model="temporary_viltol" type="text" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>House No</label>
                        <input v-model="temporary_house_no" type="text" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Contact No</label>
                        <input v-model="temporary_contact_no" type="number" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h2><b>Income</b></h2>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Annual Income</label>
                        <input v-model="annual_income" type="number" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Annual Family Income</label>
                        <input v-model="annual_family_income" type="number" class="form-control" maxlength="50"><br>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <input type="submit" class="btn btn-primary" value="Create">&nbsp;
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
    <script>
    import axios from 'axios'
    const url = 'http://127.0.0.1:8000/api/auth/kyc/'
    export default{
        data(){
            return{
            first_name: '',
            middle_name: '',
            last_name: '',
            dob_bs: '',
            dob_ad: '',
            citizen_no: '',
            email: '',
            father_name: '',
            mother_name: '',
            martial_status: '',
            huswif_name: '',
            job: '',
            permanent_province: '',
            permanent_ward_no: '',
            permanent_viltol: '',
            permanent_house_no: '',
            permanent_contact_no: '',
            temporary_province: '',
            temporary_ward_no: '',
            temporary_viltol: '',
            temporary_house_no: '',
            temporary_contact_no: '',
            annual_income: '',
            annual_family_income: '',
            }
        },
        methods:{
            submitForm(){
                const accessToken = localStorage.getItem('access_token');
                const formData = {
                    'first_name': this.first_name,
                    'middle_name': this.middle_name,
                    'last_name': this.last_name,
                    'dob_bs': this.dob_bs,
                    'dob_ad': this.dob_ad,
                    'citizen_no': this.citizen_no,
                    'email': this.email,
                    'father_name': this.father_name,
                    'mother_name': this.mother_name,
                    'martial_status': this.martial_status,
                    'huswif_name': this.huswif_name,
                    'job': this.job,
                    'permanent_province': this.permanent_province,
                    'permanent_ward_no': this.permanent_ward_no,
                    'permanent_viltol': this.permanent_viltol,
                    'permanent_house_no': this.permanent_house_no,
                    'permanent_contact_no': this.permanent_contact_no,
                    'temporary_province': this.temporary_province,
                    'temporary_ward_no': this.temporary_ward_no,
                    'temporary_viltol': this.temporary_viltol,
                    'temporary_house_no': this.temporary_house_no,
                    'temporary_contact_no': this.temporary_contact_no,
                    'annual_income': this.annual_income,
                    'annual_family_income': this.annual_family_income,
                };
                axios.post(url + 'store', formData, {
                    headers: {
                    'Authorization': 'Bearer ' + accessToken,
                    },
                }).then(response =>{
                    console.log(response)
                    if(response.data.code == 200)
                    {
                        const message = response.data.message;
                        alert(message)
                    }
                    else
                    {
                        const message = response.data.message;
                        alert(message)
                    }
                }).catch(error =>{
                    console.log(error)
                })
            }
        }
    }
    </script>
    
    <style scoped>
    .mainbar{
        height:100%;
        width:100%;
        background-color: white;
        color:black;
    }
    </style>