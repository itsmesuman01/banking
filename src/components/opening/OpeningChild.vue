<template>
    <div class="mainbar p-5">
      <div v-if="kycEnable">
        <input type="text" v-model="kycnumber" @input="delayedKycNumberChanged" class="form-control mb-5" placeholder="Please Enter KYC Number">
      </div>
      <div v-else>
        <form @submit.prevent="submitForm">
                <div class="row">
                    <h2><b>Basic</b></h2>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>First Name</label>
                        <input v-model="first_name" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Middle Name</label>
                        <input v-model="middle_name" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Last Name</label>
                        <input v-model="last_name" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Date Of Birth ( BS )</label>
                        <input v-model="dob_bs" type="date" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Date Of Birth ( AD )</label>
                        <input v-model="dob_ad" type="date" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Citizenship No</label>
                            <input v-model="citizen_no" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Email</label>
                            <input v-model="email" type="email" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h2><b>Family</b></h2>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Father Name</label>
                        <input v-model="father_name" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Mother Name</label>
                        <input v-model="mother_name" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Marital Status</label>
                            <input v-model="martial_status" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Husband / Wife Name</label>
                        <input v-model="huswif_name" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Job</label>
                        <input v-model="job" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h2><b>Permanent Address</b></h2>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Province</label>
                        <input v-model="permanent_province" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Ward No</label>
                        <input v-model="permanent_ward_no" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Village / Tole Name</label>
                        <input v-model="permanent_viltol" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>House No</label>
                        <input v-model="permanent_house_no" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Contact No</label>
                        <input v-model="permanent_contact_no" type="number" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h2><b>Temporary Address</b></h2>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Province</label>
                        <input v-model="temporary_province" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Ward No</label>
                        <input v-model="temporary_ward_no" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Village / Tole Name</label>
                        <input v-model="temporary_viltol" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>House No</label>
                        <input v-model="temporary_house_no" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Contact No</label>
                        <input v-model="temporary_contact_no" type="number" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h2><b>Income</b></h2>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Annual Income</label>
                        <input v-model="annual_income" type="number" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Annual Family Income</label>
                        <input v-model="annual_family_income" type="number" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h2><b>Account</b></h2>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Account Type</label>
                        <select v-model="account_type" @input="delayedAccountTypeChanged" class="form-control">
                            <option value="CURRENT">CURRENT</option>
                            <option value="SAVING">SAVING</option>
                        </select><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Transaction Date (AD)</label>
                        <input v-model="account_date_ad" type="date" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Transaction Date (BS)</label>
                        <input v-model="account_date_bs" type="date" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Interest Rate (%)</label>
                        <input v-model="account_rate" type="text" class="form-control" maxlength="50" readonly><br>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Min Amount (RS)</label>
                        <input v-model="account_min_amt" type="text" class="form-control" maxlength="50" readonly><br>
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
  import axios from 'axios';
  const url = 'http://127.0.0.1:8000/api/auth/opening/';
  
  export default {
    data() {
      return {
        kycdata: [],
        message: '',
        kycEnable: true,
        kycnumber: '',

        customer_id: '',
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
        account_types: '',
        account_date_ad: '',
        account_date_bs: '',
        account_rate: '',
        account_min_amt: '',
      };
    },
    mounted()
    {
        const accessToken = localStorage.getItem('access_token')
        axios.get(url + 'getengnepdate', {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            }
        }).then(response => {
            if(response.date.code == 200)
            {
                console.log(response)
                this.account_date_ad = response.data.englishdate;
            }
        }).catch(error=>{
            console.log(error)
        });
    },
    methods: {
      delayedKycNumberChanged() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.kycNumberChanged();
        }, 500);
      },
      delayedAccountTypeChanged() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.accountTypeChanged();
        }, 500);
      },
      accountTypeChanged(){
        const accessToken = localStorage.getItem('access_token')
        const formData = {
            'account_type': this.account_type,
        }
        axios.post(url + 'accounttype', formData, {
        headers: {
          'Authorization': 'Bearer ' + accessToken,
        },
        }).then(response => {
            console.log(response);
            if(response.data.code == 200)
            {
                for(const data of response.data.data)
                {
                    // this.account_types = data.account_types
                    // this.account_date_ad = data.account_date_ad
                    // this.account_date_bs = data.account_date_bs
                    this.account_rate = data.account_rate
                    this.account_min_amt = data.account_min_amt
                }
            }
            else
            {
                const message = response.data.message;
            }
        }).catch(error => {
            console.log(error);
        });
      },
      kycNumberChanged() {
        const accessToken = localStorage.getItem('access_token')
        const formData = {
            'kycnumber': this.kycnumber,
        }
        axios.post(url + 'index', formData, {
        headers: {
          'Authorization': 'Bearer ' + accessToken,
        },
        }).then(response => {
            console.log(response);
            if(response.data.code == 200)
            {
                this.kycdata = response.data.pass;
                for (const kyc of this.kycdata) {
                    console.log(kyc.firstname)
                    this.customer_id = kyc.customer_id;
                    this.first_name = kyc.first_name;
                    this.middle_name = kyc.middle_name;
                    this.last_name = kyc.last_name;
                    this.dob_bs = kyc.dob_bs;
                    this.dob_ad = kyc.dob_ad;
                    this.citizen_no = kyc.citizen_no;
                    this.email = kyc.email;
                    this.father_name = kyc.father_name;
                    this.mother_name = kyc.mother_name;
                    this.martial_status = kyc.martial_status;
                    this.huswif_name = kyc.huswif_name;
                    this.job = kyc.job;
                    this.permanent_province = kyc.permanent_province;
                    this.permanent_ward_no = kyc.permanent_ward_no;
                    this.permanent_viltol = kyc.permanent_viltol;
                    this.permanent_house_no = kyc.permanent_house_no;
                    this.permanent_contact_no = kyc.permanent_contact_no;
                    this.temporary_province = kyc.temporary_province;
                    this.temporary_ward_no = kyc.temporary_ward_no;
                    this.temporary_viltol = kyc.temporary_viltol;
                    this.temporary_house_no = kyc.temporary_house_no;
                    this.temporary_contact_no = kyc.temporary_contact_no;
                    this.annual_income = kyc.annual_income;
                    this.annual_family_income = kyc.annual_family_income;
                }
                this.kycEnable = false;
            }
            else
            {
                const message = response.data.message;
                alert(message)
            }
        }).catch(error => {
            console.log(error);
        });
      },
      submitForm(){
                const accessToken = localStorage.getItem('access_token')
                const formData = {
                    'customer_id': this.customer_id,
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
                    'account_types': this.account_types,
                    'account_date_ad': this.account_date_ad,
                    'account_date_bs': this.account_date_bs,
                    'account_rate': this.account_rate,
                    'account_min_amt': this.account_min_amt,
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
    },
  };
  </script>
  
  <style scoped>
  .mainbar {
    height: 100%;
    width: 100%;
    background-color: white;
    color: black;
  }
  </style>
  