<template>
    <div>
        <h2>Login</h2>
        <form>
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>

        <hr />

        <button type="button" @click="googleLogin">Continue with Google</button>
        <button type="button" @click="facebookLogin">Continue with Facebook</button>
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
