<template>
    <div>
        <h2>Profile</h2>
        <div>
            <pre>{{ state }}</pre>
        </div>
        <hr />
        <button type="button" @click="$auth.logout()">Logout</button>
    </div>
</template>

<script>
export default {
	middleware: ['auth'],
	computed: {
		state() {
			return JSON.stringify(this.$auth.$state, undefined, 2)
		},
	},
}
</script>
