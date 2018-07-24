<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <nuxt-link to="/" exact class="navbar-brand">Navbar</nuxt-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
				<template v-if="$auth.$state.loggedIn">
                <li class="nav-item">
                    <nuxt-link to="/profile" class="nav-link">Profile</nuxt-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="$auth.logout()">Logout</a>
                </li>
				</template>
                <template v-else>
                <li class="nav-item">
                    <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
                </li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<style>
</style>

