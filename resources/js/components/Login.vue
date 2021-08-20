<template>
    <div>
            <button class="btn btn-success">
                    <i class="fab fa-twitch"></i>
                    <a class = "non-textdecoration" href="https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=2n9u9j32o07bqgpgkyakmgy7hjdbsw&redirect_uri=http://localhost/profile&scope=viewing_activity_read&state=c3ab8aa609ea11e793ae92361f002671&force_verify=true">
                    Login with Twitch
                    </a>
            </button>
            <br/>
            <p>or</p>
            <hr/>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text"  class="form-control" />
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"  name="password" class="form-control" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Login</button>
                <router-link to="" class="btn btn-link">Register</router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
};
</script>
