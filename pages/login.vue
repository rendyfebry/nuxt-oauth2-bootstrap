<template>
    <div class="container">
        <div class="wrapper">
            <h2>Login</h2>
            <form>
                <div class="form-group">
                    <input type="email" name="email" class="form-control" placeholder="Email" />
                </div>

                <div class="form-group">
                    <input type="password" name="password" class="form-control" placeholder="Password" />
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block">
                        Login
                    </button>
                </div>
            </form>

            <hr />

            <button type="button" class="btn btn-primary btn-block" @click="googleLogin">
                Continue with Google
            </button>
            <button type="button" class="btn btn-primary btn-block" @click="facebookLogin">
                Continue with Facebook
            </button>
        </div>
    </div>
</template>

<script>
export default {
	middleware: ['auth'],
	methods: {
		googleLogin() {
			this.$auth.loginWith('google')
		},
		facebookLogin() {
			this.$auth.loginWith('facebook')
		},
	},
}
</script>

<style scoped>
.wrapper {
	max-width: 400px;
	margin: 0 auto;
}
</style>

