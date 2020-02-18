// CreateComponent.vue

<template>
    <div class=''>
    <div class="border-bottom">
        <h3>Contact Form</h3>
    </div>
    <form method="POST"><input type="hidden" name="_csrf" />
        <div class="form-group row"><label class="col-md-2 col-form-label font-weight-bold" for="message">Please
                describe the issue or your suggestion</label>
            <div class="col-md-8"><textarea class="form-control" name="message" id="message" rows="7" autofocus="true"
                    required="required"></textarea></div>
        </div>
        <div class="form-group">
            <div class="offset-md-2 col-md-8 p-1"><button class="btn btn-primary" type="submit"><i
                        class="far fa-envelope fa-sm"></i>Send</button></div>
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

