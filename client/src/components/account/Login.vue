// CreateComponent.vue

<template>
    <div class=''>
<div class="pb-2 mt-2 mb-4 offset-md-3 mt-5">
    <h3>Log in</h3>
</div>
<form method="POST"><input type="hidden" name="_csrf" />
    <div class="form-group row"><label class="col-md-3 col-form-label font-weight-bold text-right" for="email">Email</label>
        <div class="col-md-7"><input class="form-control" type="email" name="email" id="email" placeholder="Email" autofocus="autofocus" autocomplete="email" required="required" /></div>
    </div>
    <div class="form-group row"><label class="col-md-3 col-form-label font-weight-bold text-right" for="password">Password</label>
        <div class="col-md-7"><input class="form-control" type="password" name="password" id="password" placeholder="Password" autocomplete="current-password" required="required" /></div>
    </div>
    <div class="form-group">
        <div class="offset-md-3 col-md-7 pl-2"><button class="col-md-3 btn btn-primary" type="submit"><i class="far fa-user fa-sm"></i>Login</button><a class="btn btn-link" href="/forgot">Forgot your password?</a></div>
    </div>
    <div class="form-group">
        <div class="offset-md-3 col-md-7 pl-2">
            <hr />
        </div>
    </div>
    <div class="form-group">
        <div class="offset-md-3 col-md-7 pl-2"><a class="btn btn-block btn-google btn-social" href="/auth/google"><i class="fab fa-google-plus-g fa-xs"></i>Sign in with Google</a></div>
    </div>
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

