// CreateComponent.vue

<template>
    <div class=''>
   <div class="offset-md-3 px-2 mt-5 mb-4">
    <h3>Sign up</h3>
</div>
<div class="form-group">
    <div class="offset-md-3 col-md-7 pl-2"><br /><br /><label class="col-form-label font-weight-bold text-right">Easier & more secure</label><a class="btn btn-block btn-google btn-social" href="/auth/google"><i class="fab fa-google-plus-g fa-xs"></i>Sign in with Google</a><br />
        <hr />
    </div>
</div>
<form id="signup-form" method="POST">
    <div class="form-group row offset-md-3"><label class="col-form-label font-weight-bold text-right pl-2">Create an account</label></div><input type="hidden" name="_csrf" />
    <div class="form-group row"><label class="col-md-3 col-form-label font-weight-bold text-right" for="email">Email</label>
        <div class="col-md-7"><input class="form-control" type="email" name="email" id="email" placeholder="Email" autofocus="autofocus" autocomplete="email" required="required" /></div>
    </div>
    <div class="form-group row"><label class="col-md-3 col-form-label font-weight-bold text-right" for="password">Password</label>
        <div class="col-md-7"><input class="form-control" type="password" name="password" id="password" placeholder="Password" autocomplete="new-password" minlength="1" required="required" /></div>
    </div>
    <div class="form-group row"><label class="col-md-3 col-form-label font-weight-bold text-right" for="confirmPassword">Confirm Password</label>
        <div class="col-md-7"><input class="form-control" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" autocomplete="new-password" minlength="1" required="required" /></div>
    </div>
    <div class="form-group offset-sm-3 col-md-7 pl-2"><button class="btn btn-success" type="submit"><i class="fas fa-user-plus fa-sm"></i>Signup</button></div>
</form>
    </div>
</template>

<style>

</style>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        validateForm() {
            var forms = document.getElementsByClassName('needs-validation');
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }
    },
}
</script>

