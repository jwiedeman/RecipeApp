// CreateComponent.vue

<template>
    <div class=''>
    <div class="pb-2 mt-2 mb-4 border-bottom">
    <h3>Forgot Password</h3>
</div>
<form method="POST"><input type="hidden" name="_csrf" />
    <p class="pb-4">Enter your email address below and we will send you password reset instructions.</p>
    <div class="form-group row"><label class="col-md-3 col-form-label font-weight-bold text-right" for="email">Email</label>
        <div class="col-md-7"><input class="form-control" type="email" name="email" id="email" placeholder="Email" autofocus="autofocus" autocomplete="email" required="required" /></div>
    </div>
    <div class="form-group offset-sm-3 col-md-7 pl-2"><button class="btn btn-primary" type="submit"><i class="fas fa-key fa-sm"></i>Reset Password</button></div>
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

