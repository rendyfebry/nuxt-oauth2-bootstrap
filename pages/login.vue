<template>
    <div>
        <h2>Login</h2>
        <div>
            <pre>{{ state }}</pre>
        </div>
    </div>
</template>

<script>
export default {
	middleware: ['auth'],
}
</script>
