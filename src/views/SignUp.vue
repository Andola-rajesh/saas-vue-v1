<template>
  <div class="">
    <!-- Sign up form -->
        <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" v-model="user.first_name" placeholder="First name"/>
                            </div>
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" v-model="user.last_name" placeholder="Last name"/>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" v-model="user.email" placeholder="Your Email"/>
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" v-model="user.pass" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" v-model="user.password" placeholder="Repeat your password"/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="agree-term" v-model="user.agree_term" class="agree-term" />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                            </div>
                            <div class="form-group form-button">
                                <input type="button" name="signup" id="signup" class="form-submit" value="Register" @click="register()"/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src="../assets/images/signin-image.jpg" alt="sing up image"></figure>
                        <router-link to="/sign-in">I am already member</router-link>
                    </div>
                </div>
            </div>
        </section>    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignUp',
  path: '/signup',
  components: {
   
  },
  props: {
   
  },
  data() {
    return {
        user: {
          email: null,
          password: null,
          is_active: null,
          is_superuser: null,
          is_verified: null,
          invite_token: null,
          first_name: null,
          last_name: null,
          agree_term: null,
        },
    }
  },
  method:{
    register(){
      console.warn(this.user);
        // let vm = this;
        var page_url = "https://osbaseleaf-api.andolasoft.co.in/v1/auth/register";
        let data = {
            "order_id":this.$route.params.id,
            "product_ids": this.selected_product_ids,
            "qty":this.selected_product_qty
        };
        axios
            .post(page_url, data, this.token)
            .then((res) => {
                this.returnPrice = res.data.data.total_amount;
            })
            .catch((error) => {
                this.error_message = "";
                if (error.response.status == 422) {
                    if (error.response.data.status == "Error") {
                        this.error_message = error.response.data.message;
                    } else {
                        this.errors.record(error.response.data.errors);
                    }
                }
            });
        },
  }
}
</script>